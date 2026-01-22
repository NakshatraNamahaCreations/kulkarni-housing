import bg2 from '../assets/home_images/bg-2.jpg'
import latest11 from '../assets/blogs/pic2.jpg'
import pic2 from '../assets/latest/latest11.jpeg'

import './BlogSection.css'

const blogPosts = [
  {
    image: bg2,
    title: 'Luxury Residential Projects',
    date: '15 SEP 2024',
    isLarge: false
  },
  {
    image: latest11,
    title: 'Sustainable Construction Methods',
    date: '20 SEP 2024',
    isLarge: false
  },
  {
    image: pic2,
    title: 'Small & Minimal House on Patterns on Hill',
    date: '25 SEP 2024',
    description: 'Discover our latest project featuring a beautifully designed minimal house that harmonizes with the natural landscape. This project showcases our commitment to creating homes that blend modern aesthetics with environmental consciousness.',
    isLarge: true
  }
]

function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-background">
        <div className="container1">
          <div className="blog-header">
            <h2 className="blog-title text-uppercase">Latest Blog</h2>
            <div className="wt-separator-outer">
              <div className="wt-separator bg-black"></div>
            </div>
            <p className="blog-description-text">
              Stay updated with our latest construction insights, design trends, and project showcases. Discover expert tips and industry news to help you make informed decisions for your building projects.
            </p>
          </div>

          <div className="blog-content">
            <div className="blog-left">
              {blogPosts.slice(0, 2).map((post, index) => (
                <div key={index} className="blog-card-small m-b30">
                  <div className="latest-blog-dark-outer blog-image-wrapper bg-no-repeat bg-cover overlay-wraper">
                    <img src={post.image} alt={post.title} />
                    <div className="latest-blog-dark p-a20">
                      <div className="blog-date-tag-left">
                        <span>{post.date}</span>
                      </div>
                      <div className="blog-text-content">
                        <h3 className="blog-card-title text-white text-uppercase">{post.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="blog-right">
              <div className="blog-card-large">
                <div className="latest-blog-dark-outer2 blog-image-wrapper bg-no-repeat bg-cover overlay-wraper">
                  <img src={blogPosts[2].image} alt={blogPosts[2].title} />
                  <div className="blog-overlay-large"></div>
                </div>
                <div className="latest-blog-square square text-white">
                  <h2 className="m-t0 m-b10">
                    <span className="text-white font-30 text-uppercase">{blogPosts[2].title}</span>
                  </h2>
                  <p className="font-weight-300">{blogPosts[2].description}</p>
                  <a href="#blog" className="letter-spacing-4 font-12 text-white text-uppercase">Read More</a>
                  <div className="v-date text-white font-weight-700 text-uppercase">{blogPosts[2].date}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection

