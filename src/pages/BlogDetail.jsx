import { useParams, Link } from 'react-router-dom'
import '../App.css'

const blogPosts = [
  {
    slug: 'kenya-protecting-forests-drone-tech',
    image: '/images/logo-1.png',
    title: 'Kenya is protecting its forests and riparian lands using modern drone technology',
    subtitle: 'The Kenyan ministry of forestry partnered with OnaGanic, an IoT firm that specializes in aerial mapping using drone technology, to map out public forests and protect gazetted riparian lands from encroachment.',
    author: 'Wakio Mwangi',
    date: 'Jan 29, 2025',
    readTime: '6 min read',
    likes: 23,
    body: [
      'Traditionally, drone mapping has provided clarity not only for evaluation missions involving logging areas and damaged zones. It has also enabled management teams to assess the impact of climate change quickly, execute more precise reforestation plans, and coordinate resources to ensure effective recovery for the affected areas.',
      'OnaGanic has also leveraged drones to map out grazing zones, topographical data, and flood-prone regions to support adjacent communities. With a single flight, the mapping drones create orthomosaic imagery that is stitched together for immediate analysis.',
      'Looking forward, the ministry expects to deploy similar solutions in other regions while collaborating with local universities and conservation groups to build capacity in drone operations and data analysis.',
    ],
  },
  {
    slug: 'future-virtual-reality-education',
    image: '/images/logo-2.png',
    title: 'The Future of Virtual Reality in Education',
    subtitle: 'VR is already in education and still in its early stages. It holds immense promise to transform how students experience lessons.',
    author: 'Ken Wyne',
    date: 'Jan 28, 2025',
    readTime: '5 min read',
    likes: 18,
    body: [
      'VR opens new doors for interactive, spatial learning that was previously out of reach for many schools.',
      'From virtual field trips to collaborative labs, immersive learning helps learners retain information through experience.',
    ],
  },
  {
    slug: 'apple-vision-pro-take',
    image: '/images/logo-1.png',
    title: 'The Apple Vision Pro is not like anything you have experienced',
    subtitle: 'Exploring the potential of virtual reality hardware in creative industries.',
    author: 'Nduta Wanjira',
    date: 'Jan 26, 2025',
    readTime: '7 min read',
    likes: 30,
    body: [
      'The device blends spatial computing with high-fidelity visuals, opening opportunities for creators.',
      'Studios are experimenting with new storytelling and design workflows built around spatial canvases.',
    ],
  },
]

function BlogDetail() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0]
  const related = blogPosts.filter((p) => p.slug !== post.slug)

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-hero">
        <div className="container">
          <p className="badge badge-outline">{post.category || 'Featured'}</p>
          <h1 className="blog-detail-title">{post.title}</h1>
          <p className="blog-detail-subtitle">{post.subtitle}</p>
          <div className="blog-detail-image">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-detail-meta">
            <div className="author">
              <div className="avatar-small"></div>
              <div className="author-meta">
                <span className="author-name">{post.author}</span>
                <span className="meta">{post.date}</span>
              </div>
            </div>
            <div className="meta">{post.readTime}</div>
            <div className="likes">❤️ {post.likes}</div>
          </div>
          <div className="blog-detail-actions">
            <div className="share-row">
              <span>Share</span>
              <button className="pill">Twitter</button>
              <button className="pill">LinkedIn</button>
              <button className="pill">Copy link</button>
            </div>
            <div className="cta-card">
              <div>
                <h4>Join the community</h4>
                <p>Get early access to events, workshops, and more.</p>
              </div>
              <button className="btn btn-gradient">Join Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <article className="blog-body">
          {post.body?.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </article>

        <div className="inline-ad">
          <p className="ad-label">Sponsored</p>
          <h4>Is the hamburger menu a burger? A burger?</h4>
          <p>Quick thoughts on navigation patterns and modern UX.</p>
          <button className="pill">Learn more</button>
        </div>

        <section className="related-posts">
          <div className="section-header-left">
            <h2 className="section-title">You might like these</h2>
          </div>
          <div className="blog-grid">
            {related.map((item) => (
              <Link key={item.slug} to={`/blog/${item.slug}`} className="blog-card">
                <div className="blog-card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="blog-card-body">
                  <span className="badge badge-solid">{item.category || 'Insight'}</span>
                  <h3>{item.title}</h3>
                  <p className="excerpt">{item.subtitle}</p>
                  <div className="blog-card-footer">
                    <div className="author">
                      <div className="avatar-small"></div>
                      <div className="author-meta">
                        <span className="author-name">{item.author}</span>
                        <span className="meta">{item.date}</span>
                      </div>
                    </div>
                    <div className="meta">{item.readTime}</div>
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

export default BlogDetail
