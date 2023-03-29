./bin/proxy.js --port 1030 --authenticate 'if [ "$PROXY_AUTH_USERNAME" = "default" ] && [ "$PROXY_AUTH_PASSWORD" = "default" ]; then exit 0; fi; exit 1;'
