import { React, useState, useEffect } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Config from '../../Config/Config';



export default function Players() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        // fetch(Config.api + '/players').then(players => setPlayers(players));
        setPlayers([
            {
                name: "Hristo Yovov",
                id: 1
            },
            {
                name: "Emil Gargorov",
                id: 2
            },
            {
                name: "Svetoslav Dyakov",
                id: 3
            }
        ])
    }, [])

    if (!players.length) {
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }
    else {
        return (
            <div className="row">
                {players && players.map((player) => (
                    <Link to={"/Players/1"} key={player.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/images/player.jpg" />
                            <Card.Body>
                                <Card.Title>{player.name}</Card.Title>
                                <Card.Text>
                                    This is an example player
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </div>
        );
    }
}