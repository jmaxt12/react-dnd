import React, { Component } from 'react';
import axios from 'axios';

import Race from '../../components/Characters/Race/Race';

class Dnd extends Component {
    state = {
        races: []
    }
    
    componentDidMount () {
        axios.get( "http://www.dnd5eapi.co/api/races" )
            .then(response => {
                this.setState({races: response.data.results})
                console.log(response.data.results)
            })
    }

    render() {
       
        const races = this.state.races.map(race => {
            return <Race 
                key={race.index} 
                name={race.name} 
                />;
        });
        return(
            <div>
                <section>
                    <h1>Races</h1>
                    {races}
                </section>
                <section>
                    <h1>Classes</h1>
                    {/* {classes} */}
                </section>
            </div>
        )
    }
        
}


export default Dnd;