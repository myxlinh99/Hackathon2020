import flask
from flask import request, jsonify
from videos.videos import translateString
from predict.buildPic import buildPicture
from predict.predict import finalPredict

app = flask.Flask(__name__)
app.config['DEBUG'] = True

@app.route('/videos', methods=['GET'])
def videos():
    if 'text' in request.values:
        text = request.values['text']
    else:
        return "Error: No text provided to API."
    
    final = translateString(text)
    return jsonify(final)

@app.route('/predict', methods=['POST'])
def predict():
    if 'imgdata' in request.values:
        img = request.values['imgdata']
    else:
        return "Error: No image provided to API."
    
    newimg = buildPicture(img)

    final = finalPredict(newimg)
    return jsonify(final)

app.run()