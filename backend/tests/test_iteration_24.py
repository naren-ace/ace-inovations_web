"""
Iteration 24 - Backend API Tests
Testing Services collection, About Page global, and service pages

Features tested:
- /api/services - Returns all 6 services with correct data
- /api/globals/about - Returns About page CMS data
- Individual service slugs and page content
"""

import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestServicesAPI:
    """Test Services collection API"""
    
    def test_get_all_services(self):
        """Verify /api/services returns all 6 services"""
        response = requests.get(f"{BASE_URL}/api/services")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        assert "docs" in data, "Response should have 'docs' field"
        assert data["totalDocs"] == 6, f"Expected 6 services, got {data['totalDocs']}"
        
        # Verify all expected slugs are present
        slugs = [s["slug"] for s in data["docs"]]
        expected_slugs = [
            "platform-development",
            "mobile-development",
            "ai-automation",
            "platform-optimization",
            "saas-engineering",
            "marketplace-customization"
        ]
        for slug in expected_slugs:
            assert slug in slugs, f"Missing service slug: {slug}"
        
        print(f"✓ Found all 6 services: {slugs}")
    
    def test_services_have_required_fields(self):
        """Verify each service has required fields"""
        response = requests.get(f"{BASE_URL}/api/services")
        assert response.status_code == 200
        
        data = response.json()
        required_fields = ["id", "title", "slug", "shortDescription", "icon", "colorTheme", "page"]
        
        for service in data["docs"]:
            for field in required_fields:
                assert field in service, f"Service {service.get('slug', 'unknown')} missing field: {field}"
            
            # Verify page has required nested fields
            page = service["page"]
            page_fields = ["heroHeading", "heroDescription", "ctaButtonText", "features", "whyUsHeading", "whyUsBody", "deliverables"]
            for field in page_fields:
                assert field in page, f"Service {service['slug']} page missing field: {field}"
        
        print("✓ All services have required fields")
    
    def test_service_by_slug_platform_development(self):
        """Verify single service query by slug"""
        response = requests.get(f"{BASE_URL}/api/services?where[slug][equals]=platform-development&limit=1")
        assert response.status_code == 200
        
        data = response.json()
        assert len(data["docs"]) == 1, "Should return exactly 1 service"
        
        service = data["docs"][0]
        assert service["title"] == "Platform & Marketplace Development"
        assert service["slug"] == "platform-development"
        assert service["icon"] == "globe"
        assert service["colorTheme"] == "blue"
        
        # Verify page content
        page = service["page"]
        assert "Custom platforms" in page["heroHeading"]
        assert len(page["features"]) >= 4, "Should have at least 4 features"
        assert len(page["deliverables"]) >= 4, "Should have at least 4 deliverables"
        
        print(f"✓ Platform Development service verified: {service['title']}")
    
    def test_service_sorted_by_order(self):
        """Verify services can be sorted by order field"""
        response = requests.get(f"{BASE_URL}/api/services?sort=order")
        assert response.status_code == 200
        
        data = response.json()
        orders = [s["order"] for s in data["docs"]]
        
        # Verify orders are in ascending order
        assert orders == sorted(orders), "Services should be sorted by order"
        print(f"✓ Services sorted correctly by order: {orders}")


class TestAboutPageGlobal:
    """Test About Page global API"""
    
    def test_get_about_page_global(self):
        """Verify /api/globals/about returns about page data"""
        response = requests.get(f"{BASE_URL}/api/globals/about")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        
        # Verify required sections exist
        required_sections = ["hero", "mission", "vision", "values", "contact"]
        for section in required_sections:
            assert section in data, f"Missing section: {section}"
        
        print("✓ About page global has all required sections")
    
    def test_about_hero_section(self):
        """Verify hero section has correct content"""
        response = requests.get(f"{BASE_URL}/api/globals/about")
        assert response.status_code == 200
        
        data = response.json()
        hero = data["hero"]
        
        # Verify hero fields
        assert hero["headingHighlight"] == "think, adapt, and scale", "Hero highlight should match expected text"
        assert "ACE inovations" in hero["label"], "Label should contain 'ACE inovations'"
        assert "@" in hero["email"], "Email should be valid"
        
        print(f"✓ Hero section verified: '{hero['headingPart1']} {hero['headingHighlight']}'")
    
    def test_about_values_section(self):
        """Verify values section has 6 value cards"""
        response = requests.get(f"{BASE_URL}/api/globals/about")
        assert response.status_code == 200
        
        data = response.json()
        values = data["values"]
        
        assert len(values) == 6, f"Expected 6 values, got {len(values)}"
        
        # Verify each value has required fields
        for value in values:
            assert "title" in value, "Value missing title"
            assert "description" in value, "Value missing description"
            assert "icon" in value, "Value missing icon"
        
        # Verify expected value titles
        value_titles = [v["title"] for v in values]
        expected_titles = ["Outcome-Obsessed", "AI-Native Engineering", "Enterprise Integrity"]
        for title in expected_titles:
            assert title in value_titles, f"Missing value: {title}"
        
        print(f"✓ Values section verified: {value_titles}")
    
    def test_about_mission_vision(self):
        """Verify mission and vision sections"""
        response = requests.get(f"{BASE_URL}/api/globals/about")
        assert response.status_code == 200
        
        data = response.json()
        
        # Mission section
        mission = data["mission"]
        assert "vision and execution" in mission["headingHighlight"]
        assert len(mission["body1"]) > 50, "Mission body1 should have substantial content"
        
        # Vision section
        vision = data["vision"]
        assert "every founder ships" in vision["headingHighlight"]
        assert "Fortune 500" in vision["headingAfter"]
        
        print("✓ Mission and Vision sections verified")


class TestServicePages:
    """Test individual service page data"""
    
    def test_mobile_development_service(self):
        """Verify mobile development service"""
        response = requests.get(f"{BASE_URL}/api/services?where[slug][equals]=mobile-development&limit=1")
        assert response.status_code == 200
        
        data = response.json()
        service = data["docs"][0]
        
        assert service["title"] == "Mobile App Development"
        assert service["icon"] == "smartphone"
        assert "Mobile experiences" in service["page"]["heroHeading"]
        
        print(f"✓ Mobile Development service verified")
    
    def test_ai_automation_service(self):
        """Verify AI automation service"""
        response = requests.get(f"{BASE_URL}/api/services?where[slug][equals]=ai-automation&limit=1")
        assert response.status_code == 200
        
        data = response.json()
        service = data["docs"][0]
        
        assert service["title"] == "AI-Powered Automation"
        assert service["icon"] == "cpu"
        assert "Automate" in service["page"]["heroHeading"]
        
        print(f"✓ AI Automation service verified")
    
    def test_marketplace_customization_service(self):
        """Verify marketplace customization service"""
        response = requests.get(f"{BASE_URL}/api/services?where[slug][equals]=marketplace-customization&limit=1")
        assert response.status_code == 200
        
        data = response.json()
        service = data["docs"][0]
        
        assert service["title"] == "Marketplace Customization"
        assert service["icon"] == "settings"
        assert "marketplace platform" in service["page"]["heroHeading"].lower()
        
        print(f"✓ Marketplace Customization service verified")


class TestHomepage:
    """Test homepage still works"""
    
    def test_homepage_global(self):
        """Verify homepage global still returns data"""
        response = requests.get(f"{BASE_URL}/api/globals/homepage")
        assert response.status_code == 200
        
        data = response.json()
        assert "sections" in data, "Homepage should have sections array"
        
        # Verify hero section exists in sections array
        section_types = [s["blockType"] for s in data["sections"]]
        assert "hero" in section_types, "Homepage should have hero section in sections"
        assert len(data["sections"]) >= 6, "Homepage should have at least 6 sections"
        
        print(f"✓ Homepage global working with {len(data['sections'])} sections")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
