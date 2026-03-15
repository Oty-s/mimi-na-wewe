import { Link } from 'react-router-dom'
import '../App.css'

function Home() {
  return (
    <>
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
            <Link to="/performing-arts" className="artist-type-card">
              <div className="artist-type-icon">🎭</div>
              <h3>Performing Arts</h3>
              <p>Theatrical performances, dance, music, and live art experiences that captivate and move audiences through dynamic expression.</p>
            </Link>
            <Link to="/visual-arts" className="artist-type-card">
              <div className="artist-type-icon">🎨</div>
              <h3>Visual Arts</h3>
              <p>Painting, sculpture, photography, crochet, cartography, and all forms of visual expression that create stunning works of art.</p>
            </Link>
            <Link to="/literary-arts" className="artist-type-card">
              <div className="artist-type-icon">📚</div>
              <h3>Literary Arts</h3>
              <p>Poetry, prose, storytelling, and written works that weave words into powerful narratives and beautiful literary creations.</p>
            </Link>
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
    </>
  )
}

export default Home

