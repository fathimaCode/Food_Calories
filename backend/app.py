from flask import Flask
app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = "static/product/"








@app.route('/')
def hello():
    return '<h1>Hello, World!</h1>'


@app.route('/AddProduct',methods = ["GET","POST"])
def addProduct():
    message= ''
    title= request.form["title"]
    quantity= request.form["quantity"]
    price= request.form["price"]
    img= request.form["img"]
    created_at= 
    rollno= request.form["rollno"]
    test = 'insert into student(name,email,pwd,contact,rollno,department) values("%s","%s","%s","%s","%s","%s")' % \
                    (username,email,password,contact,rollno, Department)
    inserquery(test)
    return render_template('Student.html',message =message)



if __name__ == '__main__':
    app.run(debug=True)