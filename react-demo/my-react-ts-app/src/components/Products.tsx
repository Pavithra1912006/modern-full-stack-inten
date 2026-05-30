import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          {/* <img src={product.thumbnail} width="100" /> */}
          
          <h3>{product.title}</h3>

          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;