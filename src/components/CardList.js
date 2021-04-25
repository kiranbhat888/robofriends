import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // if (true)
    //     throw new Error('Noooooooooooo..');
    const cardsArray = robots.map((robot, id) => {
        return <Card key={id} name={robot.name} id={robot.id} email={robot.email} />
    });
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;