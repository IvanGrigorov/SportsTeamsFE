import { React, useState, useEffect, use } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import Config from '../../Config/Config';



export default function PlayerDetail() {
    const [player, setPlayer] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        // fetch(Config.api + '/player/' + id).then(player => setPlayer(player));
        setPlayer(
            {
                name: "Hristo Yovov",
                team: "Levski Sofia",
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Hristo_Yovov.jpg/330px-Hristo_Yovov.jpg'
            },
        )
    }, [])

    if (!player) {
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }
    else {
        return (
            <div className="row">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={player.image} />
                    <Card.Body>
                        <Card.Title>{player.name}</Card.Title>
                        <Card.Body>
                            {player.team}
                        </Card.Body>
                    </Card.Body>
                </Card>
            </div>
        )
    }

}