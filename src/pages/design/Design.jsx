import React from 'react'
import "./Design.css"
import macaron3 from "../../assets/images/macarons3.png"
import macaron4 from "../../assets/images/macarons4.png"
import macaron5 from "../../assets/images/macarons5.jpg"
import macaron6 from "../../assets/images/macarons6.png"
import more from "../../assets/images/more.png"
import bezimeni from "../../assets/images/bezimeni.png"
import { Link } from 'react-router-dom'

function Design() {
  return (
    <div className='design'>
      <div className="design-all">
        <div className='wholesale-logo'>
      <span> <Link to="">Главная страница</Link> Печенье с логотипом на заказ </span>
             <h2>Выберите количество</h2>
        </div>
        <div className='design1'>
                <div className="page-design1">
                    <img src={macaron3} alt="" />
                    <p>Набор десертов
                    <h4>3890 руб</h4>
                    </p>
                </div> <div className="page-design1">
                    <img src={macaron4} alt="" />
                    <p>Набор Сердце из 22 макаронс
                    <h4>2500 руб</h4>
                    </p>
                </div>
                 <div className="page-design1">
                    <img src={macaron5} alt="" />
                    <p>Набор из 40 макаронс
                    <h4>4900 руб</h4>
                    </p>
                </div> 
                <div className="page-design1">
                    <img src={macaron6} alt="" />
                    <p>Набор из 60 макаронс
                    <h4>5900 руб</h4>
                    </p>
                </div>
        </div>
        <div className='design1'>
          <div className="page-design2">
                    <img src={more} alt="" />
                    <p>Набор из 9 макаронс
                    <h4>890 руб</h4>
                    </p>
                </div> 
                <div className="page-design2">
                    <img src={bezimeni} alt="" />
                    <p>Набор из 12 макаронc
                    <h4>1290 руб</h4>
                    </p>
                </div>
        </div>
        {/* ушул жерге жазып беер */}


{/* ушул жерге жазып беер */}
<div className="design-info">
  <h2>Хотите удивить и порадовать? Закажите печенье с логотипом в Macaronshop!</h2>
  <p>
    Вкусное угощение, которое не только тает во рту, но и является оригинальным сувениром – 
    это печенье с логотипом от Macaronshop! Мы предлагаем печать на знаменитых французских 
    макарунах, превращая их в сладкое произведение искусства, которое не оставит равнодушным 
    ни одного гурмана.
  </p>

  <h3>Почему стоит выбрать печенье с логотипом?</h3>
  <ul>
    <li><strong>Необычный и запоминающийся подарок:</strong></li>
    <ul>
      <li><strong>Для частных покупателей:</strong> Порадуйте близких, друзей или коллег вкусным и оригинальным подарком на день рождения, свадьбу, новоселье или любой другой праздник.</li>
      <li><strong>Для b2b покупателей:</strong> Закажите печенье с логотипом вашей компании для рекламных акций, презентаций и корпоративных мероприятий.</li>
    </ul>
    <li><strong>Универсальность:</strong> печать наносится на любое печенье макарун.</li>
    <li><strong>Простота заказа:</strong> выберите количество макарун (от 9 до 70 штук), загрузите логотип, укажите вкус и цвет.</li>
  </ul>

  <h3>Как сделать заказ:</h3>
  <ol>
    <li>Выберите макет с необходимым количеством макарон</li>
    <li>Загрузите логотип или макет</li>
    <li>Выберите желаемый вкус и цвет</li>
    <li>Добавьте товар в корзину и оформите заказ</li>
  </ol>

  <h3>Примеры использования печенья с логотипом:</h3>
  <ul>
    <li>В качестве комплимента клиентам</li>
    <li>Для проведения рекламных акций</li>
    <li>В качестве подарков для сотрудников</li>
  </ul>
</div>


      </div>
    </div>
  )
}

export default Design
