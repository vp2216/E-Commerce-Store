import Products from "./Products";
import Card from "./Card";
import "./Styles/Home.css";

function Home() {

  return (
    <div className="products">
      {Products.map((data, i) => {
        return (
          <div key={i}>
            <Card
              id={data.id}
              image={data.image}
              name={data.name}
              price={data.price}
              discription={data.discription}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
