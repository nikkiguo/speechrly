import cv2
import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import vision

# Configure gesture recognizer model
BaseOptions = mp.tasks.BaseOptions
GestureRecognizer = mp.tasks.vision.GestureRecognizer
GestureRecognizerOptions = mp.tasks.vision.GestureRecognizerOptions
GestureRecognizerResult = mp.tasks.vision.GestureRecognizerResult
VisionRunningMode = mp.tasks.vision.RunningMode

model_path = '/Users/nikki/GazeTracking/gesture_tracking/model/gesture_recognizer.task'
base_options = python.BaseOptions(model_asset_path=model_path)

"""
This class tracks the user's gestures by frame. Based on GazeTracking class.
"""
class GestureTracking(object):
    def __init__(self):
        self.frame = None
        self.results = None
        options = GestureRecognizerOptions(
            base_options=BaseOptions(model_asset_path='/Users/nikki/GazeTracking/gesture_tracking/model/gesture_recognizer.task'),
            running_mode=VisionRunningMode.LIVE_STREAM,
            result_callback=self.print_result)
        self.recognizer = GestureRecognizer.create_from_options(options)
        self.geature_type = None

    # Create a gesture recognizer instance with the live stream mode:
    def print_result(self, result: GestureRecognizerResult, output_image: mp.Image, timestamp_ms: int):
        self.results = result
        if result is not None:
            self.geature_type = result.gestures
            if len(result.gestures) > 0:
                self.geature_type = result.gestures[0][0].category_name
                print(self.geature_type)

    # Analyze the frame given a timestamp
    def _analyze(self, timestamp):
        mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=self.frame)
        recognition_result = self.recognizer.recognize_async(mp_image, timestamp)

    # Refresh frame for analysis
    def refresh(self, frame, timestamp):
         self.frame = frame
         self._analyze(timestamp)

    def get_gesture_type(self):
        return self.geature_type

