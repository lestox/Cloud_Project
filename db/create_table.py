import mysql.connector
import os

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="group15",
)

mycursor = mydb.cursor()

mycursor.execute("CREATE DATABASE IF NOT EXISTS group15")
mycursor.execute("USE group15")

for sql_file in os.listdir('db/sql'):
    with open(f'db/sql/{sql_file}', 'r') as file:
        sql = file.read()
        try:
            mycursor.execute(sql)
        except Exception as e:
            print(e)

mycursor.close()
mydb.close()
