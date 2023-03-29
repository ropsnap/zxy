
# ZRIG - project's scaffolding structure

/root/CashFactory-rpsnp/ ----- CashFactory project fork with some changes
     /ip-change-server/ ------ Single endpoint rest server to change rig's proxy server
     /zproxy/ ---------------- It's actually a npm module, but by cloning project give more flexibility.
     /loclx ------------------ LocalExpose standalone binary
     /loclx.sh --------------- Cat this script instead running, modify some things and copy/paste
     /data/ ------------------ Contains bitping data used by CashFactory-rpsnp/ functions
     /README.md -------------- This text itself

# Instructions & usage

## First tab - Starts zproxy server

cd /root
cd zproxy

./bin/proxy.js --port 1030 --authenticate 'if [ "$PROXY_AUTH_USERNAME" = "default" ] && [ "$PROXY_AUTH_PASSWORD" = "default" ]; then exit 0; fi; exit 1;'

	...open a new tab.

## Second tab - Starts ip-change-server

cd /root
cd ip-change-server

npm run start

	...open a new tab.

## Third tab - Starts zproxy server tunnel

cd /root

./loclx tunnel tcp --port 1025

	..open a new tab.

## Fivety tab - Starts ip-change-server tunnel

loclx tunnel tcp --port 1025

## Sixthy tab - CashFactory-rpnsp

cd /root
cd CashFactory-rpnsp

	...run this command reset docker instances
	...so that ensures it always working.

docker-compose down && docker-compose up -d;

	...keep it open.
	...open a new tab

## Seventh tab - /root

cd /root

	..keep it open.

_
