import React, { useRef, useEffect } from "react";
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";

function Dashboard() {
  const videoRef = useRef(null);

  useEffect(() => {
    async function setup() {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      const model = await faceLandmarksDetection.load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh);
      model.estimateFaces({ input: videoRef.current }).then(predictions => {
        console.log(predictions); // Send to backend to get recommendations
      });
    }
    setup();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Face Scan</h2>
      <video ref={videoRef} autoPlay playsInline className="w-96 h-72 border" />
    </div>
  );
}
export default Dashboard;