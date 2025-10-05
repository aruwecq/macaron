import React, { useEffect, useState } from "react";
import Card from "../../../components/card/Card"; // используем готовую карточку
import "./ComboPage.scss";

function ComboPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://68ae8d71b91dfcdd62b979fb.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        const combos = data.filter((item) => item.category === "combosWedding");
        setProducts(combos);
      });
  }, []);

  return (
    <div className="combo-page">
      <h1>Комбо-наборы</h1>

      <p className="combo-description">
        Наши комбо-наборы – это идеальный подарок для любых праздников и событий. 
        В каждом наборе собраны макароны, эклеры и вафельные трубочки, чтобы каждый мог насладиться разнообразием вкусов.
        <br /><br />
        Эти наборы идеально подходят для свадеб, корпоративных мероприятий или семейных торжеств. 
        Они сочетают в себе эстетику, вкус и качество, создавая незабываемое впечатление для ваших гостей.
      </p>

      <div className="products-grid">
        {products.map((product) => (
          <Card key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
}

export default ComboPage;
