from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
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
