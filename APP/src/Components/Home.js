import { useEffect, useState } from "react";
import Card from "./Card";
import "./Styles/Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:1337/api/products?populate=*")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  },[])

  return (
    <div className="products">
      {products.map((data, i) => {
        return (
          <div key={i}>
            <Card
              data={data}
              title={data.attributes.title}
              image={data.attributes.poster.data.attributes.formats.large.url}
              price={data.attributes.price}
              discription={data.attributes.description}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
