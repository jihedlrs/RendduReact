import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";  
import Placeholder from "../assets/placeholder.jpg";

const Event = ({ event, onBook }) => {
    const [showMessage, setShowMessage] = useState(false);
    const [isLiked, setIsLiked] = useState(false); 

    const images = import.meta.glob("../assets/*", { eager: true });
    const getImagePath = (img) => {
        return images[`../assets/${img}`]?.default || Placeholder;
    };

    const handleBook = () => {
        onBook(event.name);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000); 
        
   
    };
    const toggleLike = () => {
                      setIsLiked(prevState => !prevState);
                  };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={getImagePath(event.img)} />
            <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text>Prix: {event.price} DT</Card.Text>
                <Card.Text>Tickets restants: {event.nbTickets}</Card.Text>
                <Card.Text>Participants: {event.nbParticipants}</Card.Text>

                {showMessage && <Alert variant="success">You have booked an event</Alert>}

                <Button 
                    onClick={handleBook} 
                    disabled={event.nbTickets === 0}
                >
                    {event.nbTickets === 0 ? "Sold Out" : "Book an Event"}
                </Button>
                
                <Button 
                    onClick={toggleLike} 
                    variant={isLiked ? "danger" : "primary"} 
                
                >
                    {isLiked ? "Dislike" : "Like"} 
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Event;
