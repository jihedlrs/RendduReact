import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import Placeholder from "../assets/placeholder.jpg";
import { Link } from "react-router-dom";

const Event = ({ event, onBook }) => {
    const [showMessage, setShowMessage] = useState(false);
    const [liked, setLiked] = useState(false);

    const images = import.meta.glob("../assets/*", { eager: true });
    const getImagePath = (img) => images[`../assets/${img}`]?.default || Placeholder;

    const handleBook = () => {
        onBook(event.name);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
    };

    const toggleLike = () => {
        setLiked(prevState => !prevState);
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={getImagePath(event.img)} />
            <Card.Body>
                <Card.Title>
                    {/* Ajout du lien vers EventDetails */}
                    <Link to={`/event/${encodeURIComponent(event.name)}`} className="event-link">
                        {event.name}
                    </Link>
                </Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text>Prix: {event.price} DT</Card.Text>
                <Card.Text>Tickets restants: {event.nbTickets}</Card.Text>
                <Card.Text>Participants: {event.nbParticipants}</Card.Text>

                {showMessage && <Alert variant="success">Vous avez réservé un événement</Alert>}

                <Button onClick={handleBook} disabled={event.nbTickets === 0}>
                    {event.nbTickets === 0 ? "Épuisé" : "Réserver"}
                </Button>

                <Button onClick={toggleLike} variant={liked ? "danger" : "primary"}>
                    {liked ? "Je n'aime plus" : "J'aime"}
                </Button>

                <Button variant="outline-primary">
                    <Link to={`/by/price/${event.price}`}>Voir Détails</Link>
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Event;
