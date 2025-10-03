import React from 'react'
import "./wholesale.css"
import optom from "../../assets/images/optom.jpg"
import macarons from "../../assets/images/macarons1.png"
import macarons2 from "../../assets/images/macarons2.png"
import cace from "../../assets/images/cake-pops.png"
import kartoshka from "../../assets/images/kartoshka1.png"
import macaroni from "../../assets/images/macaroni.png"
import oreshki from "../../assets/images/oreshki.png"
import trubochki from "../../assets/images/trubochki.png"
import documentPdf from "../../assets/katalog__.pdf"
// import trubochki from "../../assets/images/macaroni.png"


// import optom from "../../../assets/images/optom.jpg"
// import macarons from "../../../assets/images/macarons1.png"
// import macarons2 from "../../../assets/images/macarons2.png"
// import cace from "../../../assets/images/cake-pops.png"
// import kartoshka from "../../../assets/images/kartoshka1.png"
// import oreshki from "../../../assets/images/oreshki.png"
// import trubochki from "../../../assets/images/trubochki.png"
// import macaroni from "../../../assets/images/macaroni.png"

import { Link } from 'react-router-dom'
function Wholesale() {
  return (
    <div className='wholesale'>
        <div className='wholesale-all'>
            <div className='wholesale-logo'>
            </div>
      <div className="optom1">
        <div className="optom1-img">
            <img src={optom} alt="" />
        </div>
        <div className='optom-text1'>
            <h2 className='optom-logo1'>Десерты для кофейни</h2>
            <h4 className='optom-text2'>Акция! Специальные условия доставки по России.</h4>
            <Link to="" className='buttonPodreb'>Подробнее</Link>
            <p>Мы с 2013 года производим и поставляем оптом пирожные <br /> 
            для кофеен и кафе. Наши десерты продаются в <br /> 
            крупнейших кондитерских сетях Петербурга. Они яркие,<br /> 
            натуральные, позволяют делать высокую наценку, за ними <br /> 
            возвращаются покупатели.
            </p>
            <button 
            onClick={
              ()=>{
                const link = document.createElement('a');
                link.href = documentPdf;
                link.download = 'macaron_shop_catalog.pdf';
                link.click();
              }
            }
            >Скачать весь каталог</button>
        </div>
      </div>
      </div>
      <div className='wholesale-all1'>
        <div className='optom-logo2'><h3>Пирожные для вашей кофейни</h3></div> 
        <div className='optom1-pages1'>
            <div className="optom-page1">
                <img src={macarons} alt="" />
                <h3>Французкие макаронс</h3>
                <p>22 потрясающих классических и <br />
                авторских вкуса в линейке</p>
            </div>
            <div className="optom-page1">
                <img src={macarons2} alt="" />
                <h3>Эклеры</h3>
                <p> Вкусы: арахис, ваниль, карамель, малина,<br />
                смородина, фисташка, шоколад</p>
            </div>
            <div className="optom-page1">
                <img src={cace} alt="" />
                <h3>Кейк-попсы</h3>
                <p>С добавлением миндальной муки: три <br />
                цвета</p>
            </div>
            <div className="optom-page1">
                <img src={kartoshka} alt="" />
                <h3>Пирожные-картошка</h3>
                <p>С клубничной посылкой</p>
            </div>
        </div>
        <div className="optom-pages2">
          <div className='optom-page2'>
                <img src={oreshki} alt="" />
                <h3>Орешки со сгущенкой</h3>
                <p>Россыпью и индивидуальной упаковкtе</p>            
          </div>
          <div className='optom-page2'>
                <img src={trubochki} alt="" />
                <h3>Домашние трубочки</h3>
                <p>Со вареным сгущенным молоком</p>            
          </div>
          <div className='optom-page2'>
                <img src={macaroni} alt="" />
                <h3>Брендированные макарон</h3>
                <p>С Для ваших гостей, коллег и партнёров </p>            
          </div>
        </div>
        <div className="optom-product">
          <h2>Продукция от кондитерской фабрики Macaronshop — это</h2>
          <div className='optom-icons'>
       <div className='icon-optom'>
        <div>
              <img decoding="async" width="100" height="100" src="https://macaronshop.ru/wp-content/uploads/2021/06/corporate.svg" class="attachment-thumbnail size-thumbnail" alt></img>
        </div>
        <p>Привлекательный внешний вид</p>
        </div>

        <div className='icon-optom'>
        <div>
              <img decoding="async" width="100" height="100" src="https://macaronshop.ru/wp-content/uploads/2021/06/collection.svg" class="attachment-thumbnail size-thumbnail" alt></img>
        </div>
        <p>Яркие шоубоксы</p>
         </div>

         <div className='icon-optom'>
        <div>
              <img decoding="async" width="100" height="100" src="https://macaronshop.ru/wp-content/uploads/2021/06/mass.svg" class="attachment-thumbnail size-thumbnail" alt></img>
        </div>
        <p>Высокая возвращаемостьu</p>
        </div>
        <div className='icon-optom'>
         <div>
               <img decoding="async" width="100" height="100" src="https://macaronshop.ru/wp-content/uploads/2021/06/wedding.svg" class="attachment-thumbnail size-thumbnail" alt></img>
        </div>  
        <p>Натуральные ингредиенты ии широкий ассортимент вкусов</p>
        </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Wholesale
