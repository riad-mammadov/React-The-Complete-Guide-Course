import { Link } from "react-router-dom";

const Dummy_DB = [
  {
    id: 1,
    title: "Product 1",
  },
  {
    id: 2,
    title: "Product 2",
  },
  {
    id: 2,
    title: "Product 2",
  },
];

export default function ProductsPage() {
  return (
    <>
      <h1>The products page</h1>
      <ul>
        {Dummy_DB.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
