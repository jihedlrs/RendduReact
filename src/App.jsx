import { Routes, Route, Navigate } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import "./Header.css"; 
import "./Footer.css"; 
import "./App.css";

const Footer = lazy(() => import('./Component/Footer'));
const CounterC = lazy(() => import('./Component/CounterC'));
const CounterF = lazy(() => import('./Component/CounterF'));
const Pokemon = lazy(() => import('./Component/Pokemon'));
const Ex2 = lazy(() => import('./Component/EX2'));
const ColorBox = lazy(() => import('./Component/ColorBox'));
const Notes = lazy(() => import('./Component/Notes'));
const TodoList = lazy(() => import('./Component/TodoList'));
const Events = lazy(() => import('./Component/Events'));
const Home = lazy(() => import('./Component/Home'));
const Header = lazy(() => import('./Component/Header'));
const Login = lazy(() => import('./Component/Login'));
const EventPrice = lazy(() => import('./Component/EventPrice'));
const AjouterEvent = lazy(() => import('./Component/AjouterEvent'));
const NotFound = lazy(() => import('./Component/NotFound'));
const EventDetails = lazy(() => import("./Component/EventDetails"));



  

function App() {
  const events = [
    { name: "Festival international de Carthage", description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page", price: 30, nbTickets: 10, nbParticipants: 10, img:"../assets/event1.jpg" },
    { name: "Festival de la médina de Tunis", description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page", price: 30, nbTickets: 10, nbParticipants: 10, img: "../assets/event2.jpg" },
    { name: "Journées cinématographiques de Carthage (JCC)", description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page", price: 30, nbTickets: 10, nbParticipants: 10, img: "../assets/event3.jpg" },

]

  return (
    <>
     <Suspense fallback={<h1>Chargement...</h1>}>
<Routes>
    <Route  path="/event" element={<Events/>}/>
    <Route  path="/header" element={<Header/>}/>
    <Route path="/login" element={<Navigate to ="/signin" replace />}/>
    <Route path="/signin" element={<Login />} />
    <Route path="/ajout" element={<AjouterEvent />} />
    <Route path="/by/price/:price" element={<EventPrice />} /> 
    <Route exact  path="/" element={<Home/>}/>  
    <Route path="/event/:eventName" element={<EventDetails  events={events} />} />
    <Route path="*" element={<NotFound />} />

 
  </Routes>
  </Suspense>


  

    
  
 
    
 
    </>
  );
}

export default App
