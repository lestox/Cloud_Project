import contextlib
import paramiko
import random

hostname = '40.67.233.34'
username = 'groupe15'
password = 'hetic2023groupe15CKR!'
server = "ssh groupe15@40.67.233.34"


def launch_command_into_skycloud(command):
    with contextlib.suppress(AttributeError):
        client = paramiko.SSHClient()
        client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        client.connect(hostname, username=username, password=password)
        stdin, stdout, stderr = client.exec_command(command)
        output = stdout.read()
        print(output.decode())
    client.close()


def add_new_user(skycloud_username: str = f'newuser{random.randint(0, 1000)}',
                 skycloud_password: str = 'password'):
    with open('app/shell/add_new_user.sh', 'r') as file:
        launch_command_into_skycloud(
            file.read().format(
                skycloud_username,
                skycloud_password
            )
        )
    return skycloud_username

def add_new_website(skycloud_username: str = f'newuser{random.randint(0, 1000)}',
                 skycloud_projectname: str = 'project'):
    with open('app/shell/create_project.sh', 'r') as file:
        launch_command_into_skycloud(
            file.read().format(
                skycloud_projectname,
                skycloud_username
            )
        )
    return skycloud_username
