// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const backGesture = new GestureDescription('back'); 



for(let finger of [Finger.Pinky, Finger.Middle, Finger.Index, Finger.Ring]){
    backGesture.addCurl(finger, FingerCurl.NoCurl, 1.0); 
    backGesture.addDirection(finger, FingerDirection.HorizontalLeft, 0.25);
}


backGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
backGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
backGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);
