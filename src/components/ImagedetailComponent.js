import React from 'react';


function RenderDetail({character}){
    return(
        <div className="individual-card">
                <img className="card-image" src={character.img} alt='character' />
                <div> Name: {character.name}</div>
                <div> Occupation: {character.occupation[0]}</div>
                <div> Played By: {character.portrayed}</div>
                <div> Nickname: {character.nickname}</div>
        </div>
    )
}
function Imagedetail(props){
    if(props.character){
        return(
            <div>
                <div className="detail-header"> 
                    <h3>{props.character.name}</h3>
                </div>
                <RenderDetail character={props.character} />
            </div>
        )
    }

    return <div />;
}

export default Imagedetail;