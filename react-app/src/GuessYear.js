import GuessGame from "./GuessGame";
import { useState } from "react";
import movieTitles from "./TopMovies.json";

function GuessYear(){
    const [correctAnswers, setCorrectAnswer] = useState([]);
    const [movie, setMovie] = useState("");

    function setRandomMovie() {
        let index = Math.floor(Math.random() * movieTitles.length);
        setMovie(movieTitles[index].title);
    }

    const submitCorrect = (answer) => {
        if (!correctAnswers.includes(answer)) {
          setCorrectAnswer([...correctAnswers, answer]);
        }
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
          //Here we should implement a way to show the error to the user
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
          handleSubmit={handleSubmit}
          setRandom={setRandomMovie}
        ></GuessGame>
    );
}

export default GuessYear;