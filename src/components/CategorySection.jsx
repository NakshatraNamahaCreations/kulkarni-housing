import pic1 from '../assets/section/pic2.jpg'
import pic2 from '../assets/section/pic1.jpg'
import pic3 from '../assets/section/pic.avif'
import pic4 from '../assets/section/pic3.jpg'
import icon1 from '../assets/svg_icons/icon-1.svg'
import icon2 from '../assets/svg_icons/icon-2.svg'
import icon3 from '../assets/svg_icons/icon-3.svg'
import icon4 from '../assets/svg_icons/icon-4.svg'
import './CategorySection.css'

function CategorySection() {
  const categories = [
    {
      image: pic1,
      icon: icon1,
      title: 'Education'
    },
    {
      image: pic2,
      icon: icon2,
      title: 'Commercial'
    },
    {
      image: pic3,
      icon: icon3,
      title: 'Residential'
    },
    {
      image: pic4,
      icon: icon4,
      title: 'Industrial'
    }
  ]

  return (
    <section className="category-section">
      <div className="container">
        <div className="row">
          {categories.map((category, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-auto">
              <div className="cate-block--style">
                <div className="cate-block__img">
                  <img src={category.image} alt={category.title} />
                  <div className="cate-block__icon">
                    <img src={category.icon} alt={`${category.title} icon`} />
                  </div>
                </div>
                <h3 className="cate-block__title">
                  <a href="#">{category.title}</a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection




























