import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddEmailList extends Component {
    
    state = {
        address:''
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addEmailList(this.state.address);
        this.setState({ address :''});
    }


    render() {
        return (
           <form onSubmit={this.onSubmit} style={{display:'flex'}}>
               <input type="email"
                name="address"
                style={{flex:'10',padding:'5px'}}
                 placeholder="Enter Your Email Addresses..."
                 value={this.state.address}
                 onChange={this.onChange} />
                 <input type="submit"
                  value="Add"
                  className="btn"
                  style={{flex:'1'}}
                   />

            <input type="checkbox" /><label for="checkbox">Show Only Enabled</label>
                
           </form>
           
        )
    }
}


AddEmailList.propTypes =
{
    AddEmailList : PropTypes.object.isRequired
}

export default AddEmailList
