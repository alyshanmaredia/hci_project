// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const threeGesture = new GestureDescription('three'); 

// Thumb 
threeGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
threeGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
threeGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);
threeGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);

threeGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.75);
threeGesture.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.25);

for(let finger of [Finger.Middle, Finger.Index, Finger.Ring]){
    threeGesture.addCurl(finger, FingerCurl.NoCurl, 1.0); 
    threeGesture.addDirection(finger, FingerDirection.VerticalUp, 0.25);
}

