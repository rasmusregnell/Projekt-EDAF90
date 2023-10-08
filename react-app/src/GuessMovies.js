import { useState, useEffect } from "react";

function GuessMovies (){
    /* */
    const gameLength = 60; //in seconds
    const actors = ["Jennifer Aniston", "Ryan Gosling", "Daniel Craig", "Johnny Depp", "Morgan Freeman", "Tom Hanks"];
    
    const getRandomActor = () => {
        let index = Math.floor(Math.random() * actors.length);
        setActor(actors[index]);
    }

    const[actor, setActor] = useState("");
    const[correctAnswers, setCorrectAnswer] = useState([]);
    const submitCorrect = (answer) => {
        if(!correctAnswers.includes(answer)){
            setCorrectAnswer([...correctAnswers, answer]);
        }
    }

    const [isVisible, setIsVisible] = useState(false);
    const [timer, setTimer] = useState(gameLength);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    // Keeps track of timer variable and updates it every second
    useEffect(() => {
        let countdown;
    
        if (isTimerRunning) {
          countdown = setInterval(() => {
            if (timer > 0) {
              setTimer(timer - 1);
            } else {
              clearInterval(countdown);
              setIsTimerRunning(false);
            }
          }, 1000);
        }
    
        return () => clearInterval(countdown);
      }, [timer, isTimerRunning]);
    
    // Formats time in seconds to minutes and seconds
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // Starts the game, called from button
    const startGame = () => {
        setIsVisible(false);
        getRandomActor();
        setCorrectAnswer([]);
        setPoints(0);
        setIsVisible(true);
        setIsTimerRunning(true);
        setTimer(gameLength);
    };

    const[points, setPoints] = useState(0);

    // Updated the points when correctAnswers is updated
    useEffect(() => {
        if(correctAnswers.length > 0){
            setPoints(correctAnswers.length);
        }
    }, [correctAnswers]);

    return(
        <div>
        {isVisible && <div>
            <div className="container">
                <h1>Guess the movies where {actor} is a main actor</h1>
                <form onSubmit={e => HandleSubmit(e, actor, submitCorrect)}>

                    <div className="form-group">
                        
                        <input type="text" className="form-control" id="movieInput" placeholder="Enter Movie or Series" disabled={!isTimerRunning}></input>

                    </div>
                    <input type="submit" value="Submit" />
                </form>
                {correctAnswers.map(answer => <p key={answer}>{answer}</p>)}
            </div>
            <div>{formatTime(timer)}</div>
            <div><h1>Points: {points}</h1></div>
            <div>{timer === 0 && <h1>Game Over!</h1>}</div>
        </div>}
        {!isTimerRunning && <button onClick={startGame}>Start!</button>}
        </div>
    );
}

async function HandleSubmit(event, actor, submitCorrect) {
    event.preventDefault();
    let input = document.getElementById("movieInput").value;
    let urlInput = input.replace(" ", "+");


    const url = "https://www.omdbapi.com/?apikey=28da6e60&t=" + urlInput;
    
    let answer = await fetch(url).then(response =>{ return response.json()});

    if(answer.Response === "True" && answer.Actors.includes(actor) ){
        submitCorrect(answer.Title);
    }

    event.target.reset();

}

export default GuessMovies;