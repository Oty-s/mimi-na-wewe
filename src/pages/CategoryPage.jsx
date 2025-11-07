import '../App.css'

function CategoryPage({ category, title, description, icon }) {
  // Sample artwork data - in a real app, this would come from an API
  const artworks = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `${category} Work ${i + 1}`,
    artist: `Artist ${i + 1}`,
    date: `March ${15 + i}, 2024`,
    tags: ['#art', '#creative', '#community']
  }))

  return (
    <div className="category-page">
      <div className="category-header">
        <div className="container">
          <div className="category-header-content">
            <div className="category-icon-large">{icon}</div>
            <div>
              <h1 className="category-title">{title}</h1>
              <p className="category-description">{description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="category-content">
        <div className="container">
          <div className="artwork-grid">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="artwork-post">
                <div className="post-header">
                  <div className="post-nav">
                    <span>Inicio</span>
                    <span>Design</span>
                    <span>Portfolio</span>
                  </div>
                  <div className="post-platform-icon">📱</div>
                </div>
                <div className="post-image">
                  <div className="post-image-placeholder">
                    <div className="post-image-content">
                      <div className="post-image-figure"></div>
                    </div>
                  </div>
                </div>
                <div className="post-content">
                  <div className="post-title">{artwork.title}</div>
                  <div className="post-meta">
                    <span className="post-artist">@{artwork.artist.toLowerCase().replace(' ', '')}</span>
                    <span className="post-date">{artwork.date}</span>
                  </div>
                  <div className="post-tags">
                    {artwork.tags.map((tag, idx) => (
                      <span key={idx} className="post-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="post-footer">
                  <div className="post-actions">
                    <span>❤️</span>
                    <span>💬</span>
                    <span>📤</span>
                    <span>🔖</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage

