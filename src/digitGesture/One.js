// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const oneGesture = new GestureDescription('one'); 

// Thumb 
oneGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
oneGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
oneGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);
oneGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);

// Index
oneGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
oneGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]){
    oneGesture.addCurl(finger, FingerCurl.FullCurl, .75); 
    oneGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}



