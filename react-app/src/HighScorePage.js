import { HighScoreContext } from "./Context";
import HighScore from "./HighScore";
import { useContext } from "react";

function HighScorePage() {
  const highScores = useContext(HighScoreContext);
  //console.log(highScores[0]);
  return (
    <div>
      <h1>Welcome to Movie games</h1>
      <div className="flex flex-row">
        <HighScore
          header="Highscore GuessMovies"
          highScores={highScores[0]}
        ></HighScore>
        <HighScore
          header="Highscore GuessTime"
          highScores={highScores[1]}
        ></HighScore>
      </div>
    </div>
  );
}

export default HighScorePage;
