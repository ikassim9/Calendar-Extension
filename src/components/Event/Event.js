import './Event.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 export default function Event({event}) {

    return (
        <div className="event">
        
        <input type="text" id={event.name} value={event.name} disabled/>
             
            
 
        </div>
      
 )        
}