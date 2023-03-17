#!/bin/bash

echo "------------- LAUNCHING --------------------"

NEW_USER={}
PASSWORD={}

sudo adduser $NEW_USER --disabled-password --gecos ""
echo "$NEW_USER:$PASSWORD" | sudo chpasswd

sudo usermod -aG sudo $NEW_USER

#Create user directory + rights
cd /home/groupe15/Cloud_Project/users/
sudo mkdir $NEW_USER
sudo chown -R $NEW_USER: ./$NEW_USER

sudo usermod -d /home/groupe15/Cloud_Project/users/$NEW_USER $NEW_USER


echo "User $NEW_USER created with password $PASSWORD"