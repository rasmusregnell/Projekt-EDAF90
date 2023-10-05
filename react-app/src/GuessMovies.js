import { useState, useEffect } from "react";

function GuessMovies (){
    /* */
    const actors = ["Jennifer Aniston", "Ryan Gosling", "Daniel Craig", "Johnny Depp", "Morgan Freeman", "Tom Hanks"];
    const getRandomActor = () => {
        let index = Math.floor(Math.random() * actors.length);
        setActor(actors[index]);
    }
    const[actor, setActor] = useState("");
    useEffect(() => {getRandomActor()}, []); //Nu körs detta endast en gång tanken är att byta ut den tomma listan till en variabel som öndras vid start av nytt spel senare, typ tiden går ut.

    const[correctAnswers, setCorrectAnswer] = useState([]);
    const submitCorrect = (answer) => {
        if(!correctAnswers.includes(answer)){
            setCorrectAnswer([...correctAnswers, answer]);
        }
    }
    return(
        <div className="container">
            <h1>Guess the movies where {actor} is a main actor</h1>
            <form onSubmit={e => HandleSubmit(e, actor, submitCorrect)}>

                <div className="form-group">
                    
                    <input type="text" className="form-control" id="movieInput" placeholder="Enter Movie or Series"></input>

                </div>
                <input type="submit" value="Sumbit" />
            </form>
            {correctAnswers.map(answer => <p key={answer}>{answer}</p>)}
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