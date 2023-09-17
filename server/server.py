from flask import Flask, request, jsonify
from speechToText import speechToText

app = Flask(__name__)


@app.route("/toText", methods=['POST'])
def toText():
  file= request.files['file']
  print(file)

  with open('speech.webm', 'wb') as f:
      f.write(file.read())

  response = jsonify(speechToText("speech.webm"))
  response.headers.add('Access-Control-Allow-Origin', '*')

  return response

@app.route("/matchPointsToText", methods=["POST"])
def matchPointsToText():
  # text = request.json['text']
  # print(text)
  return { "state": "good"}


if __name__ == "__main__":
  app.run(debug=True) # since this is in development mode