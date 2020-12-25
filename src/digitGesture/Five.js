// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const fiveGesture = new GestureDescription('five'); 

//
fiveGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
fiveGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
fiveGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

for(let finger of [Finger.Pinky, Finger.Middle, Finger.Index, Finger.Ring]){
    fiveGesture.addCurl(finger, FingerCurl.NoCurl, 1.0); 
    fiveGesture.addDirection(finger, FingerDirection.VerticalUp, 0.25);
}

