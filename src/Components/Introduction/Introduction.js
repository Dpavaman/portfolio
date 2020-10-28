import React from 'react'
import Typewriter from 'typewriter-effect'
import '../Introduction/Introduction.css'

const Introduction = () => {
    return (
        <div className='myIntro' >
            <div className='myHeading'>
                <div className='main text-center mb-3'>
                    <span className='sayHi' > Hi, I am </span> <br />
                    <span>
                        <strong className='Name'>Pavaman Dabeer</strong>
                    </span>
                </div>
                <div className='effect'>
                    <Typewriter
                        options={{
                            strings: ['Philomath📖', 'Engineer ✌', 'MERN Stack Developer 💻', 'Technophile 👨🏽‍💻'],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Introduction