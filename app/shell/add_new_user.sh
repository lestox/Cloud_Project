#!/bin/bash

echo "------------- LAUNCHING --------------------"

NEW_USER={}
PASSWORD={}

sudo adduser $NEW_USER --disabled-password --gecos ""
echo "$NEW_USER:$PASSWORD" | sudo chpasswd

sudo usermod -aG sudo $NEW_USER
sudo chown -R $NEW_USER:$NEW_USER /home/$NEW_USER

echo "User $NEW_USER created with password $PASSWORD"