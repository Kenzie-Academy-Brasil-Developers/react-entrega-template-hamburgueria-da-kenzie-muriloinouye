import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ListProducts } from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error) => console.log(error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim())
  );

  function inputFilter(text) {
    setFilter(text);
  }

  function addCart(obj) {
    setCurrentSale([...currentSale, obj]);
  }

  console.log(products, currentSale);

  return (
    <div className="App">
      <header className="App-header">
        <Header inputFilter={inputFilter} filter={filter} />
        <ListProducts
          filteredProducts={filteredProducts}
          filter={filter}
          setFilter={setFilter}
          addCart={addCart}
          currentSale={currentSale}
        />
      </header>
    </div>
  );
}

export default App;
