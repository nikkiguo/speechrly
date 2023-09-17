import cv2
from gaze_tracking import GazeTracking
from gesture_tracking import GestureTracking

gaze = GazeTracking()
gesture = GestureTracking()
webcam = cv2.VideoCapture(0)

#cap = cv.VideoCapture('vtest.avi')

# Track gaze direction and gesture count
gaze_tally = {"Left" : 0, "Right" : 0, "Center" : 0}
gesture_tally = {"None" : 0, "Closed_Fist" : 0,"Open_Palm" : 0, "Pointing_Up" : 0, "Thumb_Down" : 0,"Thumb_Up" : 0, "Victory" : 0, "ILoveYou" : 0}

total_gestures = 0

frameCount = 0
correctGaze = 0
lookedRight = 0
lookedLeft = 0
plots = []

while True:
    # We get a new frame from the webcam
    _, frame = webcam.read()
    # ret, frame = cap.read()

    # We send this frame to GazeTracking to analyze it
    gaze.refresh(frame)
    gesture.refresh(frame, frameCount)

    frame = gaze.annotated_frame()
    frameCount += 1
    text = ""

    if gaze.is_blinking():
        text = "Blinking"
    elif gaze.is_right():
        text = "Looking right "
        gaze_tally["Right"] += 1
    elif gaze.is_left():
        text = "Looking left "
        gaze_tally["Left"] += 1
    elif gaze.is_center():
        gaze_tally["Center"] += 1
        text = "Looking center "

    gesture_type = gesture.get_gesture_type()

    # Count number of gestures used, where None = unrecognized gesture. 
    if gesture_type:
        if gesture_type == "None":
            gesture_tally["None"] += 1
        elif gesture_type == "Closed_Fist":
            gesture_tally["Closed_Fist"] += 1
        elif gesture_type == "Open_Palm":
            gesture_tally["Open_Palm"] += 1
        elif gesture_type == "Pointing_Up":
            gesture_tally["Pointing_Up"] += 1
        elif gesture_type == "Thumb_Down":
            gesture_tally["Thumb_Down"] += 1
        elif gesture_type == "Thumb_Up":
            gesture_tally["Thumb_Up"] += 1
        elif gesture_type == "Victory":
            gesture_tally["Victory"] += 1
        elif gesture_type == "ILoveYou":
            gesture_tally["ILoveYou"] += 1
        
        text += " and gesture of type " + gesture_type

    # Display gaze direction, gesture type, and eye coordinates.
    cv2.putText(frame, text, (90, 60), cv2.FONT_HERSHEY_DUPLEX, 1.6, (147, 58, 31), 2)
    left_pupil = gaze.pupil_left_coords()
    right_pupil = gaze.pupil_right_coords()
    cv2.putText(frame, "Left pupil:  " + str(left_pupil), (90, 130), cv2.FONT_HERSHEY_DUPLEX, 0.9, (147, 58, 31), 1)
    cv2.putText(frame, "Right pupil: " + str(right_pupil), (90, 165), cv2.FONT_HERSHEY_DUPLEX, 0.9, (147, 58, 31), 1)

    cv2.imshow("Demo", frame)

    if cv2.waitKey(1) == 27:
        break

# Use ratio of frames to total gesture count to evaluate expressiveness.
total_gestures = sum(gesture_tally.values())

#Output advice for eyes
def outputEyeAdvice(leftCounter, rightCounter, centerCounter):
    eyeCounterList = [leftCounter, rightCounter, centerCounter]

    leftRepeat = eyeCounterList.count(eyeCounterList[0])
    rightRepeat = eyeCounterList.count(eyeCounterList[1])

    #Case when user looks equally in all directions (all 3 counters are equal)
    if (leftRepeat == 3):
        advice = "Fantastic! You maintained great eye contact in all directions!"
    
    #Case when user looks in two directions more than the third
    if (leftRepeat == 2):
        if (rightCounter == leftCounter):
            advice = "Fair. You mainly looked left and right, remember to look at the center more often."
        else:
            advice = "Fair. You mainly looked left and center, remember to look right more often."
    elif (rightRepeat == 2):
        advice = "Fair. You mainly looked right and center, remember to look left more often."

    #Case when user looks in one direction more than the other two
    if (leftCounter == max(eyeCounterList)):
        advice = "Keep practicing! You mainly looked left. You should look right and center more often."
    elif (rightCounter == max(eyeCounterList)):
        advice = "Keep practicing! You mainly looked right. You should look left and center more often."
    else:
        advice = "Keep practicing! You mainly looked at the center. You should look left and right more often."

    return advice

#Output advice for gestures
def ouputGestureAdvice(numFrames, numGestures):
    frameToGestureRatio = numFrames//numGestures
    if (frameToGestureRatio > 100):
        advice = "Your hand movements were too erratic. Focus on moving your hands at a more stable pace to avoid distracting the audience with excessive hand gestures."
    elif (frameToGestureRatio < 80): 
        advice = "You are too stiff. Take a deep breath in, a deep breath out, and wiggle your arms around! Now practice keeping your hands and arms away from your sides, bring them up towards your chest and use open-palm hand gestures while talking."
    else:
        advice = "Fantastic! Your hand gestures are stable and welcoming, helping the audience feel more engaged while you talk."

    return advice

#Percentage for the sliding bar
def outputEyePercentage(leftCounter, rightCounter, centerCounter):
    if(leftCounter == rightCounter == centerCounter):
        if(leftCounter == 0):
            return 0
        else:
            return 1
    elif(leftCounter == rightCounter) or (rightCounter == centerCounter) or (leftCounter == centerCounter):
        return 0.6
    else:
        return 0.3

#Percentage for the sliding bar
def outputHandPercentage(numFrames, numGestures):
    ratio = numFrames//numGestures
    if (ratio < 95) and (ratio > 85):
        return 1
    elif (ratio < 100) and (ratio > 80):
        return 0.6
    elif (ratio < 120) and (ratio > 60):
        return 0.3
    elif ratio == 0:
        return 0
    else:
        return 0.1

webcam.release()
# cap.release()
cv2.destroyAllWindows()
