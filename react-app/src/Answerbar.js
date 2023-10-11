import React from "react";

function Answerbar({answer}){
    return (
        <div className="bg-white text-blue-500 py-2 px-4 rounded mb-2 border border-blue-500">
            {answer}
        </div>
    );
}

export default Answerbar;