"""
Iteration 23 Tests - Homepage CTA Removal and About Page Enhancement

Tests:
- Homepage API returns 6 sections (CTA section removed)
- About page sections verification via frontend
- Leads API source validation fix
- Admin login verification
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHomepageAPI:
    """Test homepage API returns correct sections"""
    
    def test_homepage_api_returns_6_sections(self):
        """Homepage should have exactly 6 sections: hero, transition, philosophy, engine, loop, leadMagnet"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        assert 'sections' in data
        sections = data['sections']
        assert len(sections) == 6, f"Expected 6 sections, got {len(sections)}"
        
        # Verify section types
        section_types = [s['blockType'] for s in sections]
        expected_types = ['hero', 'transition', 'philosophy', 'engine', 'loop', 'leadMagnet']
        assert section_types == expected_types, f"Expected {expected_types}, got {section_types}"
        
    def test_cta_section_not_in_homepage(self):
        """Verify CTA section is NOT in homepage sections"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        sections = data['sections']
        section_types = [s['blockType'] for s in sections]
        
        assert 'cta' not in section_types, "CTA section should be removed from homepage"
        
    def test_engine_section_has_6_capabilities(self):
        """Engine section should have 6 capability cards"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        engine_section = next((s for s in data['sections'] if s['blockType'] == 'engine'), None)
        assert engine_section is not None
        
        capabilities = engine_section.get('capabilities', [])
        assert len(capabilities) == 6, f"Expected 6 capabilities, got {len(capabilities)}"
        
    def test_ace_loop_has_4_steps(self):
        """ACE Loop section should have 4 steps"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        loop_section = next((s for s in data['sections'] if s['blockType'] == 'loop'), None)
        assert loop_section is not None
        
        steps = loop_section.get('steps', [])
        assert len(steps) == 4, f"Expected 4 steps, got {len(steps)}"


class TestLeadsAPI:
    """Test leads API with valid source values"""
    
    def test_leads_create_with_contact_form_source(self):
        """Test creating lead with 'contact-form' source"""
        payload = {
            "name": "Test Contact Form User",
            "email": f"test_contact_{os.getpid()}@example.com",
            "painPoints": "Testing contact form source",
            "source": "contact-form",
            "status": "new"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/leads",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code in [200, 201], f"Failed with {response.status_code}: {response.text}"
        
    def test_leads_create_with_lead_magnet_source(self):
        """Test creating lead with 'lead-magnet-audit' source"""
        payload = {
            "name": "Test Lead Magnet User",
            "email": f"test_magnet_{os.getpid()}@example.com",
            "painPoints": "Testing lead magnet source",
            "source": "lead-magnet-audit",
            "status": "new"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/leads",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code in [200, 201], f"Failed with {response.status_code}: {response.text}"
        
    def test_leads_create_with_invalid_source_fails(self):
        """Test that invalid source value is rejected"""
        payload = {
            "name": "Test Invalid Source",
            "email": f"test_invalid_{os.getpid()}@example.com",
            "painPoints": "Testing invalid source",
            "source": "invalid-source-value",
            "status": "new"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/leads",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        # Should fail validation
        assert response.status_code == 400, f"Expected 400, got {response.status_code}"


class TestAdminAuth:
    """Test admin authentication"""
    
    def test_admin_login(self):
        """Test admin login with valid credentials"""
        payload = {
            "email": "admin@aceinovations.com",
            "password": "AceAdmin2025!"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/users/login",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 200, f"Login failed with {response.status_code}: {response.text}"
        
        data = response.json()
        assert 'user' in data or 'token' in data, "Expected user or token in response"


class TestAboutPageContent:
    """Test that About page is accessible (frontend route test via API)"""
    
    def test_about_page_accessible(self):
        """Test /about page returns 200"""
        response = requests.get(f"{BASE_URL}/about")
        assert response.status_code == 200, f"About page returned {response.status_code}"


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
