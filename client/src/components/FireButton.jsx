import { useState } from "react";

function FireButton() {

    const [totalLikes, setTotalLikes] = useState(0);
    const addLikes = () => {
        setTotalLikes(totalLikes + 1);
    }
    const disLikes = () => {
        if (totalLikes > 0) {
            setTotalLikes(totalLikes - 1)
        }
    }
    return (
        <div>
            <img className="flameImg" src="client/public/flame.png" alt="FireButton" onClick={addLikes} /> -- 
            <img className="flameImg"src="client/public/flame2.png" alt=" CoolButton " onClick={disLikes} />
            <p><b>{totalLikes} </b> SPARKS</p>
        </div>
    )
}

export default FireButton