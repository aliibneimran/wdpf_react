import React from "react";

class Car extends React.Component {
    constructor(){
        super();
        this.state = {color: "red", wheels: 6};
    }
    render() {
      return (
        <div>
            <h2>Hi, I am a Car!</h2>
            <h2>This color is {this.props.color}</h2>
            <h2>This wheels are {this.state.wheels}</h2>
        </div>
      )
    }
  }
class Garage extends React.Component{
    render(){
        return(
            <div>
                <h1>This id Garage where Cars here</h1>
                <Car color="Black" wheels="4"></Car>
            </div>
        )
    }
}
  export default Garage;