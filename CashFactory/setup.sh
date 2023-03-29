#!/bin/bash
#######################################################################
# File name : setup.sh 
# Author : Olivier Galand (31/12/2021)
# Author email : galand.olivier.david@gmail.com
# Project : CashFactory
# Project repository : https://github.com/OlivierGaland/CashFactory
# 
# Setup script for docker environment
#######################################################################

# install and setup docker on the host, the following command will need a sudo to correctly run : sudo ./setup.sh
clear;

# ---------------------------------------------------------------- 1
echo;
echo ' [1] Setting up CashFactory ---------------------------';
echo;

sleep 1;

apt-get update
apt-get -y install ca-certificates curl gnupg lsb-release git

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

apt-get update 
apt-get -y install docker docker-ce docker-ce-cli containerd.io

systemctl enable docker.service

apt-get -y install docker-compose

# ---------------------------------------------------------------- 2
echo;
echo ' [2] Opening zxy/CashFactory/.env for change device name --';
echo;

sleep 3;

nano $HOME/zxy/CashFactory/.env;

# --------------------------------------------------------------- 3
echo;
echo ' [3] Creating data/bitping for setup bitping credentials ---';
echo;

sleep 3;

mkdir -p $HOME/data/bitping #create data directory for bitping credentials

# --------------------------------------------------------------- 4
echo;
echo ' [4] Starting bitping setup --------------------------------';
echo;

sleep 3;

sudo docker run -it -v $HOME/zxy/CashFactory/data/bitping/:/root/.bitping bitping/bitping-node:latest;

echo;
echo ' ✓ Success! ------------------------------------------------';
echo;
