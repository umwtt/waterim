import { useState } from "react";

export default function EndingScreen() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="ending">
      {!accepted ? (
        <>
          <h1>Umut adlı kişi sizi güzel bir geleceğe davet ediyor</h1>

          <div className="buttons">
            <button className="yes" onClick={() => setAccepted(true)}>
              Evet
            </button>

            <button className="no" disabled>
              Hayır
            </button>
          </div>
        </>
      ) : (
        <h2 className="heart">❤</h2>
      )}
    </div>
  );
}
