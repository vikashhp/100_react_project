import React, { useState } from "react";

const Otpgen = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10000);
  const [random, setRandom] = useState(null);

  const genotpHandler = () => {
    const minValue = parseInt(min);
    const maxValue = parseInt(max);

    const ran = Math.floor(Math.random() * (maxValue + 1) + minValue);
    setRandom(ran);
  };

  return (
    <div>
      <h1>OTP_GENRATOR</h1>
      <button onClick={genotpHandler}>Genrate_Otp</button>
      {random !== null && (
        <div>
          <h1>{`Otp is:${random}`}</h1>
        </div>
      )}
    </div>
  );
};

export default Otpgen;
