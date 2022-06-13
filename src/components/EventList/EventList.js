import Event from '../Event/Event';
import './EventList.css';
export default function EventList({events}) {
 

    return (
        <>
          <h3>Archives</h3>
             <div className="event-list">
            {events.map(event => (
                <Event key={event.name} event={event} />
            ))}
        </div>
        </>
   
      
    )
}
    