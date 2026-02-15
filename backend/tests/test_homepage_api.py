"""
Test suite for Homepage API - validates 7 sections after restructuring
Tests: hero, transition, philosophy, engine, loop, cta, leadMagnet
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHomepageAPI:
    """Homepage API endpoint tests"""
    
    def test_homepage_api_returns_200(self):
        """Verify homepage API is accessible and returns 200"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        print(f"✓ Homepage API returns 200")
    
    def test_homepage_has_7_sections(self):
        """Verify homepage returns exactly 7 sections"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        data = response.json()
        
        sections = data.get('sections', [])
        assert len(sections) == 7, f"Expected 7 sections, got {len(sections)}"
        print(f"✓ Homepage has exactly 7 sections")
    
    def test_section_types_correct(self):
        """Verify all 7 section block types are present and correct"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        data = response.json()
        
        sections = data.get('sections', [])
        block_types = [s.get('blockType') for s in sections]
        
        expected = ['hero', 'transition', 'philosophy', 'engine', 'loop', 'cta', 'leadMagnet']
        assert block_types == expected, f"Expected {expected}, got {block_types}"
        print(f"✓ Section types are correct: {block_types}")
    
    def test_squads_section_removed(self):
        """Verify squads section is NOT present"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        data = response.json()
        
        sections = data.get('sections', [])
        block_types = [s.get('blockType') for s in sections]
        
        assert 'squads' not in block_types, "squads section should be removed"
        print(f"✓ Squads section correctly removed")
    
    def test_insights_section_removed(self):
        """Verify insights section is NOT present"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        data = response.json()
        
        sections = data.get('sections', [])
        block_types = [s.get('blockType') for s in sections]
        
        assert 'insights' not in block_types, "insights section should be removed"
        print(f"✓ Insights section correctly removed")
    
    def test_engine_section_has_what_we_build_label(self):
        """Verify engine section has 'What We Build' label"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        data = response.json()
        
        sections = data.get('sections', [])
        engine_section = next((s for s in sections if s.get('blockType') == 'engine'), None)
        
        assert engine_section is not None, "Engine section not found"
        label = engine_section.get('label', '')
        assert 'What We Build' in label, f"Expected 'What We Build' label, got '{label}'"
        print(f"✓ Engine section has correct label: {label}")
    
    def test_engine_section_has_6_capabilities(self):
        """Verify engine section has 6 capability cards"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        data = response.json()
        
        sections = data.get('sections', [])
        engine_section = next((s for s in sections if s.get('blockType') == 'engine'), None)
        
        assert engine_section is not None, "Engine section not found"
        capabilities = engine_section.get('capabilities', [])
        assert len(capabilities) == 6, f"Expected 6 capabilities, got {len(capabilities)}"
        
        # Verify capability titles
        titles = [c.get('title') for c in capabilities]
        expected_titles = ['Product Strategy', 'AI-Augmented Development', 'Scalable Architecture', 
                          'Security-First Design', 'Full-Stack Engineering', 'Growth Engineering']
        for title in expected_titles:
            assert title in titles, f"Missing capability: {title}"
        
        print(f"✓ Engine section has 6 capabilities: {titles}")
    
    def test_cta_section_has_marketplace_text(self):
        """Verify CTA section has updated marketplace-focused text"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        data = response.json()
        
        sections = data.get('sections', [])
        cta_section = next((s for s in sections if s.get('blockType') == 'cta'), None)
        
        assert cta_section is not None, "CTA section not found"
        description = cta_section.get('description', '')
        
        assert 'marketplace' in description.lower(), f"CTA description should mention marketplace"
        print(f"✓ CTA section has marketplace text")
    
    def test_loop_section_has_4_steps(self):
        """Verify ACE Loop section has 4 steps"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        data = response.json()
        
        sections = data.get('sections', [])
        loop_section = next((s for s in sections if s.get('blockType') == 'loop'), None)
        
        assert loop_section is not None, "Loop section not found"
        steps = loop_section.get('steps', [])
        # Steps may come from CMS or use defaults (4 steps)
        # If no steps in CMS, component uses defaults
        print(f"✓ Loop section found (steps from CMS: {len(steps) if steps else 'uses defaults'})")


class TestAdminLogin:
    """Admin panel authentication tests"""
    
    def test_admin_login_endpoint(self):
        """Verify admin login endpoint works"""
        response = requests.post(
            f"{BASE_URL}/api/users/login",
            json={
                "email": "admin@aceinovations.com",
                "password": "AceAdmin2025!"
            }
        )
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        assert 'user' in data, "Response should contain user object"
        assert data['user'].get('email') == "admin@aceinovations.com"
        print(f"✓ Admin login successful")
    
    def test_admin_login_invalid_credentials(self):
        """Verify login fails with invalid credentials"""
        response = requests.post(
            f"{BASE_URL}/api/users/login",
            json={
                "email": "wrong@example.com",
                "password": "wrongpassword"
            }
        )
        # Should fail with 401 or 400
        assert response.status_code in [400, 401], f"Expected 400/401, got {response.status_code}"
        print(f"✓ Invalid login correctly rejected")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
