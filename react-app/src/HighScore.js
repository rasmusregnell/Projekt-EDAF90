function HighScore(props) {
  const highScoresSorted = [...props.highScores].sort((a, b) => {
    return parseInt(b.points) - parseInt(a.points);
  });

  return (
    <div className="h-[200px] w-[200px] border-1 border-black flex flex-col items-center">
      <span className="">{props.header}</span>
      {highScoresSorted.map((e) => (
        <div key={e.points} className="block">
          {`points: ${e.points}`}
        </div>
      ))}
    </div>
  );
}

export default HighScore;
