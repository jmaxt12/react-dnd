import React, { Component } from 'react';
import axios from 'axios';

import Race from '../../components/Characters/Race/Race';
import Class from '../../components/Characters/Class/Class';

class Dnd extends Component {
    state = {
        races: [],
        classes: []
    }
    
    componentDidMount () {
        axios.get( "http://www.dnd5eapi.co/api/races" )
            .then(response => {
                this.setState({races: response.data.results})
                console.log("races", response.data.results)
            })
        axios.get("http://www.dnd5eapi.co/api/classes")
            .then( response => {
                this.setState({classes: response.data.results})
                console.log("classes", response.data.results)
            })
    }

    render() {
       
        const races = this.state.races.map(race => {
            return <Race 
                key={race.index} 
                name={race.name} 
                />;
            });

       const classes = this.state.classes.map(clas => {
           return <Class 
            key={clas.index}
            name={clas.name}
            />
       })
                        
        return(
            <div>
                <section>
                    <h1>Races</h1>
                    {races}
                </section>
                <section>
                    <h1>Classes</h1>
                    {classes}
                </section>
            </div>
        )
    }
        
}


export default Dnd;