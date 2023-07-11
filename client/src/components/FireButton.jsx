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
            <img className="flameImg" src="https://i.pinimg.com/originals/a5/fe/c4/a5fec4284531e94c3103e325dd3696f6.gif" alt="FireButton" onClick={addLikes} /> 
            <img className="flameImg"src="https://media.tenor.com/UblxgRjZMBwAAAAi/cubemelt-melt.gif" alt=" CoolButton" onClick={disLikes} />
            <p><b><span className="fireText">{totalLikes} </span></b> SPARKS</p>
        </div>
    )
}

export default FireButton