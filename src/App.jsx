import { useState } from "react";

export default function PigGame() {
  const [level, setLevel] = useState(0);
  const [pigSize, setPigSize] = useState(100); 
  const [isTransformed, setIsTransformed] = useState(false); 

  
  const feedPig = (foodValue) => {
    const newLevel = level + foodValue;

    setLevel(newLevel);
    setPigSize(pigSize + foodValue * 2); 

    if (newLevel > 100) {
      setIsTransformed(true);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>เกมส์เลี้ยงหมูเด้ง</h1>
      <p>Level: {level}</p>
      <img
        src={isTransformed ? "/public/12496e34-376f-4b61-a4bb-03781b0b0eef.jpg" : "/public/ce7532a03eba3a97e37a94a7e9efdd86.jpg"} 
        alt="หมูเด้ง"
        style={{ width: `${pigSize}px`, height: `${pigSize}px` }}
      />
      <div>
        <button onClick={() => feedPig(5)}>ป้อนแตงโม (+5 Level)</button>
        <button onClick={() => feedPig(10)}>ป้อนฟักทอง (+10 Level)</button>
        <button onClick={() => feedPig(20)}>ป้อนหญ้า (+20 Level)</button>
      </div>
    </div>
  );
}