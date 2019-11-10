import React, { Component } from 'react'

import PropTypes from 'prop-types';



export class emails extends Component {
   
   
    getStyle = () =>
    {
        return{
            background : '#f4f4f4',
            padding : '10px',
            borderBottom : '1px #ccc dotted'
            
        }
      
      
    }
    

    
    render() {
       
        const{ id , address, checked } = this.props.emailContainer;
        
        
        return (
            <div style={this.getStyle()}>
                
            
                <table border="0" style={{width:'100%',padding: '5px 10px'}}>
                    <tr>
                    <th>isEnabled?</th>
                    <th>EMail</th>
                    <th>Delete</th>
                    </tr>

                    <tr style={{textAlign:'center'}}>
                        <td><input type="checkbox" checked={checked}
                    onChange={this.props.markChecked.bind(this, id)}/></td>
                 <td>{address}</td>
                 <td><button  onClick={this.props.delEmail.bind(this, id)} style={btnStyle}>x</button></td>
                 </tr>
                </table>
                 
            </div>
            
        )
    }
}
emails.propTypes =
{
    emails : PropTypes.object.isRequired
}

const btnStyle ={
    background : '#ff0000',
    color :'#fff',
    border : 'none',
    padding : '5px 10px',
    borderRadius : '50%',
    cursor : 'pointer',
    float : 'right'

}
export default emails
