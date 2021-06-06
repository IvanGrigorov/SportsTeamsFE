import { React, useState, useEffect, use } from 'react';
import { Card, Spinner, ListGroup } from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import Config from '../../Config/Config';



export default function TeamsDetail() {
    const [team, setTeam] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        // fetch(Config.api + '/teams/' + id).then(team => setTeam(team));
        setTeam(
            {
                name: "Levski Sofia",
                players: [
                    {
                        name: "Hristo Yovov",
                        id: 1
                    }
                ],
                image: 'https://levski.bg/wp-content/themes/Levski.bg/img/levski-logo1.png'
            },
        )
    }, [])
    if (!team) {
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }
    else {
        return (
            <div class="row">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={team.image} />
                    <Card.Body>
                        <Card.Title>{team.name}</Card.Title>
                        <p>Players:</p>
                        <ListGroup>
                            {team.players && team.players.map((player) => (
                                <ListGroup.Item>{player.name}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}