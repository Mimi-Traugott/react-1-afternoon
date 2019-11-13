import React, {Component} from 'react';


class FilterString extends Component {
    constructor (){
        super();
        this.state = {
            songLyrics: ["Hello?", "Is", "it", "me", "you're", "looking", "for?"],
            userInput: '',
            filteredLyrics: []
        }
    };
        handleChange(val) {
            this.setState({ userInput: val });
        }

        filteredLyrics(userInput) {
            let songLyrics = this.state.songLyrics;
            let filteredLyrics = [];

            for(let i = 0; i < songLyrics.length; i++){
                if(songLyrics[i].includes(userInput) ) {
                    filteredLyrics.push(songLyrics[i]);
                }
            }
            this.setState({ filteredLyrics: filteredLyrics })
        }

    render(){
        return (
        <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"> Lyrics: {JSON.stringify(this.state.songLyrics, null, 10) }</span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.filteredLyrics(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterStringRB">Filtered Lyrics: {JSON.stringify(this.state.filteredLyrics, null, 10) }</span>
        </div>
        )
    }
}

export default FilterString;