from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
from xgboost import XGBRegressor
import numpy as np
from joblib import dump, load
import uuid
import json
from datetime import datetime
from dbconnect import *
app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = "static/product/"
CORS(app, resources={r"/*": {"origins": "*"}}) 

@app.route('/')
def hello():
    return '<h1>Hello, World!</h1>'

@app.route('/foodList', methods=["GET"])
def foodList():
    if request.method == 'GET':
        productQuery = "select * from product "
        info = recoredselect(productQuery)
        print(info)
        return jsonify(info)

def productQuantityValue(id):
    productQuery = 'select quantity from product where id =%s' % \
                    (id)
    info = recoredselect(productQuery)
    quantity_values = [quantity[0] for quantity in info]
    return quantity_values[0]
@app.route('/predictCalories', methods=["GET","POST"])
def predictCalories():
    if request.method == 'POST':
        user_data = request.json
        age = int(user_data.get('age'))
        weight = int(user_data.get('weight'))
        height = int(user_data.get('height'))
        gender = int(user_data.get('gender'))
        print(user_data)
        loaded_model = load('xgboost_calories_model.joblib')
        input_value = np.array([age,weight,height,gender]).reshape(1, -1)
        out_calories = loaded_model.predict(input_value)
        print(out_calories[0])
        return str(out_calories[0])
def updateQuantity(id,stockCount):
    history = 'update product set quantity=%s where id =%s' % \
                    (stockCount,id)
    updatequery(history)

@app.route('/updateStock', methods=["GET","POST"])
def updateStock():
    if request.method == 'POST':
        user_data = request.json
        id = int(user_data.get('id'))
        stock = int(user_data.get('stock'))
        res = updateQuantity(id,stock)
        print(res)
        return ""
@app.route('/purchase', methods=["GET","POST"])
def purchase():
    if request.method == 'POST':
        purchase_data = request.json
        
        purchase_id = str(uuid.uuid4())
        username = purchase_data['username']
        predictedCalories = purchase_data['predictedCalories']
        orderdCalories = purchase_data['orderdCalories']
        totalAmount = purchase_data['totalAmount']
        age = purchase_data['age']
        items= purchase_data['items']
        weight = purchase_data['weight']
        height = purchase_data['height']
        
        for item in items:
            print(item['quantity'])
            history = 'insert into  history(purchase_id,quantity,created_at,productId,subtotal,calories) values("%s","%s","%s","%s","%s","%s")' % \
                    (purchase_id,item['quantity'],item['created_at'],item['productId'],item['subtotal'],item['calories'])
            original_qt=int(productQuantityValue(item['productId'])) 
            purchase_qty= int(item['quantity']) 
            print("originalqty:")
            final_qty=original_qt-purchase_qty
            print(original_qt-purchase_qty)
            updateQuantity(item['productId'],final_qty)
            inserquery(history)

        current_date = datetime.now().date()
        test = 'insert into purchase(name,purchase_id,predicted_calories,ordered_calories,total_amount,age,weight,height,purchased_at) values("%s","%s","%s","%s","%s","%s","%s","%s","%s")' % \
                    (username,purchase_id,predictedCalories,orderdCalories,totalAmount,age,weight,height,current_date)
        
        inserquery(test)
        
    response = jsonify({'message': 'added'})
    return response
@app.route('/uploadImage', methods=["POST"])
def uploadImage():
    message=''
    if request.method == 'POST':
        file = request.files['image']
        title = request.form.get('title')
        quantity = request.form.get('quantity')
        price = request.form.get('price')
        calories = request.form.get('calories')
        imageFile = request.form.get('imageFile')
        print(imageFile)
        current_date = datetime.now().date()

        if file.filename != '':
            file.save(os.path.join(app.config["UPLOAD_FOLDER"], file.filename))
            test = 'insert into product(title,quantity,price,img,created_at,calories) values("%s","%s","%s","%s","%s","%s")' % \
                    (title,quantity,price,imageFile,current_date,calories)
            inserquery(test)
            message = 'Image uploaded successfully'
        else:
            message = 'No image selected'
    response = jsonify({'message': 'uploaded'})
    return response
    


if __name__ == '__main__':
    app.run(debug=True)
