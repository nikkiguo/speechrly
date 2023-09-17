import whisper

def speechToText(fileName):
  model = whisper.load_model("base")
  result = model.transcribe(fileName)
  return result["text"]

