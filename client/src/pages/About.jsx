import React from 'react'

const About = () => {
    return (
        <div className="card">
            <h4>About <span className='fireText'>SMOKE</span></h4>
            <p className="textGeneral">
                <strong>Designed by:</strong> Brian Cherchiglia
            </p>
            <p className="textGeneral">
                <strong>Published by:</strong> Cherch
            </p>

            <p>Welcome to <span className="fireText">SMOKE</span></p>
            <p className="textGeneral">
                SMOKE is an interactive social network designed to proprel intellectual property and relay it quickly and easily to fellow peers and creatives for review and critque.
            </p>
            <p className='textGeneral'>
                Our users can interact with each post and reward with a <span className='fireText'>flame</span> to show their support for the creative Endeavors of their choice. Here, we value inclusivity and a positive support structure to promote growth in all facets of the creative arts.
            </p>
            <p className='textGeneral'>
                All after all, we know that where there's <span className='fireText'>smoke</span>, there's <span className='fireText'>fire</span>.
            </p>
            <br />
            <button>BACK</button>
        </div>
    )
}

export default About