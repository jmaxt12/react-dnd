import React, { Component } from 'react';
import axios from 'axios';

import Race from '../../components/Characters/Race/Race';
import Class from '../../components/Characters/Class/Class';
import Spells from '../../components/Characters/Spells/Spells';
import Features from '../../components/Characters/Features/Features';

const raceInfo = "http://www.dnd5eapi.co/api/races"
const classInfo = "http://www.dnd5eapi.co/api/classes"
const spellInfo = "http://www.dnd5eapi.co/api/spells"
const featureInfo = "http://www.dnd5eapi.co/api/features"

class Dnd extends Component {
    state = {
        races: [],
        classes: [],
        spells: [],
        features: []
    }

    
    componentDidMount () {
        axios.get( raceInfo, classInfo )
            .then(response => {
                this.setState({races: response.data.results})
            })
        axios.get( classInfo )
            .then( response => {
                this.setState({classes: response.data.results})
            })
        axios.get( spellInfo )
            .then( response => {
                this.setState({spells: response.data.results})
            })
        axios.get( featureInfo )
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
                <section>
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