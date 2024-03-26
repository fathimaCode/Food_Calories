from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import numpy as np
from joblib import dump, load

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

@app.route('/predictCalories', methods=["POST"])
def predictCalories():
    if request.method == 'POST':
        loaded_model = load('xgboost_calories_model.joblib')
        input_value = np.array([40,78,160,0]).reshape(1, -1)
        out_calories = loaded_model.predict(input_value)
        print(out_calories)
        return out_calories
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
