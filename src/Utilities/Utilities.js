
const fingerJoints = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  ringFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20],
};


const style = {
  0: { color: "black", size: 15 },
  1: { color: "black", size: 6 },
  2: { color: "black", size: 10 },
  3: { color: "black", size: 6 },
  4: { color: "black", size: 6 },
  5: { color: "black", size: 10 },
  6: { color: "black", size: 6 },
  7: { color: "black", size: 6 },
  8: { color: "black", size: 6 },
  9: { color: "black", size: 10 },
  10: { color: "black", size: 6 },
  11: { color: "black", size: 6 },
  12: { color: "black", size: 6 },
  13: { color: "black", size: 10 },
  14: { color: "black", size: 6 },
  15: { color: "black", size: 6 },
  16: { color: "black", size: 6 },
  17: { color: "black", size: 10 },
  18: { color: "black", size: 6 },
  19: { color: "black", size: 6 },
  20: { color: "black", size: 6 },
};


export const drawHand = (predictions, ctx) => {
  
  if (predictions.length > 0) {
    
    predictions.forEach((prediction) => {
    
      const landmarks = prediction.landmarks;

      for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
        let finger = Object.keys(fingerJoints)[j];
      
        for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
      
          const firstJointIndex = fingerJoints[finger][k];
          const secondJointIndex = fingerJoints[finger][k + 1];

          // Draw path
          ctx.beginPath();
          ctx.moveTo(
            landmarks[firstJointIndex][0],
            landmarks[firstJointIndex][1]
          );
          ctx.lineTo(
            landmarks[secondJointIndex][0],
            landmarks[secondJointIndex][1]
          );
          ctx.strokeStyle = "plum";
          ctx.lineWidth = 4;
          ctx.stroke();
        }
      }

      
      for (let i = 0; i < landmarks.length; i++) {
        
        const x = landmarks[i][0];
        
        const y = landmarks[i][1];
        
        ctx.beginPath();
        ctx.arc(x, y, style[i]["size"], 0, 3 * Math.PI);

        
        ctx.fillStyle = style[i]["color"];
        ctx.fill();
      }
    });
  }
};