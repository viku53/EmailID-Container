import React, { Component } from 'react';
import Addemail from './components/addEMail';
import Header from './components/Header';

import AddEmailList from './components/AddEmailList';

import Uuid from 'uuid';
import './App.css';


class App extends Component{
  state =
  {
    emailContainer : [
      {
      id:Uuid.v4(),
      address:'sindhwadvicky@gmail.com',
      checked : false
      }
    ] 
  }
//MarkChecked
  markChecked=(id) =>
  {
      this.setState({ emailContainer: this.state.emailContainer.map(emailContainer => {
        if(emailContainer.id === id)
        {
          
          emailContainer.checked = !emailContainer.checked;
          
        }
        return emailContainer;
      })});
  }
//emailDelete
  delEmail = (id) =>
  {
    this.setState({emailContainer : [...this.state.emailContainer.filter(emailContainer => emailContainer.id !== id)]})
  }

  addEmailList = (address) =>
  
  {
    const newEmail= {
      id: Uuid.v4(),
      address,
      checked: false
    }
    this.setState({emailContainer: [...this.state.emailContainer, newEmail]})
    
  }
  

  
  
  render(){
  return (
    <div className="App">
      <div className="container">
      <Header />
      <AddEmailList addEmailList={this.addEmailList}/>

      
     <Addemail addEmail={this.state.emailContainer} markChecked={this.markChecked}
     delEmail = {this.delEmail}
      onClick={this.onClick} 
       
       />
     
      </div>
      
    </div>
  );
}
}
 
export default App;
