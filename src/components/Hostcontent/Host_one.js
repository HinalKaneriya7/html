import React from 'react'

// class
// const Host_one = ({ nextStep, handleChange, values }) => {
//     const Continue = e => {
//         e.preventDefault();
//         nextStep();
//     }
//     const Previous = e => {
//         e.preventDefault();
//         prevStep();
//     }
// }


function Host_one({ prevStep, nextStep, handleChange, values }) {
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
        return (
            <div className='one-text hosting-text'>
                <div className='exit'>
                    <span>Exit</span>
                </div>
                <h2>Become a Host in 10 easy steps</h2>
                <p>Join us. We'll help you every step of the way.</p>
                <div className='btn-bottom'>
                    <button onClick={ Continue } className='host-btn btn-yellow'>
                        <span>Let's Go</span>
                    </button>
                </div>
            </div>
        )
    }

export default Host_one;