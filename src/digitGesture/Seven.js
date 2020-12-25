// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const sevenGesture = new GestureDescription('seven'); 

//
sevenGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
sevenGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
sevenGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);
sevenGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);
sevenGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);
sevenGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);
// index:
sevenGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
sevenGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// middle:
sevenGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
sevenGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);


// ring:
sevenGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.75);
sevenGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 0.75);
sevenGesture.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

// pinky:
sevenGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
sevenGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);



