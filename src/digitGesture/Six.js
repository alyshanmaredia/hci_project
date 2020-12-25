// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const sixGesture = new GestureDescription('six'); 



sixGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
sixGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
sixGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);
sixGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);


for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  sixGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  sixGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
  sixGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}


