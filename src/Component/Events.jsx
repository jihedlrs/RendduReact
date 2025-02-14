import { useState, useEffect } from "react"; 
import Event from "./Event";
import data from "../data/events.json";
import { Container, Row } from "react-bootstrap";
import { Alert } from 'react-bootstrap';



function Events(){
    const [events, setEvents] = useState([]); 
    const [showMessage, setShowMessage] = useState(true);
    useEffect(() => {
        setEvents(data);
        const timer = setTimeout(() => setShowMessage(false), 3000);
    
        return () => clearTimeout(timer);
    }, []);
    
    // const event1 = {
    //         "name": "Festival de la médina de Tunis",
    //         "description": "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
    //         "img": "event2.jpg",
    //         "price": 15,
    //         "nbTickets": 4,
    //         "nbParticipants": 30,
    //         "like": false
    //  };

    const handleBookEvent = (eventName) => {
        setEvents(events.map(event => 
            event.name === eventName && event.nbTickets > 0
                ? { 
                    ...event, 
                    nbTickets: event.nbTickets - 1, 
                    nbParticipants: event.nbParticipants + 1 
                  }
                : event
        ));
    };
    return (
        <Container>
                    {showMessage && (
            <Alert variant="success">Bienvenue sur la page des événements !</Alert>
        )}
            <Row>

            {events.map((event, index) => 
                <Event key={index} event={event} onBook={handleBookEvent} /> 
            )}
            </Row>
            </Container>
    );
};
export default Events;