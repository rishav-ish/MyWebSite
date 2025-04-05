#!/bin/bash

# Start the backend server
cd backend && npm run start:dev &

# Start the frontend server
cd frontend && npm run dev &

# Wait for both processes
wait 