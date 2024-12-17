import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyproducts = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    description: "Test",
  },
  {
    id: "p2",
    price: 12,
    title: "My second book",
    description: "Test 2",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyproducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
