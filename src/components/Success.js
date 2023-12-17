import React from "react";
import { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";
import "../App.css";

const Success = () => {
  const [pieces, setPieces] = useState(200);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };

  useEffect(() => {
    stopConfetti();
  }, []);
  return (
    <div className="App">
      <h1
        style={{
          margin: "16px",
          minWidth: "60%",
        }}
      >
        Payment Confirmed✨
      </h1>
      <p>
        We have sent you the payment receipt on your email. Thanks for joining
        our Yoga classes!
      </p>
      <ReactConfetti gravity={0.2} numberOfPieces={pieces} />
    </div>
  );
};

export default Success;
