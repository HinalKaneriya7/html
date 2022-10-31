import React, {Component} from 'react';
import $ from 'jquery'; 
import Host_one from '../Hostcontent/Host_one';
import Host_second from '../Hostcontent/Host_second';
import Host_third from '../Hostcontent/Host_third';

$('.host-btn').on('click', function() {
    $('.second-text').show();
    $('.one-text').hide();
  });

export class Host_all extends Component {
    state = { 
        step:1,
        text:'',
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
      }
    
      // handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      }

    render() {
        const { step } = this.state;
        const { text } = this.state;
        const values = { text }

        switch (step) {
            case 1: 
              return (
                <Host_one 
                    nextStep={ this.nextStep }
                    handleChange={ this.handleChange}
                    values={ values }
                />
              )
            case 2: 
              return (
                <Host_second 
                    prevStep={ this.prevStep }
                    nextStep={ this.nextStep }
                    handleChange={ this.handleChange}
                    values={ values }
                />
              )
            case 3: 
              return (
                <Host_third 
                    prevStep={ this.prevStep }
                    nextStep={ this.nextStep }
                    handleChange={ this.handleChange}
                    values={ values }
                />
              )
            case 4:
              return (
                <Host_one 
                    prevStep={ this.prevStep }
                    nextStep={ this.nextStep }
                    handleChange={ this.handleChange}
                    values={ values }
                />
              )
          }
     
    }
}

export default Host_all;
