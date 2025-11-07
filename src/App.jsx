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
          <button className="btn-connect">Join Community</button>
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
            <div className="footer-column footer-brand-column">
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
                  <a href="#" className="social-icon" aria-label="Discord">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="YouTube">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
                <p className="copyright">Copyright © Mimi & Wewe {new Date().getFullYear()}</p>
              </div>
            </div>
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
              <h4>Statistic</h4>
              <ul>
                <li><a href="#">Ranking</a></li>
                <li><a href="#">Activity</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resource</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Platform Status</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Theme Toggle Button - Fixed at bottom right */}
      <button 
        className="theme-toggle-fixed" 
        onClick={toggleTheme} 
        aria-label="Toggle theme"
        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      </div>
  )
}

export default App
