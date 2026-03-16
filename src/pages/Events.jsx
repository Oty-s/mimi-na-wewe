import '../App.css'

const events = [
  {
    id: 1,
    image: '/images/logo-1.png',
    title: 'Master DB Engineering using SQL',
    host: 'Ben Ngui',
    date: 'Feb 14',
    time: '12:00pm EAT',
    location: 'Online',
    seats: '22/35 seats',
  },
  {
    id: 2,
    image: '/images/logo-2.png',
    title: 'Usanii Deluxe Tech Meetup',
    host: 'Usanii Deluxe',
    date: 'Feb 20',
    time: '5:00pm EAT',
    location: 'Nairobi',
    seats: '80/120 seats',
  },
  {
    id: 3,
    image: '/images/logo-1.png',
    title: 'Design Systems 101',
    host: 'Irene W.',
    date: 'Feb 25',
    time: '6:00pm EAT',
    location: 'Online',
    seats: '45/60 seats',
  },
  {
    id: 4,
    image: '/images/logo-2.png',
    title: 'Storytelling for Creatives',
    host: 'Mimi & Wewe',
    date: 'Mar 02',
    time: '4:00pm EAT',
    location: 'Hybrid',
    seats: '30/50 seats',
  },
]

function Events() {
  return (
    <div className="events-page">
      <div className="events-hero">
        <div className="container">
          <div className="events-hero-content">
            <div>
              <p className="badge badge-outline">Community</p>
              <h1 className="events-title">Usanii Deluxe Events</h1>
              <p className="events-subtitle">Community-led and organized events held under the banner of Usanii Deluxe.</p>
              <button className="btn btn-gradient">Search events</button>
            </div>
            <div className="events-map">
              <div className="map-circle">
                <div className="map-pin">•</div>
                <div className="map-pin pin-2">•</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-card-header">
                <p className="badge badge-solid">Online</p>
                <div className="event-share">•••</div>
              </div>
              <div className="event-card-image">
                <img src={event.image} alt={event.title} />
              </div>
              <h3>{event.title}</h3>
              <div className="event-meta">
                <span>By {event.host}</span>
                <span>{event.time}</span>
              </div>
              <div className="event-meta">
                <span>{event.date}</span>
                <span>{event.location}</span>
              </div>
              <div className="event-footer">
                <span className="seats">{event.seats}</span>
                <button className="btn btn-ghost">Join</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events
