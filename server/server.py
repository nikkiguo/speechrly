from flask import Flask, request, jsonify
from speechToText import speechToText
from rerank import missingPoints
from limitPoints import limitPoints

app = Flask(__name__)

mainPoints = []
transcript = []
entireSpeech = ''

@app.route("/toText", methods=['POST'])
def toText():
  file= request.files['file']
  print(file)

  with open('speech.webm', 'wb') as f:
      f.write(file.read())

  global transcript
  global entireSpeech
  entireSpeech = speechToText("speech.webm")
  transcript = entireSpeech.split(".")
  transcript = [t.strip() for t in transcript]
  response = jsonify(entireSpeech)
  response.headers.add('Access-Control-Allow-Origin', '*')


  transcript = list(filter(None, transcript))


  return response

@app.route("/matchPointsToText", methods=["POST"])
def matchPointsToText():
  text = request.json['text']
  points = "".join([i for i in text if (i not in ['\n', '\t'])]).split('○')

  # CHECK NOT EMPTYYYYY

  points = list(filter(None, points))
  
  global mainPoints 
  mainPoints = [p.strip() for p in points]
  print(points)

  return jsonify(text)

@app.route("/feedback")
def feedback():
  highs = []
  lows = []
  
  accuratePoints = limitPoints(entireSpeech, mainPoints)
  accuratePointsList = []

  for i in accuratePoints:
    accuratePointsList.append(i["text"])

  if len(accuratePointsList) == 0:
    return jsonify({'data': mainPoints})
  else:
    highs = missingPoints(entireSpeech, accuratePointsList)

    for m in mainPoints:
      if m not in highs:
        lows.append(m)
  
  return jsonify({'data': lows})
   

if __name__ == "__main__":
  app.run(debug=True) # since this is in development mode