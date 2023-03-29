#!/bin/bash
#######################################################################

echo '	Restarting CashFactory...'

echo;

docker-compose down && docker-compose up -d;

echo;
