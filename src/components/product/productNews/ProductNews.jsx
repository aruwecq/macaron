import React, { useEffect, useState } from 'react'
import './productNews.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
import News from './News'

function ProductNews() {
  const [productsNews, setProductsNews] = useState([])

  useEffect(() => {
    axios.get('https://68ae8d71b91dfcdd62b979fb.mockapi.io/products')
      .then((res) => {
        setProductsNews(res.data)
      })
      .catch((err) => {
        console.error("Ошибка при загрузке продуктов:", err)
      })
  }, [])
  console.log(productsNews);
  

  return (
    <div className="product-news">
      <div className='hh1'>  <h1>Новости</h1></div>
      <div className='list'>
      {productsNews.slice(0, 3).map((item) => (   
        <div key={item.id} className="product-card">
          <div className="product-image">
            <img src={item.mainImage || (item.images && item.images[0]) || "https://via.placeholder.com/370x250?text=Нет+фото"} alt={item.title} />
          </div>

          <div className="product-content">
            <h3 className="product-title">{item.title}</h3>
            <p className="product-desc">{item.description}</p>
            <span>{item.descriptionLong}</span>
          </div>
        </div>
      ))}
      <Link style={{background:"aqua", textDecoration:"none", width:"250px",
        height:"50px" , textAlign:"center" , padding:"15px"
      }} to="/news">Все Новости</Link>
      </div>
    </div>
  )
}

export default ProductNews
