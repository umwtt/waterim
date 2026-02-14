import { useEffect, useState } from "react";

export default function EndingScreen({ onReplay }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`final ${visible ? "fade-in" : ""}`}>
          <div className="heart">
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>

            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>

            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel soft-pink"></div>

            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>

            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>

            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>

            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>

            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>

            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>

            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel white"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>

            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel soft-pink"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>

            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel pink"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
            <div className="pixel"></div>
          </div>


          <p>seni çok seviyorum bitanem</p>
          <button onClick={onReplay}>Tekrar izle</button>
        </div>
  );
}
