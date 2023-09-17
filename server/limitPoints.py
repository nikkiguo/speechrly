from retriv import SearchEngine

def limitPoints(transcript, points):
  collection = []
  
  for idx, p in enumerate(points):
    collection.append({
      "id": idx, "text": p
    })
  se = SearchEngine("new-index").index(collection)

  return se.search(transcript)
