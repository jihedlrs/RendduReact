import React from "react";
import { useParams } from "react-router-dom";

const EventDetails = ({ events }) => {
  const { eventName } = useParams(); // Récupérer le paramètre de l'URL

  // Recherche de l'événement correspondant
  const event = events.find(e => e.name === decodeURIComponent(eventName));

  if (!event) {
    return <h2>Événement introuvable</h2>;
  }

  return (
    <div>
      <h1>{event.name}</h1>
      <img src={`/assets/${event.img}`} alt={event.name} style={{ width: "300px" }} />
      <p>{event.description}</p>
      <p>Prix: {event.price} DT</p>
      <p>Tickets restants: {event.nbTickets}</p>
      <p>Participants: {event.nbParticipants}</p>
    </div>
  );
};

export default EventDetails;
