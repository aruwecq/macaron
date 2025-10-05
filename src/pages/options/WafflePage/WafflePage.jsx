import React, { useEffect, useState } from "react";
import Card from "../../../components/card/Card"; // используем уже готовую карточку
import "./WafflePage.scss";

function WafflePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://68ae8d71b91dfcdd62b979fb.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        const waffles = data.filter((item) => item.category === "tubes");
        setProducts(waffles);
      });
  }, []);

  return (
    <div className="waffle-page">
      <h1>Вафельные трубочки</h1>

      <p className="waffle-description">
       Вафельная трубочка – это символ ностальгии, вкус которого возвращает в беззаботные времена. 
        Вкусовые ощущения начинаются с хрустящей вафельной оболочки, которая при укусе издает приятный хруст, напоминая о домашних вафлях.
        <br /><br />
        Аромат трубочек способен мгновенно вызвать в памяти картины домашнего уюта и ожидания праздника, когда из кухни доносился запах свежих вафель, и каждый мог позволить себе маленькую сладкую радость, наслаждаясь вафельной трубочкой, которая была такой желанной и вкусной.
        <br /><br />
        Этот десерт – словно путешествие в прошлое, когда каждый кусочек вафельной трубочки со сгущёнкой или шоколадной начинкой был маленьким праздником и причиной для радости.
      </p>

      <div className="products-grid">
        {products.map((product) => (
          <Card key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
}

export default WafflePage;
