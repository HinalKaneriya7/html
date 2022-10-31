import React from 'react'

function Host_nav({ prevStep, nextStep, handleChange, values }) {
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    


    return (
        <div className='prev-next-nav'>
            <button onClick={ Continue } className='hostprev-btn btn-black'>
                <span>Back</span>
            </button>
            <button onClick={ Previous } className='hostnext-btn btn-black'>
                <span>Next</span>
            </button>
        </div>
    )
}

export default Host_nav;
