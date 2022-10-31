import React from 'react';
import Host_head from './Host_head';
import Host_nav from './Host_nav';

function Host_third({ prevStep, nextStep, handleChange, values }) {
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    return (
        <div className='third-text hosting-text'>
            <p>Which of these best describes your place?</p>
            <div className='describe-place'>
                <Host_head />
                <div className='describe-card'>
                    <ul>
                        <li className='des-card'>
                            <h4>Farm stay</h4>
                            <p>A rural stay where guests may spend time with animals, hiking, or crafting.</p>
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

export default Host_third;
