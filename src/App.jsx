import { useEffect, useState } from "react";
import CreditsScroll from "./CreditsScroll";
import EndingScreen from "./EndingScene";
import "./index.css";

export default function App() {
  const [phase, setPhase] = useState("intro"); // intro | playing | ending
  const [time, setTime] = useState(new Date());
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  const date = time.getDate();
  const month = (time.getMonth() + 1).toString().padStart(2, "0");
  const year = time.getFullYear();
  const dateString = `${date}/${month}/${year}`;

  const greeting = () => {
    const h = time.getHours();
    if (h < 5) return "iyi geceler bitanem";
    if (h < 12) return "günaydın balıım";
    if (h < 18) return "selam fındık";
    return "selam güzellik";
  };

  const start = () => {
    setFade(true);
    setTimeout(() => setPhase("playing"), 1500);
  };

  return (
    
    <div className="container">
      {phase === "intro" && (
        <div className={`intro ${fade ? "fade-out" : ""}`}>
          <small>{dateString}</small>
          <div className="clock">
            {hours}:{minutes}:{seconds}
          </div>
          <div className="greeting">{greeting()}</div>
          <button onClick={start}>Başlat</button>
        </div>
      )}

      {phase === "playing" && (
        <CreditsScroll key={phase} onEnd={() => setPhase("ending")} />
      )}

      {phase === "ending" && (
        <EndingScreen onReplay={() => setPhase("playing")} />
      )}

    </div>
  );
}
