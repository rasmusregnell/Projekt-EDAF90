function HighScore(props) {
  // const highScoresSorted = [...props.highScores].sort((a, b) => {
  //   return parseInt(a) - parseInt(b);
  // });
  function test() {
    console.log(props.highScores);
    return;
  }
  return (
    <div className="h-[200px] w-[200px] border-1 border-black flex flex-col items-center">
      <span className="">{props.header}</span>
      {props.highScores.map((e) => (
        <div key={e} className="block">
          {e}
        </div>
      ))}

      <button onClick={test} className="border-1 border-black"></button>
    </div>
  );
}

export default HighScore;
