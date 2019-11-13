import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            horses: [
                {
                    name: "Sugar",
                    discipline: "Lesson Horse",
                    age: 22
                },
                {
                    name: "Sunflower",
                    age: 14
                },
                {
                    name: "Morph",
                    discipline: "Eventing",
                    age: 5
                }
            ],
            userInput: '',
            filteredHorses: []
        }
    }   
    handleChange(val) {
        this.setState({ userInput: val })
    }

    filteredHorses(prop) {
        let horses = this.state.horses;
        let filteredHorses = [];

        for (let i = 0; i<horses.length; i++){
        if (horses[i].hasOwnProperty(prop) ){
            filteredHorses.push(horses[i]);
        }
    }
     this.setState({ filteredHorses: filteredHorses })
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.horses, null, 10)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filteredHorses(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredHorses, null, 10) }</span>
            </div>

           
        )
    }
}

export default FilterObject