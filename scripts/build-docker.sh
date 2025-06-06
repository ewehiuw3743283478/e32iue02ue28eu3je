#!/bin/bash
docker login
docker build -t server-monitor .
docker tag server-monitor:latest nkeonkeo/server-monitor
docker push nkeonkeo/server-monitor
