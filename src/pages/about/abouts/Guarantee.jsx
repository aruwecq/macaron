import React from "react";
import "../styles/Guarantee.scss";
import { Link } from "react-router-dom";
function Guarantee() {
  return (
    <div className="garantia">
      <div className="link-g">
        <Link to="/">Главная страница</Link> »<p>Гарантии вкуса и качества</p>
      </div>
      <div className="g-title">
        <h2>Гарантии</h2>
        <span>
          При изготовлении пирожных макаронс и других десертов мы используем
          только натуральные ингредиенты и красители, готовя наши изделия по
          оригинальной рецептуре лучших мировых кондитеров. Мы печём заказы в
          день отгрузки, поэтому вы всегда можете быть уверены в их свежести. Мы
          не используем консерванты, разрыхлители или усилители вкуса.
        </span>
      </div>
      <div className="cont">
        <div className="cont1">
          <img
            src="https://macaronshop.ru/wp-content/uploads/2021/06/almond.jpg"
            alt=""
          />
          <h3>
            100% <br />
            миндальная мука
          </h3>
        </div>
        <div className="cont1">
          <img
            src="https://macaronshop.ru/wp-content/uploads/2021/06/food-color.jpg"
            alt=""
          />
          <h3>
            100% <br />
            натуральные красители
          </h3>
        </div>
        <div className="cont1">
          <img src="https://macaronshop.ru/wp-content/uploads/2021/06/fruits.jpg" alt="" />
          <h3>
            100% <br />
            натуральные ингредиенты
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Guarantee;
