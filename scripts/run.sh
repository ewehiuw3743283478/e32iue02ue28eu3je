#!/bin/sh
cd /root/servermonitor/
forever start -o log/out.log -e log/err.log servermonitor.js
