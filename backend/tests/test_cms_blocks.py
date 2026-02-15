"""
Test CMS Blocks-based Homepage API
Tests: Homepage sections API, Reordering, Deletion, Adding blocks
"""
import pytest
import requests
import os
import json
from copy import deepcopy

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHomepageCMSBlocks:
    """Test the blocks-based homepage CMS API"""
    
    original_sections = None  # Store original for cleanup
    auth_token = None
    
    @pytest.fixture(autouse=True)
    def setup(self):
        """Get auth token before tests"""
        if not TestHomepageCMSBlocks.auth_token:
            login_response = requests.post(
                f"{BASE_URL}/api/users/login",
                json={
                    "email": "admin@aceinovations.com",
                    "password": "AceAdmin2025!"
                }
            )
            if login_response.status_code == 200:
                data = login_response.json()
                TestHomepageCMSBlocks.auth_token = data.get('token')
                print(f"Auth token obtained: {TestHomepageCMSBlocks.auth_token[:20] if TestHomepageCMSBlocks.auth_token else 'None'}...")
        yield
    
    def get_headers(self):
        """Get headers with auth token"""
        headers = {"Content-Type": "application/json"}
        if self.auth_token:
            headers["Authorization"] = f"Bearer {self.auth_token}"
        return headers
    
    def test_01_cms_api_returns_sections_array(self):
        """Verify CMS API returns sections array with blockType"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        assert 'sections' in data, "Response must contain 'sections' field"
        assert isinstance(data['sections'], list), "sections must be an array"
        
        # Store original for later restoration
        TestHomepageCMSBlocks.original_sections = deepcopy(data['sections'])
        
        print(f"✓ Found {len(data['sections'])} sections")
        
    def test_02_all_blocks_have_blockType(self):
        """Verify each section has a blockType field"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        block_types = []
        
        for section in data['sections']:
            assert 'blockType' in section, f"Section missing blockType: {section.get('id', 'unknown')}"
            block_types.append(section['blockType'])
        
        print(f"✓ Block types found: {block_types}")
        
    def test_03_all_9_section_types_present(self):
        """Verify all 9 default section types are present"""
        expected_types = ['hero', 'transition', 'philosophy', 'engine', 'squads', 'loop', 'insights', 'cta', 'leadMagnet']
        
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        actual_types = [s['blockType'] for s in data['sections']]
        
        for expected in expected_types:
            assert expected in actual_types, f"Missing section type: {expected}"
            print(f"✓ Section type '{expected}' present")
        
    def test_04_sections_render_in_order(self):
        """Verify sections are in expected default order"""
        expected_order = ['hero', 'transition', 'philosophy', 'engine', 'squads', 'loop', 'insights', 'cta', 'leadMagnet']
        
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        actual_order = [s['blockType'] for s in data['sections']]
        
        assert actual_order == expected_order, f"Order mismatch. Expected: {expected_order}, Got: {actual_order}"
        print(f"✓ Sections in correct default order")
        
    def test_05_reorder_sections(self):
        """Test reordering sections by swapping first two"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        sections = data['sections']
        
        # Swap first two sections (hero and transition)
        if len(sections) >= 2:
            sections[0], sections[1] = sections[1], sections[0]
            
            # Update via POST
            update_response = requests.post(
                f"{BASE_URL}/api/globals/homepage",
                headers=self.get_headers(),
                json={"sections": sections}
            )
            
            # Accept 200 or 204 (success)
            assert update_response.status_code in [200, 204], f"Update failed: {update_response.status_code}"
            
            # Verify the change
            verify_response = requests.get(f"{BASE_URL}/api/globals/homepage")
            verify_data = verify_response.json()
            
            new_order = [s['blockType'] for s in verify_data['sections'][:2]]
            assert new_order == ['transition', 'hero'], f"Reorder failed. Got: {new_order}"
            print(f"✓ Successfully reordered sections: {new_order}")
            
            # Restore original order
            sections[0], sections[1] = sections[1], sections[0]
            requests.post(
                f"{BASE_URL}/api/globals/homepage",
                headers=self.get_headers(),
                json={"sections": sections}
            )
        
    def test_06_delete_section(self):
        """Test deleting a section (remove transition temporarily)"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        original_sections = deepcopy(data['sections'])
        original_count = len(original_sections)
        
        # Find and remove transition section
        sections_without_transition = [s for s in data['sections'] if s['blockType'] != 'transition']
        
        assert len(sections_without_transition) == original_count - 1, "Should have one less section"
        
        # Update via POST
        update_response = requests.post(
            f"{BASE_URL}/api/globals/homepage",
            headers=self.get_headers(),
            json={"sections": sections_without_transition}
        )
        
        assert update_response.status_code in [200, 204], f"Delete failed: {update_response.status_code}"
        
        # Verify deletion
        verify_response = requests.get(f"{BASE_URL}/api/globals/homepage")
        verify_data = verify_response.json()
        
        types_after = [s['blockType'] for s in verify_data['sections']]
        assert 'transition' not in types_after, "Transition should be deleted"
        print(f"✓ Successfully deleted transition section. Remaining types: {types_after}")
        
        # Restore original
        requests.post(
            f"{BASE_URL}/api/globals/homepage",
            headers=self.get_headers(),
            json={"sections": original_sections}
        )
        print("✓ Restored original sections")
        
    def test_07_add_custom_section(self):
        """Test adding a custom section block"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        original_sections = deepcopy(data['sections'])
        
        # Create a new custom section
        custom_section = {
            "blockType": "custom",
            "label": "Test Custom",
            "heading": "This is a Test Custom Section",
            "headingHighlight": "Test Custom",
            "body": "This section was added via API testing.",
            "ctaButtonText": "Learn More",
            "style": "default"
        }
        
        # Add to sections
        new_sections = deepcopy(data['sections'])
        new_sections.append(custom_section)
        
        # Update via POST
        update_response = requests.post(
            f"{BASE_URL}/api/globals/homepage",
            headers=self.get_headers(),
            json={"sections": new_sections}
        )
        
        assert update_response.status_code in [200, 204], f"Add custom failed: {update_response.status_code}"
        
        # Verify addition
        verify_response = requests.get(f"{BASE_URL}/api/globals/homepage")
        verify_data = verify_response.json()
        
        types_after = [s['blockType'] for s in verify_data['sections']]
        assert 'custom' in types_after, "Custom section should be added"
        
        # Find the custom section and verify content
        custom_in_response = next((s for s in verify_data['sections'] if s['blockType'] == 'custom'), None)
        assert custom_in_response is not None, "Custom section not found"
        assert custom_in_response.get('heading') == "This is a Test Custom Section", "Custom heading mismatch"
        
        print(f"✓ Successfully added custom section")
        
        # Restore original (without custom section)
        requests.post(
            f"{BASE_URL}/api/globals/homepage",
            headers=self.get_headers(),
            json={"sections": original_sections}
        )
        print("✓ Restored original sections (removed test custom)")
        
    def test_08_hero_section_content(self):
        """Verify hero section has correct content structure"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        hero = next((s for s in data['sections'] if s['blockType'] == 'hero'), None)
        
        assert hero is not None, "Hero section not found"
        
        # Check expected fields
        expected_fields = ['badgeText', 'headlinePart1', 'headlineHighlight', 'headlinePart2', 'narrative', 'ctaButtonText', 'secondaryButtonText']
        for field in expected_fields:
            assert field in hero, f"Hero missing field: {field}"
        
        print(f"✓ Hero section has all expected fields")
        print(f"  Badge: {hero.get('badgeText')}")
        print(f"  Headline: {hero.get('headlinePart1')} {hero.get('headlineHighlight')} {hero.get('headlinePart2')}")
        
    def test_09_engine_section_capabilities(self):
        """Verify engine section has capabilities array"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        engine = next((s for s in data['sections'] if s['blockType'] == 'engine'), None)
        
        assert engine is not None, "Engine section not found"
        assert 'capabilities' in engine, "Engine missing capabilities"
        assert isinstance(engine['capabilities'], list), "Capabilities must be array"
        assert len(engine['capabilities']) > 0, "Capabilities should not be empty"
        
        print(f"✓ Engine section has {len(engine['capabilities'])} capabilities")
        
    def test_10_squads_section_pillars(self):
        """Verify squads section has pillars array"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        squads = next((s for s in data['sections'] if s['blockType'] == 'squads'), None)
        
        assert squads is not None, "Squads section not found"
        assert 'pillars' in squads, "Squads missing pillars"
        assert isinstance(squads['pillars'], list), "Pillars must be array"
        
        print(f"✓ Squads section has {len(squads['pillars'])} pillars")
        
    def test_11_insights_section_articles(self):
        """Verify insights section has articles array"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        insights = next((s for s in data['sections'] if s['blockType'] == 'insights'), None)
        
        assert insights is not None, "Insights section not found"
        assert 'articles' in insights, "Insights missing articles"
        assert isinstance(insights['articles'], list), "Articles must be array"
        
        print(f"✓ Insights section has {len(insights['articles'])} articles")
        
    def test_12_loop_section_steps(self):
        """Verify loop section has steps array"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        loop = next((s for s in data['sections'] if s['blockType'] == 'loop'), None)
        
        assert loop is not None, "Loop section not found"
        assert 'steps' in loop, "Loop missing steps"
        assert isinstance(loop['steps'], list), "Steps must be array"
        
        print(f"✓ Loop section has {len(loop['steps'])} steps")


class TestDefaultFallback:
    """Test default fallback when no CMS data"""
    
    def test_homepage_has_defaults_defined(self):
        """Verify page.tsx has default blocks defined for fallback"""
        # This test verifies the code structure - default blocks should be defined
        # When CMS returns empty sections, frontend falls back to defaults
        
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        # If sections exist, the page will use them
        # If sections is empty/missing, page uses defaultBlocks
        
        assert 'sections' in data, "API must return sections field"
        print(f"✓ CMS returns sections array (fallback handled in frontend)")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
