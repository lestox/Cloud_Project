#!/bin/bash

echo "------------- LAUNCHING --------------------"

PROJECT_NAME={}
USER={}


cd /home/groupe15/Cloud_Project/users/$USER
sudo mkdir $PROJECT_NAME
sudo chown -R $USER: ./$PROJECT_NAME


echo "Project $PROJECT_NAME as been successfully created"