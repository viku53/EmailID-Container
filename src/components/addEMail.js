import React, {Component} from 'react';
import EMails from './emails';

import PropTypes from 'prop-types';


class addEmail extends Component
{
    
    render()
    {
        return this.props.addEmail.map((emailContainer) =>(
           
            <EMails key={emailContainer.id} emailContainer={emailContainer} markChecked={this.props.markChecked} 
            delEmail = {this.props.delEmail}
            eventCheck={this.props.eventCheck}/>
           
            
        ));
    }
}

addEmail.propTypes =
{
    addEmail : PropTypes.array.isRequired
}

export default addEmail
