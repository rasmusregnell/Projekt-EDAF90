import GuessGame from "./GuessGame";
import { useState, useContext } from "react";
import movieTitles from "./TopMovies.json";
import { HighScoreContext } from "./Context";

function GuessYear(){
    const [correctAnswers, setCorrectAnswer] = useState([]);
    const [movie, setMovie] = useState("");
    const highScores = useContext(HighScoreContext);
    const [showError, setShowError] = useState(false);

    function setRandomMovie() {
        let index = Math.floor(Math.random() * movieTitles.length);
        setMovie(movieTitles[index].title);
    }

    const submitCorrect = (answer) => {
        if (!correctAnswers.includes(answer)) {
          setCorrectAnswer([...correctAnswers, answer]);
        }
    };

    const handleWrongAnswer = () => {
      setShowError(true);
  
      setTimeout(() => {
        setShowError(false);
      }, 3000); // Set the timeout to hide the message after 3 seconds (adjust as needed)
    };

    async function handleSubmit(event) {
        event.preventDefault();
        let yearGuess = document.getElementById("movieInput").value;
        let urlInput = movie.replace(" ", "+");
    
        const url = "https://www.omdbapi.com/?apikey=28da6e60&t=" + urlInput;
    
        let answer = await fetch(url).then((response) => {
          return response.json();
        });
    
        if (answer.Response === "True" && answer.Year === yearGuess) {
          submitCorrect(answer.Title);
        } else {
          handleWrongAnswer();
          console.log("Wrong answer");
        }
        
        setRandomMovie();
        event.target.reset();
    }

    return (
        <GuessGame
          gameLength={120}
          correctAnswers={correctAnswers}
          setCorrectAnswer={setCorrectAnswer}
          header={`Which year was "${movie}" released?`}
          placeholder="Enter year"
          handleSubmit={handleSubmit}
          setRandom={setRandomMovie}
          showError={showError}
          highScores={highScores[2]}
          gameType="GuessYear"
          //highScoreHeader="Highscore GuessYear"
        ></GuessGame>
    );
}

export default GuessYear;