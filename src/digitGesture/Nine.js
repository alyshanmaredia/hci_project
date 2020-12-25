// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const nineGesture = new GestureDescription('nine'); 

//
nineGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
nineGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
nineGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);
nineGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);
nineGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);
nineGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);
// index:
nineGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
nineGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

// middle:
nineGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
nineGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);


// ring:
nineGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.75);
nineGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.75);
nineGesture.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

// pinky:
nineGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
nineGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);


