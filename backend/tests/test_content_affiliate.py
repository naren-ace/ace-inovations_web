# Test suite for Iteration 3: Content & Affiliate Engine
# Tests Payload CMS collections: Media, Stacks, Affiliates
# Tests /go/[slug] redirect route with click tracking

import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestPayloadAuth:
    """Authentication and Users API tests"""
    
    def test_users_login(self):
        """POST /api/users/login - Admin authentication"""
        response = requests.post(f"{BASE_URL}/api/users/login", json={
            "email": "admin@ace.io",
            "password": "AceAdmin2025!"
        })
        assert response.status_code == 200
        data = response.json()
        assert "token" in data
        assert data["message"] == "Authentication Passed"
        assert data["user"]["email"] == "admin@ace.io"
        
    def test_users_api_accessible(self):
        """GET /api/users - Verify users collection accessible"""
        response = requests.get(f"{BASE_URL}/api/users")
        assert response.status_code == 200
        data = response.json()
        assert "docs" in data
        assert "totalDocs" in data


class TestStacksCollection:
    """Stacks (blog posts) CRUD tests"""
    
    @pytest.fixture
    def auth_token(self):
        response = requests.post(f"{BASE_URL}/api/users/login", json={
            "email": "admin@ace.io",
            "password": "AceAdmin2025!"
        })
        return response.json()["token"]
    
    def test_stacks_list(self):
        """GET /api/stacks - List all blog posts"""
        response = requests.get(f"{BASE_URL}/api/stacks")
        assert response.status_code == 200
        data = response.json()
        assert "docs" in data
        assert "totalDocs" in data
        
    def test_existing_stack_data_structure(self):
        """Verify existing stack has correct fields"""
        response = requests.get(f"{BASE_URL}/api/stacks")
        assert response.status_code == 200
        data = response.json()
        if data["totalDocs"] > 0:
            stack = data["docs"][0]
            # Verify required fields exist
            assert "id" in stack
            assert "title" in stack
            assert "slug" in stack
            assert "category" in stack
            assert "content" in stack
            assert "status" in stack
            # Verify category is valid option
            assert stack["category"] in ["ai-strategy", "engineering", "case-studies", "field-notes"]
            # Verify status is valid
            assert stack["status"] in ["draft", "published"]
    
    def test_create_stack_with_slug_auto_generation(self, auth_token):
        """POST /api/stacks - Create blog post, verify slug auto-generated"""
        headers = {"Authorization": f"JWT {auth_token}"}
        payload = {
            "title": "TEST Engineering Best Practices 2025",
            "category": "engineering",
            "excerpt": "Test excerpt for engineering post",
            "content": {
                "root": {
                    "type": "root",
                    "children": [{"type": "paragraph", "children": [{"text": "Test content", "type": "text"}]}]
                }
            },
            "status": "draft"
        }
        response = requests.post(f"{BASE_URL}/api/stacks", json=payload, headers=headers)
        assert response.status_code == 201
        data = response.json()
        assert data["doc"]["title"] == "TEST Engineering Best Practices 2025"
        assert data["doc"]["slug"] == "test-engineering-best-practices-2025"  # Auto-generated
        assert data["doc"]["category"] == "engineering"
        assert data["doc"]["status"] == "draft"
        
        # Cleanup
        stack_id = data["doc"]["id"]
        requests.delete(f"{BASE_URL}/api/stacks/{stack_id}", headers=headers)
        
    def test_update_stack(self, auth_token):
        """PUT /api/stacks/:id - Update blog post"""
        headers = {"Authorization": f"JWT {auth_token}"}
        # First create
        payload = {
            "title": "TEST Update Test Stack",
            "slug": "test-update-stack",
            "category": "field-notes",
            "content": {"root": {"type": "root", "children": [{"type": "paragraph", "children": [{"text": "Original", "type": "text"}]}]}},
            "status": "draft"
        }
        create_resp = requests.post(f"{BASE_URL}/api/stacks", json=payload, headers=headers)
        assert create_resp.status_code == 201
        stack_id = create_resp.json()["doc"]["id"]
        
        # Update
        update_resp = requests.patch(f"{BASE_URL}/api/stacks/{stack_id}", json={"status": "published"}, headers=headers)
        assert update_resp.status_code == 200
        assert update_resp.json()["doc"]["status"] == "published"
        
        # Verify persistence
        get_resp = requests.get(f"{BASE_URL}/api/stacks/{stack_id}")
        assert get_resp.status_code == 200
        assert get_resp.json()["status"] == "published"
        
        # Cleanup
        requests.delete(f"{BASE_URL}/api/stacks/{stack_id}", headers=headers)


class TestAffiliatesCollection:
    """Affiliates CRUD tests"""
    
    @pytest.fixture
    def auth_token(self):
        response = requests.post(f"{BASE_URL}/api/users/login", json={
            "email": "admin@ace.io",
            "password": "AceAdmin2025!"
        })
        return response.json()["token"]
    
    def test_affiliates_list(self):
        """GET /api/affiliates - List all affiliates"""
        response = requests.get(f"{BASE_URL}/api/affiliates")
        assert response.status_code == 200
        data = response.json()
        assert "docs" in data
        assert "totalDocs" in data
        
    def test_existing_affiliate_structure(self):
        """Verify existing affiliate has correct fields"""
        response = requests.get(f"{BASE_URL}/api/affiliates")
        assert response.status_code == 200
        data = response.json()
        if data["totalDocs"] > 0:
            affiliate = data["docs"][0]
            assert "id" in affiliate
            assert "partnerName" in affiliate
            assert "targetUrl" in affiliate
            assert "slug" in affiliate
            assert "active" in affiliate
            assert "clickCount" in affiliate
            assert isinstance(affiliate["active"], bool)
            assert isinstance(affiliate["clickCount"], int)
    
    def test_create_affiliate(self, auth_token):
        """POST /api/affiliates - Create affiliate with all fields"""
        headers = {"Authorization": f"JWT {auth_token}"}
        payload = {
            "partnerName": "TEST AWS Partner",
            "targetUrl": "https://aws.amazon.com",
            "slug": "test-aws-partner",
            "active": True,
            "categoryTag": "cloud",
            "description": "Testing affiliate creation"
        }
        response = requests.post(f"{BASE_URL}/api/affiliates", json=payload, headers=headers)
        assert response.status_code == 201
        data = response.json()
        assert data["doc"]["partnerName"] == "TEST AWS Partner"
        assert data["doc"]["targetUrl"] == "https://aws.amazon.com"
        assert data["doc"]["slug"] == "test-aws-partner"
        assert data["doc"]["active"] == True
        assert data["doc"]["categoryTag"] == "cloud"
        assert data["doc"]["clickCount"] == 0  # Default value
        
        # Cleanup
        affiliate_id = data["doc"]["id"]
        requests.delete(f"{BASE_URL}/api/affiliates/{affiliate_id}", headers=headers)
        
    def test_update_affiliate_active_toggle(self, auth_token):
        """PATCH /api/affiliates/:id - Toggle active status"""
        headers = {"Authorization": f"JWT {auth_token}"}
        # Create
        create_resp = requests.post(f"{BASE_URL}/api/affiliates", json={
            "partnerName": "TEST Toggle Partner",
            "targetUrl": "https://example.org",
            "slug": "test-toggle-partner",
            "active": True
        }, headers=headers)
        assert create_resp.status_code == 201
        affiliate_id = create_resp.json()["doc"]["id"]
        
        # Toggle off
        update_resp = requests.patch(f"{BASE_URL}/api/affiliates/{affiliate_id}", json={"active": False}, headers=headers)
        assert update_resp.status_code == 200
        assert update_resp.json()["doc"]["active"] == False
        
        # Verify persistence
        get_resp = requests.get(f"{BASE_URL}/api/affiliates/{affiliate_id}")
        assert get_resp.status_code == 200
        assert get_resp.json()["active"] == False
        
        # Cleanup
        requests.delete(f"{BASE_URL}/api/affiliates/{affiliate_id}", headers=headers)


class TestMediaCollection:
    """Media (upload) collection tests"""
    
    def test_media_list(self):
        """GET /api/media - List media collection"""
        response = requests.get(f"{BASE_URL}/api/media")
        assert response.status_code == 200
        data = response.json()
        assert "docs" in data
        assert "totalDocs" in data


class TestAffiliateRedirects:
    """Tests for /go/[slug] redirect route"""
    
    def test_active_affiliate_redirect_302(self):
        """GET /go/vercel - Returns 302 redirect to target URL"""
        response = requests.get(f"{BASE_URL}/go/vercel", allow_redirects=False)
        assert response.status_code == 302
        assert "vercel.com" in response.headers.get("Location", "")
    
    def test_inactive_affiliate_returns_410(self):
        """GET /go/disabled-test - Returns 410 for inactive affiliate"""
        response = requests.get(f"{BASE_URL}/go/disabled-test", allow_redirects=False)
        assert response.status_code == 410
        data = response.json()
        assert "error" in data
        assert "inactive" in data["error"].lower()
    
    def test_nonexistent_affiliate_returns_404(self):
        """GET /go/nonexistent - Returns 404 for unknown slug"""
        response = requests.get(f"{BASE_URL}/go/nonexistent", allow_redirects=False)
        assert response.status_code == 404
        data = response.json()
        assert "error" in data
        assert "not found" in data["error"].lower()
    
    def test_click_count_increment(self):
        """Verify click count increments on redirect"""
        # Get initial count
        initial_resp = requests.get(f"{BASE_URL}/api/affiliates")
        initial_data = initial_resp.json()
        vercel_affiliate = next((a for a in initial_data["docs"] if a["slug"] == "vercel"), None)
        assert vercel_affiliate is not None
        initial_count = vercel_affiliate["clickCount"]
        
        # Visit redirect
        requests.get(f"{BASE_URL}/go/vercel", allow_redirects=False)
        
        # Check new count
        after_resp = requests.get(f"{BASE_URL}/api/affiliates")
        after_data = after_resp.json()
        vercel_after = next((a for a in after_data["docs"] if a["slug"] == "vercel"), None)
        assert vercel_after["clickCount"] == initial_count + 1
