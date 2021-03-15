import React, {Component} from 'react';
import Imagelist from './ImagelistComponent';
import Imagedetail from './ImagedetailComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{

    constructor(props){
        super(props);
        this.state ={
            characters:[]
        };
    }

    componentDidMount(){
        fetch('https://www.breakingbadapi.com/api/characters?limit=10')
        .then(res=>res.json())
        .then((data)=>{
            this.setState({characters:data})
        })
        .catch(console.log)
    }


    render(){

        const CharacterWithId = ({match})=>{
            return(
                <Imagedetail character={this.state.characters.filter(character=>character.char_id === +match.params.characterId)[0]} />
            )
        }
        return(
            <div>
                <Switch>
                    <Route exact path='/home' render={()=> <Imagelist characters={this.state.characters} />} />
                    <Route path='/home/:characterId' component={CharacterWithId} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default Main;