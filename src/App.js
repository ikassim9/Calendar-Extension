 
import './App.css';
import EventList from './components/EventList/EventList';
import React, {useState} from 'react';
import "./components/FontAwesomeIcons";


function App() {
    
const [events, setEvent] = useState([{name: 'Item 1', value: 'I am an event'}, {name: '44', value: 'I am an event'},{name: '5 2', value: 'I am an event'}]);
    return(
 <EventList events = {events} />
    )
}


export default App;
