from flask import flask, render_template
 
app = flask(__name__)
 
@app.route('/')
def inicial():
    return render_template('index.html')
 
@app.route('/sobre')
def sobre():
    return render_template('sobre.html')
 
@app.route('/contato')
def sobre():
    return render_template('contato.html')
 
    @app.route('/dados')
def sobre():
    return render_template('dados.html')
 
if __name__ == '__main__':
    app.run(debug=true)
    