// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const fourGesture = new GestureDescription('four'); 

//
fourGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
fourGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
fourGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
fourGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

for(let finger of [Finger.Pinky, Finger.Middle, Finger.Index, Finger.Ring]){
    fourGesture.addCurl(finger, FingerCurl.NoCurl, 1.0); 
    fourGesture.addDirection(finger, FingerDirection.VerticalUp, 0.25);
}





