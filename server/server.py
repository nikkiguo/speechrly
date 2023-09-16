from flask import Flask
from speechToText import speechToText

app = Flask(__name__)


@app.route("/toText")
def toText():
  return {"text": speechToText("test.webm")}

if __name__ == "__main__":
  app.run(debug=True) # since this is in development mode