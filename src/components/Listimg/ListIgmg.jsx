import React from 'react'
import './ListIgmg.scss'
function ListIgmg() {
  return (
    <div className='listimg'>
        <h1>Мы обо всём позаботились</h1>
        <div className='cont'>
            <div className='cont1'>
                <img src="https://macaronshop.ru/wp-content/uploads/2021/06/best-ing.jpg" alt="" />
                <h3>Лучшие ингрединты</h3>
                <p>Что-то про суперкачество, лучших поваров, свежесть и т.д.</p>
            </div>
            <div className='cont1'>
                <img src="https://macaronshop.ru/wp-content/uploads/2021/06/package.jpg" alt="" />
                <h3>Упаковка</h3>
                <p>Мы разработали варианты упаковки наших десертов, чтобы они стали лучшими презентами на любом празднике!</p>
            </div>
            <div className='cont1'>
                <img src="../public/svg/listimg.svg" alt="" />
                <h3>Получение в день заказа</h3>
                <p>В день заказа доставка курьером или самовывоз</p>
            </div>
            <div className='cont1'>
                <img src="https://macaronshop.ru/wp-content/uploads/2021/06/anonym-gift.jpg" alt="" />
                <h3>Анонимная доставка</h3>
                <p>Можем преподнести Ваш заказ как анонимный подарок. А вы проверьте — догадается ли получатель, от кого презент?</p>
            </div>
        </div>
    </div>
  )
}

export default ListIgmg
