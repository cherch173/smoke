import { useState } from "react";
import Client from "../services/api";
import { useNavigate } from "react-router-dom";


function FireButton({ endeavorId, user, endeavor, handleEndeavors }) {
    const [fireState, setFireState] = useState()
    const [totalLikes, setTotalLikes] = useState(0);

    let navigate = useNavigate()

    const addLikes = async (e) => {
        e.preventDefault()
        const stringified = endeavor.fireButton.map(id => id.toString())
        console.log(stringified.includes(user.id.toString()))
        if (!stringified.includes(user.id.toString())) {
            await Client.put(`/endeavors/${endeavorId}/${user.id}`)
            handleEndeavors()
            navigate('/endeavors')
        }
        // setTotalLikes(totalLikes + 1);

    }
    const disLikes = async (e) => {
        e.preventDefault()
        const stringified = endeavor.fireButton.map(id => id.toString())
        console.log(stringified.includes(user.id.toString()))
        if (stringified.includes(user.id.toString())) {
            await Client.put(`/endeavors/${endeavorId}/${user.id}/dislike`)
            handleEndeavors()
            navigate('/endeavors')
        }
    }


    return (
        <div>
            <img className="flameImg" src="https://i.pinimg.com/originals/a5/fe/c4/a5fec4284531e94c3103e325dd3696f6.gif" alt="FireButton" onClick={addLikes} />
            <img className="flameImg" src="https://media.tenor.com/UblxgRjZMBwAAAAi/cubemelt-melt.gif" alt="CoolButton" onClick={disLikes} />
            <p><b><span className="fireText">{endeavor?.fireButton?.length || 0} </span></b> SPARKS</p>
        </div>
    )
}

export default FireButton