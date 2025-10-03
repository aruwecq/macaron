import React, { useEffect } from 'react';
import './ListIgmg.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ListIgmg() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' });
  }, []);

  return (
    <div className='listimg'>
      <h1 data-aos="fade-up">Мы обо всём позаботились</h1>
      <div className='cont'>
        {[
          {
            img: "https://macaronshop.ru/wp-content/uploads/2021/06/best-ing.jpg",
            title: "Лучшие ингрединты",
            text: "Что-то про суперкачество, лучших поваров, свежесть и т.д."
          },
          {
            img: "https://macaronshop.ru/wp-content/uploads/2021/06/package.jpg",
            title: "Упаковка",
            text: "Мы разработали варианты упаковки наших десертов, чтобы они стали лучшими презентами на любом празднике!"
          },
          {
            img: "../public/svg/listimg.svg",
            title: "Получение в день заказа",
            text: "В день заказа доставка курьером или самовывоз"
          },
          {
            img: "https://macaronshop.ru/wp-content/uploads/2021/06/anonym-gift.jpg",
            title: "Анонимная доставка",
            text: "Можем преподнести Ваш заказ как анонимный подарок. А вы проверьте — догадается ли получатель, от кого презент?"
          }
        ].map((item, index) => (
          <div
            key={index}
            className='cont1'
            data-aos="fade-up"
            data-aos-delay={index * 150} // задержка по очереди
          >
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListIgmg;
