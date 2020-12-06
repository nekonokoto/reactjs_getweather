import React from 'react';
import Titles from './components/title'
import Form from './components/Form'
import Weather from './components/weather'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
const API_KEY="411d03ae4dbaf60252ff4be604eb9b2b"
const CORS='https://cors-anywhere.herokuapp.com/'
class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    country: undefined,
    description: undefined,
    error: undefined
  }
  
  getWeather= async (e)=>{
    
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(CORS+`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    if (city && country){
      console.log(data);
      this.setState({
      temperature: data.main.temp,
      city:  data.name,
      country: data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error: ""

      })
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        country: undefined,
        description: undefined,
        error: "Please enter the value."

      })
    }

    
    
  }
  render(){
    return(
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}/>
        
      </div>
    );
  }
}
export default App;