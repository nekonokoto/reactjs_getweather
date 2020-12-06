import React from 'react';
import button from 'react-bootstrap/Button'
class Form extends React.Component{
  render(){
    return (
    
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button className="btn btn-primary">Get Weather</button>
      </form>
    )
  }
}
export default Form;