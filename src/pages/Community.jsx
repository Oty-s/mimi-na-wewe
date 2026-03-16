import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../App.css'

const spotlightEvents = [
  {
    id: 1,
    title: 'Usanii Deluxe Tech Meetup',
    host: 'Usanii Deluxe',
    date: 'Feb 20',
    time: '5:00pm EAT',
    location: 'Nairobi',
    seats: '80/120 seats',
    image: '/images/logo-2.png',
  },
  {
    id: 2,
    title: 'Master DB Engineering using SQL',
    host: 'Ben Ngui',
    date: 'Feb 14',
    time: '12:00pm EAT',
    location: 'Online',
    seats: '22/35 seats',
    image: '/images/logo-1.png',
  },
  {
    id: 3,
    title: 'Design Systems 101',
    host: 'Irene W.',
    date: 'Feb 25',
    time: '6:00pm EAT',
    location: 'Online',
    seats: '45/60 seats',
    image: '/images/logo-1.png',
  },
  {
    id: 4,
    title: 'Storytelling for Creatives',
    host: 'Mimi & Wewe',
    date: 'Mar 02',
    time: '4:00pm EAT',
    location: 'Hybrid',
    seats: '30/50 seats',
    image: '/images/logo-2.png',
  },
]

function Community() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % spotlightEvents.length)
    }, 4000)
    return () => clearInterval(id)
  }, [isPaused])

  return (
    <div className="community-page">
      <section className="events-hero">
        <div className="container">
          <div className="events-hero-content">
            <div>
              <p className="badge badge-outline">Community</p>
              <h1 className="events-title">Cheche za Sanaa</h1>
              <p className="events-subtitle">
                A vibrant collective of artists across performing, visual, and literary arts. Connect, collaborate, and
                create with peers who champion bold expression.
              </p>
              <div className="hero-buttons" style={{ gap: '0.75rem', marginTop: '1rem' }}>
                <Link to="/events" className="btn btn-gradient">Explore events</Link>
                <Link to="/blog" className="btn btn-ghost">Read the blog</Link>
              </div>
            </div>
            <div
              className="community-carousel"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="carousel-track" style={{ transform: `translateX(-${activeIdx * 100}%)` }}>
                {spotlightEvents.map((event) => (
                  <div key={event.id} className="carousel-card">
                    <div className="carousel-media">
                      <img src={event.image} alt={event.title} />
                    </div>
                    <div className="carousel-body">
                      <p className="badge badge-outline">{event.location}</p>
                      <h3>{event.title}</h3>
                      <p className="meta">{event.date} • {event.time}</p>
                      <p className="meta">{event.host}</p>
                      <p className="seats">{event.seats}</p>
                      <Link to="/events" className="btn btn-ghost">View details</Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="carousel-dots">
                {spotlightEvents.map((event, idx) => (
                  <button
                    key={event.id}
                    className={idx === activeIdx ? 'dot active' : 'dot'}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setActiveIdx(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="artists-section">
        <div className="container">
          <div className="section-header-left">
            <h2 className="section-title">Ways to engage</h2>
            <p className="section-description">
              Join circles, showcase work, and collaborate on multidisciplinary projects with fellow artists.
            </p>
          </div>
          <div className="artist-types">
            <Link to="/performing-arts" className="artist-type-card">
              <div className="artist-type-icon">🎭</div>
              <h3>Performing Arts</h3>
              <p>Workshops, showcases, and live collabs across theatre, dance, and music.</p>
            </Link>
            <Link to="/visual-arts" className="artist-type-card">
              <div className="artist-type-icon">🎨</div>
              <h3>Visual Arts</h3>
              <p>Studios, critiques, and exhibitions spanning painting, sculpture, and digital art.</p>
            </Link>
            <Link to="/literary-arts" className="artist-type-card">
              <div className="artist-type-icon">📚</div>
              <h3>Literary Arts</h3>
              <p>Readings, writing circles, and publishing opportunities for poets and storytellers.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="subscription-section">
        <div className="container">
          <h2 className="subscription-title">Stay in the loop</h2>
          <p className="subscription-subtitle">
            Get updates on new collaborations, calls for artists, and upcoming showcases.
          </p>
          <div className="subscription-form">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="btn btn-gradient">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Community
