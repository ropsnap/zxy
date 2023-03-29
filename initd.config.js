require('dotenv').config()

const env = process.env;

module.exports = {
	
	apps: [

		{
		    name: "Proxy Server",
		    script: `node ./proxyServer/bin/proxy.js --port ${env.PROXY_SERVER_PORT} --authenticate 'if [ "$PROXY_AUTH_USERNAME" = "${env.USERNAME}" ] && [ "$PROXY_AUTH_PASSWORD" = "${env.PASSWORD}" ]; then exit 0; fi; exit 1;'`,
		    env
		},

		{
			name: "IP Change Server",
			script: `node ./ipChangeServer/bin/www`,
			env
		},

		{
			name: "Tunnel - Proxy Server",
			script: `./loclx tunnel tcp --to ${env.PROXY_SERVER_PORT}`
		},

		{
			name: "Tunnel - IP Change Server",
			script: `./loclx tunnel tcp --to ${env.IP_CHANGE_SERVER_PORT}`
		}
	]
}