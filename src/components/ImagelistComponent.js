import React from 'react';
import { Link } from 'react-router-dom';


function RenderCharacter({character}){
    return(
        <div className='list-card'>
            <Link to={`home/${character.char_id}`}>
            <img className="single-char" src={character.img} alt="character" />
            <div className="character-link">{character.name}</div>
            </Link>
        </div>
    )
}

function Imagelist(props){

    const list = props.characters.map(character=>{
        return(
            <div key={character.char_id} className='grid-item'>
               <RenderCharacter character={character} />
            </div>
        )
    })
    return(
        <div>
            <div className="header">
                <div className="header-icon">
                    <img className="header-image"src='grolens-logo.png' />
                </div>
                <div className="header-text">Gro Images</div>
            </div>
            <div className='grid'>
                {list}
            </div>
        </div>
    )
}

export default Imagelist;