import { React } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default function Home() {
    return (
        <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
                This is a simple app to for applying for a position as web developer in SoftUni!
                Here you can build teams and players with custim attributes!
                The Backend is on ASP.NET CORE 5, The Frontend is on React!
            </p>
            <p>
                <Link to="/Teams">
                    <Button variant="primary" to>Teams</Button>
                </Link>
                <Link to="/Players">
                    <Button variant="primary" to>Players</Button>
                </Link>
            </p>
        </Jumbotron>
    )
}