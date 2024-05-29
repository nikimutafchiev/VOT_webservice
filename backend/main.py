from flask import Flask
from flask_cors import CORS
import mysql.connector
import socket
import os

app = Flask(__name__)
CORS(app)

app.secret_key = b'hjokasi62783767'
host = os.getenv("MYSQL_HOST",default="localhost")
database = mysql.connector.connect(host = host, user = "user2@localhost", password = "User2!User2!", database="TaskManager")
cursor = database.cursor(dictionary=True)

@app.route("/my_tasks")
def index():
    cursor.execute("SELECT Tasks.name as name, Tasks.description as description, Tasks.due as due FROM Tasks")
    tasks = cursor.fetchall()
    return tasks
