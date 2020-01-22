import React, { Component } from 'react';
import axios from 'axios';

import Race from '../../components/Characters/Race/Race';
import Class from '../../components/Characters/Class/Class';
import Spells from '../../components/Characters/Spells/Spells';
import Features from '../../components/Characters/Features/Features';

const api = "http://www.dnd5eapi.co/api/"

class Dnd extends Component {
    state = {
        races: [],
        classes: [],
        spells: [],
        features: [],
    }

    
    componentDidMount () {
        axios.get( api + "races" )
            .then(response => {
                this.setState({races: response.data.results})
            })
        axios.get( api + "classes" )
            .then( response => {
                this.setState({classes: response.data.results})
            })
        axios.get( api + "spells" )
            .then( response => {
                this.setState({spells: response.data.results})
            })
        axios.get( api + "features" )
            .then( response => {
                this.setState({features: response.data.results})
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

       const spells = this.state.spells.map(spell => {
           return <Spells 
            key={spell.index}
            name={spell.name}
            />
       })

       const features = this.state.features.map(feature => {
        return <Features
         key={feature.index}
         name={feature.name}
         />
    })
                        
        return(
            <div>
                <section onClick >
                    <h1>Races</h1>
                    {races}
                </section>
                <section>
                    <h1>Classes</h1>
                    {classes}
                </section>
                <section>
                    <h1>Spells</h1>
                    {spells}
                </section>
                <section>
                    <h1>Features</h1>
                    {features}
                </section>
            </div>
        )
    }
        
}


export default Dnd;