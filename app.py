from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chapter1')
def chapter1():
    return render_template('chapter1.html')

@app.route('/chapter2')
def chapter2():
    return render_template('chapter2.html')

@app.route('/chapter3')
def chapter3():
    return render_template('chapter3.html')

@app.route('/chapter4')
def chapter4():
    return render_template('chapter4.html')

@app.route('/chapter5')
def chapter5():
    return render_template('chapter5.html')

@app.route('/chapter6')
def chapter6():
    return render_template('chapter6.html')

@app.route('/secret')
def secret():
    return render_template('secret.html')

if __name__ == '__main__':
    app.run(debug=True)