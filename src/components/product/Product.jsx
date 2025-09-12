import React, { useEffect, useState } from 'react'
import './product.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Product() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://68ae8d71b91dfcdd62b979fb.mockapi.io/products')
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.error("Ошибка при загрузке продуктов:", err)
      })
  }, [])

  return (
    <div className="product-list">
      {products.slice(0, 6).map((item) => (   // <-- ограничиваем до 6
        <div key={item.id} className="product-card">
          <div className="product-image">
            <img src={item.mainImage || (item.images && item.images[0]) || "https://via.placeholder.com/370x250?text=Нет+фото"} alt={item.title} />
          </div>

          <div className="product-content">
            <h3 className="product-title">{item.title}</h3>
            <p className="product-desc">{item.description}</p>
            <span>{item.descriptionShort}</span>
          </div>

          <div className="product-footer">
            <span className="product-price">{item.price} сом</span>
            <button className="product-btn">
              <Link to="/" className="icon">🛒</Link> В корзину
            </button>
          </div>
        </div>
      ))}
      <Link style={{background:"aqua", textDecoration:"none", width:"250px",
        height:"50px" , textAlign:"center" , padding:"15px"
      }} to="/ko">Все праздничные наборы</Link>
    </div>
  )
}

export default Product
