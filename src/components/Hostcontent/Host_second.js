import React from 'react';
import Host_head from './Host_head';
import Host_nav from './Host_nav';

function Host_second({ prevStep, nextStep, handleChange, values }) {

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    
    
        
    return (
        <div className='second-text hosting-text0'>
            <p>What kind of place will you host?</p>
            <div className='choose-place'>
                <Host_head />
                <div className='choose-card'>
                    <ul>
                        <li className='place-card'>
                            <p>Flat</p>
                            <img src="/images/live-1.jpg" />
                        </li>
                    </ul>
                </div>
                <div className='prev-next-nav'>
                    <button onClick={ Previous } className='hostprev-btn btn-yellow'>
                        <span>Back</span>
                    </button>
                    <button onClick={ Continue } className='hostnext-btn btn-yellow'>
                        <span>Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Host_second;
