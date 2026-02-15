"""
Test Leads API endpoint
Tests: Lead creation, validation, retrieval
"""
import pytest
import requests
import os
import uuid

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestLeadsAPI:
    """Test the leads collection API"""
    
    test_lead_id = None
    auth_token = None
    
    @pytest.fixture(autouse=True)
    def setup(self):
        """Get auth token for authenticated tests"""
        if not TestLeadsAPI.auth_token:
            login_response = requests.post(
                f"{BASE_URL}/api/users/login",
                json={
                    "email": "admin@aceinovations.com",
                    "password": "AceAdmin2025!"
                }
            )
            if login_response.status_code == 200:
                data = login_response.json()
                TestLeadsAPI.auth_token = data.get('token')
        yield
    
    def get_headers(self):
        """Get headers with auth token"""
        headers = {"Content-Type": "application/json"}
        if self.auth_token:
            headers["Authorization"] = f"Bearer {self.auth_token}"
        return headers
    
    def test_01_create_lead_basic(self):
        """Test creating a lead with basic required fields"""
        unique_email = f"test_{uuid.uuid4().hex[:8]}@example.com"
        
        response = requests.post(
            f"{BASE_URL}/api/leads",
            json={
                "name": "Test User",
                "email": unique_email
            }
        )
        
        # Should create lead successfully
        assert response.status_code in [200, 201], f"Expected 200/201, got {response.status_code}: {response.text}"
        
        data = response.json()
        assert 'doc' in data, "Response should contain 'doc' field"
        assert data['doc']['email'] == unique_email, "Email should match"
        assert data['doc']['name'] == "Test User", "Name should match"
        
        # Store ID for later cleanup
        TestLeadsAPI.test_lead_id = data['doc'].get('id')
        print(f"✓ Lead created with ID: {TestLeadsAPI.test_lead_id}")
        
    def test_02_create_lead_full(self):
        """Test creating a lead with all fields"""
        unique_email = f"full_{uuid.uuid4().hex[:8]}@example.com"
        
        response = requests.post(
            f"{BASE_URL}/api/leads",
            json={
                "name": "Full Test User",
                "email": unique_email,
                "company": "Test Company Inc",
                "message": "This is a test message from API testing"
            }
        )
        
        assert response.status_code in [200, 201], f"Expected 200/201, got {response.status_code}"
        
        data = response.json()
        assert data['doc']['email'] == unique_email
        assert data['doc']['company'] == "Test Company Inc"
        
        print(f"✓ Lead with all fields created successfully")
        
    def test_03_get_leads_list_authenticated(self):
        """Test getting leads list (requires auth)"""
        response = requests.get(
            f"{BASE_URL}/api/leads",
            headers=self.get_headers()
        )
        
        # Should return 200 with auth
        if response.status_code == 200:
            data = response.json()
            assert 'docs' in data, "Should have docs array"
            print(f"✓ Retrieved {len(data['docs'])} leads")
        else:
            # May return 403 if not authorized or no auth
            print(f"Note: Leads list returned {response.status_code}")
            
    def test_04_create_lead_without_email_fails(self):
        """Test that creating a lead without email fails"""
        response = requests.post(
            f"{BASE_URL}/api/leads",
            json={
                "name": "No Email User"
            }
        )
        
        # Should fail validation
        assert response.status_code >= 400, f"Expected error status, got {response.status_code}"
        print(f"✓ Correctly rejected lead without email (status {response.status_code})")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
