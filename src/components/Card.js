import React from 'react';  

const Card = ({id,name,email}) => {
    // const {id,name,email} = props;
    return[
        // <h1>RoboFriends</h1>,
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 " key={id}>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    ];
}

export default Card;