import React from 'react'

const About = () => {
    return (
        <div>
            <h4>About <span className='fireText'>SMOKE</span></h4>
            <div className="card">
                <p className="textGeneral">
                    <strong>Designed by:</strong> Brian Cherchiglia
                </p>
                <p className="textGeneral">
                    <strong>Published by:</strong> Cherch
                </p>

                <p>Welcome to <span className="fireText">SMOKE</span></p>
                <p className="textGeneral">
                    <span className="fireText">Smoke </span> is an interactive social network designed to proprel intellectual property easily and efficiently to peers and fellow creatives for review, sharing purposes and healthy critque.
                </p>
                <p className='textGeneral'>
                    Our users can interact with each post and (if impressed) reward the Endeavor with a <span className='fireText'>flame</span> to show support.
                </p>
                <p className='textGeneral'>
                    Have more to share? Feel free to engage in each Endeavor's individualized <span className="fireText">comment </span> thread to share specifics.
                </p>
                <p className='textGeneral'>
                    After all, we know that where there's <span className='fireText'>smoke</span>...there's <span className='fireText'>fire</span>.
                </p>
            </div>

        </div>
    )
}

export default About