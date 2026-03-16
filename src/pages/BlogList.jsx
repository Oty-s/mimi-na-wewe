import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import '../App.css'

const blogPosts = [
  {
    slug: 'kenya-protecting-forests-drone-tech',
    image: '/images/logo-1.png',
    title: 'Kenya is protecting its forests and riparian lands using modern drone technology',
    category: 'Environment',
    featured: true,
    author: 'Wakio Mwangi',
    date: 'Jan 29, 2025',
    readTime: '6 min read',
    likes: 23,
    excerpt: 'The Kenyan ministry of forestry partnered with OnaGanic, an IoT firm that specializes in aerial mapping using drone technology, to map out public forests and protect gazetted riparian lands from encroachment.',
  },
  {
    slug: 'future-virtual-reality-education',
    image: '/images/logo-2.png',
    title: 'The Future of Virtual Reality in Education',
    category: 'Innovation',
    featured: true,
    author: 'Ken Wyne',
    date: 'Jan 28, 2025',
    readTime: '5 min read',
    likes: 18,
    excerpt: 'VR is already in education and still in its early stages. It holds immense promise to transform how students experience lessons—from exploration and collaboration to creation.',
  },
  {
    slug: 'hamburger-menu-debate',
    image: '/images/logo-1.png',
    title: 'Is the hamburger menu a burger? A burger?',
    category: 'UX Design',
    featured: false,
    author: 'Irene W.',
    date: 'Jan 27, 2025',
    readTime: '4 min read',
    likes: 12,
    excerpt: 'A quick dive into navigation patterns, user expectations, and when the classic menu icon still works.',
  },
  {
    slug: 'apple-vision-pro-take',
    image: '/images/logo-2.png',
    title: 'The Apple Vision Pro is not like anything you have experienced',
    category: 'Product',
    featured: false,
    author: 'Nduta Wanjira',
    date: 'Jan 26, 2025',
    readTime: '7 min read',
    likes: 30,
    excerpt: 'Exploring the potential of virtual reality hardware in creative industries.',
  },
  {
    slug: 'software-engineer-role-ai',
    image: '/images/logo-1.png',
    title: 'How the role of a Software Engineer is changing with capable AI',
    category: 'Career',
    featured: false,
    author: 'Chris O.',
    date: 'Jan 25, 2025',
    readTime: '8 min read',
    likes: 41,
    excerpt: 'Generative AI is becoming increasingly indispensable. How will engineering teams adapt?',
  },
  {
    slug: 'creative-collabs-2025',
    image: '/images/logo-2.png',
    title: 'Creative collaborations to watch in 2025',
    category: 'Community',
    featured: false,
    author: 'Wakio Mwangi',
    date: 'Feb 01, 2025',
    readTime: '6 min read',
    likes: 19,
    excerpt: 'A roundup of multidisciplinary projects bringing artists together across mediums.',
  },
  {
    slug: 'art-of-storytelling',
    image: '/images/logo-1.png',
    title: 'The art of storytelling for live audiences',
    category: 'Performing Arts',
    featured: false,
    author: 'Irene W.',
    date: 'Feb 03, 2025',
    readTime: '5 min read',
    likes: 22,
    excerpt: 'Practical tips on pacing, voice, and audience connection from seasoned performers.',
  },
  {
    slug: 'visual-arts-trends',
    image: '/images/logo-2.png',
    title: 'Visual arts trends redefining gallery walls',
    category: 'Visual Arts',
    featured: false,
    author: 'Ken Wyne',
    date: 'Feb 05, 2025',
    readTime: '7 min read',
    likes: 27,
    excerpt: 'From mixed reality canvases to eco-friendly pigments, what curators are eyeing next.',
  },
  {
    slug: 'poetry-night-highlights',
    image: '/images/logo-1.png',
    title: 'Highlights from the latest poetry night',
    category: 'Literary Arts',
    featured: false,
    author: 'Nduta Wanjira',
    date: 'Feb 07, 2025',
    readTime: '4 min read',
    likes: 31,
    excerpt: 'Standout verses, emerging voices, and the themes resonating with our community.',
  },
  {
    slug: 'behind-the-scenes-studio',
    image: '/images/logo-2.png',
    title: 'Behind the scenes: inside an artist’s studio',
    category: 'Insight',
    featured: false,
    author: 'Ben Ngui',
    date: 'Feb 09, 2025',
    readTime: '6 min read',
    likes: 24,
    excerpt: 'A day-in-the-life look at process, ritual, and the tools artists swear by.',
  },
  {
    slug: 'funding-opportunities-arts',
    image: '/images/logo-1.png',
    title: 'Funding opportunities for emerging artists',
    category: 'Career',
    featured: false,
    author: 'Chris O.',
    date: 'Feb 11, 2025',
    readTime: '5 min read',
    likes: 28,
    excerpt: 'Grants, residencies, and open calls to help you scale your next project.',
  },
  {
    slug: 'designing-immersive-events',
    image: '/images/logo-2.png',
    title: 'Designing immersive events that captivate',
    category: 'Events',
    featured: false,
    author: 'Mimi & Wewe',
    date: 'Feb 13, 2025',
    readTime: '6 min read',
    likes: 26,
    excerpt: 'Lighting, staging, and sensory cues to craft memorable hybrid experiences.',
  },
]

function BlogList() {
  const [activeTag, setActiveTag] = useState('All')

  const tags = useMemo(() => ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))], [])

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts
    .filter((post) => !post.featured)
    .filter((post) => (activeTag === 'All' ? true : post.category === activeTag))
    .slice(0, 12)

  return (
    <div className="blog-list-page">
      <div className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <div>
              <p className="badge badge-outline">Blogs</p>
              <h1 className="blog-hero-title">Latest stories from the community</h1>
              <p className="blog-hero-subtitle">
                Stay in the loop with news on art, technology, and events across the Mimi & Wewe community.
              </p>
              <div className="blog-search">
                <input type="text" placeholder="Search blog posts" aria-label="Search blogs" />
                <button className="btn btn-gradient">Search</button>
              </div>
            </div>
            <div className="blog-hero-visual">
              <div className="blog-hero-card">
                <div className="blog-hero-badge">Featured</div>
                <h3>How the role of a Software Engineer is changing with AI</h3>
                <p>Generative AI is changing how we plan, code, and deliver products.</p>
                <div className="blog-hero-meta">
                  <span>Chris O.</span>
                  <span>Jan 25, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="blog-featured-row">
          <div className="section-header-left">
            <h2 className="section-title">Featured</h2>
            <p className="section-description">Handpicked stories and highlights from our writers.</p>
          </div>
          <div className="featured-grid">
            {featuredPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card featured">
                <div className="blog-card-image featured-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-top">
                    <span className="badge badge-solid">{post.category}</span>
                    <span className="meta">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p className="excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="author">
                      <div className="avatar-small"></div>
                      <div className="author-meta">
                        <span className="author-name">{post.author}</span>
                        <span className="meta">{post.date}</span>
                      </div>
                    </div>
                    <div className="likes">❤️ {post.likes}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="blog-recent">
          <div className="section-header-left">
            <h2 className="section-title">Recent blog posts</h2>
            <div className="pill-row">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`pill ${activeTag === tag ? 'active' : ''}`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="blog-grid">
            {recentPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-body">
                  <span className="badge badge-solid">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p className="excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="author">
                      <div className="avatar-small"></div>
                      <div className="author-meta">
                        <span className="author-name">{post.author}</span>
                        <span className="meta">{post.date}</span>
                      </div>
                    </div>
                    <div className="meta">{post.readTime}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default BlogList
