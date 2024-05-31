from flask import Flask
from flask_cors import CORS
import mysql.connector
import socket
import os

app = Flask(__name__)
CORS(app)

app.secret_key = b'hjokasi62783767'
host = os.getenv("MYSQL_HOST",default="localhost")
database = mysql.connector.connect(host = host, user = "maxscale'@'192.168.0.%", password = "my_s3cret")
cursor = database.cursor(dictionary=True)
cursor.execute("CREATE DATABASE TaskManager")
database.database = "TaskManager"

cursor.execute("CREATE TABLE Users(id int PRIMARY KEY AUTO_INCREMENT,name varchar(255),password varchar(255));")
cursor.execute("CREATE TABLE Tasks(id int PRIMARY KEY AUTO_INCREMENT,name varchar(255),description varchar(255),due date,user_id int not null,FOREIGN KEY(user_id) REFERENCES Users(id));")

@app.route("/my_tasks")
def index():
    cursor.execute("SELECT Tasks.name as name, Tasks.description as description, Tasks.due as due FROM Tasks")
    tasks = cursor.fetchall()
    return tasks
