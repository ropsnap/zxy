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
			script: `node ./ipChangeServer/bin/www.js`,
			env
		}
	]
}