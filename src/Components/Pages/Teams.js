import { React, useState, useEffect } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Config from '../../Config/Config';



export default function Teams() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        // fetch(Config.api + '/teams').then(teams => setTeams(teams));
        setTeams([
            {
                name: "Levski Sofia",
                id: 1
            },
            {
                name: "CSKA Sofia",
                id: 2
            },
            {
                name: "Ludogorets Razgrad",
                id: 3
            }
        ], [])
    })
    if (!teams.length) {
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }
    else {
        return (
            <div class="row">
                {teams && teams.map((team) => (
                    // <Link to={"/teams/" + team.id}>
                    <Link to={"/Teams/1"} key={teams.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/assets/images/teams.jpg" />
                            <Card.Body>
                                <Card.Title>{team.name}</Card.Title>
                                <Card.Text>
                                    This is an example team
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </div>
        );
    }
}