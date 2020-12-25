
import React, { useRef, useState, useEffect } from "react";
 
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "../App.css";
import { drawHand } from "../Utilities/Utilities";
import './SignLanguage.css';
import one from '../img/one.png';
import two from '../img/hold.png';
import three from '../img/back.png';
import four from '../img/four.png';
import five from '../img/back.png';
import six from "../img/forward.png";
import seven from '../img/homepage.png';
import eight from '../img/exit.png';
import nine from '../img/hold.png';
import exit from '../img/zero.png';

import {oneGesture} from "../digitGesture/One"; 
import {twoGesture} from '../digitGesture/Two';
import {threeGesture} from '../digitGesture/Three';
import {fourGesture} from '../digitGesture/Four';
import {fiveGesture} from '../digitGesture/Five';
import {sixGesture} from '../digitGesture/Six';
import {sevenGesture} from '../digitGesture/Seven';
import {eightGesture} from '../digitGesture/Eight';
import {nineGesture} from '../digitGesture/Nine';
import {backGesture} from '../digitGesture/Zero';
import {exitGesture} from '../digitGesture/Exit';
///////// NEW STUFF IMPORTS
import * as fp from "fingerpose";


///////// NEW STUFF IMPORTS

function SignLanguage() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  ///////// NEW STUFF ADDED STATE HOOK
  const [emoji, setEmoji] = useState(null);
  const images = { exit:exit,
                    one:one,
                    two:two,
                    three:three, 
                    four:four,
                    five:five,
                    six:six,
                    seven:seven,
                    eight:eight,
                    nine:nine   };
  ///////// NEW STUFF ADDED STATE HOOK

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      ///////// NEW STUFF ADDED GESTURE HANDLING

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          oneGesture,
          twoGesture,
          threeGesture,
          fourGesture,
          fiveGesture,
          sixGesture,
          sevenGesture,
          eightGesture,
          nineGesture,
          backGesture,
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          console.log(gesture.gestures);

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          // console.log(gesture.gestures[maxConfidence].name);
          setEmoji(gesture.gestures[maxConfidence].name);
          console.log(emoji);
        }
      }

      ///////// NEW STUFF ADDED GESTURE HANDLING

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(()=>{runHandpose()},[]);

  return (
    <div className="SignLanguage">
      <div className="text">
        Navigation Language Screen
      </div>
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        {/* NEW STUFF */}
        {emoji !== null ? (
          <img
            src={images[emoji]}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 400,
              bottom: 500,
              right: 0,
              textAlign: "center",
              height: 100,
            }}
          />
        ) : (
          ""
        )}

        {/* NEW STUFF */}
      </header>
    </div>
  );
}

export default SignLanguage;
