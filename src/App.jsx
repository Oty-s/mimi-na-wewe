import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Check system preference or localStorage
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
    const initialTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark')
    
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'light' : 'dark'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <div className={`app ${theme}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <img 
              src={theme === 'dark' ? '/logos/darkmode.png' : '/logos/lightmode.png'} 
              alt="Mimi & Wewe" 
              className="logo-img"
            />
          </div>
          <ul className="nav-links">
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#artists">Artists</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#community">Community</a></li>
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className="btn-connect">Join Community</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">Cheche za Sanaa</h1>
              <p className="hero-subtitle">
              Mimi & Wewe is an entertainment community that thrives in making art. We bring together artists across performing arts, visual arts, and literary arts to celebrate and showcase diverse forms of artistic expression.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-gradient">Join Us</button>
              <a href="#learn" className="btn-link">Learn More <span className="arrow">→</span></a>
            </div>
            
            {/* Stats Card */}
            <div className="stats-card">
              <div className="stat-item">
                <div className="stat-value">500+</div>
                <div className="stat-label">Artworks</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">120+</div>
                <div className="stat-label">Artists</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">50+</div>
                <div className="stat-label">Events</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">∞</div>
                <div className="stat-label">Creativity</div>
                <div className="artist-avatars">
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <div className="glowing-orbs">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
              </div>
              <div className="hero-portrait">
                <div className="portrait-placeholder"></div>
              </div>
              <div className="trending-badge">
                <span>FEATURED ARTISTS</span>
                <span>LIVE CREATIONS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section id="trending" className="trending-section">
        <div className="container">
          <div className="section-header-right">
            <h2 className="section-title">Featured Works This Week</h2>
            <p className="section-description">
              Discover the latest creations from our vibrant community of artists. From performing arts to visual arts and literary arts - explore diverse expressions of creativity.
            </p>
            <a href="#all" className="see-all-link">See all <span>→</span></a>
          </div>
          <div className="nft-grid">
            <div className="nft-card">
              <div className="nft-image nft-1"></div>
              <div className="nft-info">
                <h4>Performing Arts</h4>
                <p>Theatrical performance</p>
              </div>
            </div>
            <div className="nft-card">
              <div className="nft-image nft-2"></div>
              <div className="nft-info">
                <h4>Visual Arts</h4>
                <p>Contemporary artwork</p>
              </div>
            </div>
            <div className="nft-card">
              <div className="nft-image nft-3"></div>
              <div className="nft-info">
                <h4>Visual Arts</h4>
                <p>Handcrafted creation</p>
              </div>
            </div>
            <div className="nft-card">
              <div className="nft-image nft-4"></div>
              <div className="nft-info">
                <h4>Literary Arts</h4>
                <p>Written work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="artists-section">
        <div className="container">
          <div className="section-header-left">
            <h2 className="section-title">Meet Our Artists</h2>
            <p className="section-description">
              Our community comprises diverse talents across performing arts, visual arts, and literary arts - all creative minds collaborating to create amazing works.
            </p>
          </div>
          <div className="artist-types">
            <div className="artist-type-card">
              <div className="artist-type-icon">🎭</div>
              <h3>Performing Arts</h3>
              <p>Theatrical performances, dance, music, and live art experiences that captivate and move audiences through dynamic expression.</p>
            </div>
            <div className="artist-type-card">
              <div className="artist-type-icon">🎨</div>
              <h3>Visual Arts</h3>
              <p>Painting, sculpture, photography, crochet, cartography, and all forms of visual expression that create stunning works of art.</p>
            </div>
            <div className="artist-type-card">
              <div className="artist-type-icon">📚</div>
              <h3>Literary Arts</h3>
              <p>Poetry, prose, storytelling, and written works that weave words into powerful narratives and beautiful literary creations.</p>
            </div>
          </div>
          <div className="artist-cards">
            <div className="artist-card">
              <div className="artist-header">
                <div className="artist-avatar-small"></div>
                <div className="artist-info">
                  <div className="artist-name">Featured Artist</div>
                  <div className="artist-date">Performing Arts, This Month</div>
                </div>
              </div>
              <div className="artist-artwork artwork-1"></div>
            </div>
            <div className="artist-card">
              <div className="artist-header">
                <div className="artist-avatar-small"></div>
                <div className="artist-info">
                  <div className="artist-name">Featured Artist</div>
                  <div className="artist-date">Visual Arts, This Month</div>
                </div>
              </div>
              <div className="artist-artwork artwork-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Values Section */}
      <section className="partners-section">
        <div className="container">
          <div className="partners-logos">
            <div className="partner-logo">🎨 Creative</div>
            <div className="partner-logo">🤝 Collaborative</div>
            <div className="partner-logo">🌍 Diverse</div>
            <div className="partner-logo">💡 Innovative</div>
            <div className="partner-logo">❤️ Supportive</div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="subscription-section">
        <div className="container">
          <h2 className="subscription-title">Stay Connected with Our Art Community</h2>
          <p className="subscription-subtitle">Get updates on new artworks, upcoming events, artist spotlights, and community happenings.</p>
          <div className="subscription-form">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="btn btn-gradient">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo-container">
                <img 
                  src={theme === 'dark' ? '/logos/darkmode.png' : '/logos/lightmode.png'} 
                  alt="Mimi & Wewe" 
                  className="logo-img footer-logo"
                />
              </div>
              <p className="footer-description">
                An entertainment community that thrives in making art. Bringing together artists across performing arts, visual arts, and literary arts to celebrate diverse forms of artistic expression.
              </p>
              <div className="social-icons">
                <a href="#" className="social-icon">Discord</a>
                <a href="#" className="social-icon">Twitter</a>
                <a href="#" className="social-icon">Instagram</a>
                <a href="#" className="social-icon">YouTube</a>
              </div>
              <p className="copyright">Copyright © Mimi & Wewe {new Date().getFullYear()}</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Explore</h4>
                <ul>
                  <li><a href="#gallery">Gallery</a></li>
                  <li><a href="#artists">Artists</a></li>
                  <li><a href="#events">Events</a></li>
                  <li><a href="#community">Community</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Art Forms</h4>
                <ul>
                  <li><a href="#">Performing Arts</a></li>
                  <li><a href="#">Visual Arts</a></li>
                  <li><a href="#">Literary Arts</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Join Us</a></li>
                  <li><a href="#">Collaborate</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Community</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Get Involved</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button className="search-floating-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
      </footer>
    </div>
  )
}

export default App
