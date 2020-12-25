// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const eightGesture = new GestureDescription('eight'); 

//
eightGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
eightGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
eightGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);
eightGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);
eightGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);
eightGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);
// index:
eightGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
eightGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// middle:
eightGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
eightGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);


// ring:
eightGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.75);
eightGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 0.75);
eightGesture.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

// pinky:
eightGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
eightGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);



