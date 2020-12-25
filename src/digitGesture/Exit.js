// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const exitGesture = new GestureDescription('exit'); 

//
exitGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
exitGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
exitGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.25);
exitGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.25);
exitGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);
exitGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);
// index:
exitGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
exitGesture.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

// middle:
exitGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
exitGesture.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);


// ring:
exitGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.75);
exitGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 0.75);
exitGesture.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

// pinky:
exitGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
exitGesture.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);



