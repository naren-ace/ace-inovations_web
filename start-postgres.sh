#!/bin/bash
# Ensure PostgreSQL is running before the app starts
if ! pg_isready -q 2>/dev/null; then
    pg_ctlcluster 15 main start 2>&1
    sleep 2
fi

# Ensure user and database exist
su - postgres -c "psql -tc \"SELECT 1 FROM pg_roles WHERE rolname='aceadmin'\" | grep -q 1 || psql -c \"CREATE USER aceadmin WITH PASSWORD 'acepass2025' SUPERUSER;\"" 2>/dev/null
su - postgres -c "psql -tc \"SELECT 1 FROM pg_database WHERE datname='ace_cms'\" | grep -q 1 || psql -c \"CREATE DATABASE ace_cms OWNER aceadmin;\"" 2>/dev/null

echo "PostgreSQL is ready"
