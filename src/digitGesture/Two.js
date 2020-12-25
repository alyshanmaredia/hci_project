// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const twoGesture = new GestureDescription('two'); 

// Thumb 
twoGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
twoGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
twoGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);
twoGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);

// Index
twoGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
twoGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

twoGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
twoGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.25);

for(let finger of [Finger.Ring, Finger.Pinky]){
    twoGesture.addCurl(finger, FingerCurl.FullCurl, .75); 
    twoGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}


