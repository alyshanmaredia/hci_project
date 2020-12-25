// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const forwardGesture = new GestureDescription('forward'); 



for(let finger of [Finger.Thumb,Finger.Pinky, Finger.Middle, Finger.Index, Finger.Ring]){
    forwardGesture.addCurl(finger, FingerCurl.NoCurl, 1.0); 
    forwardGesture.addDirection(finger, FingerDirection.HorizontalRight, 0.25);
}

