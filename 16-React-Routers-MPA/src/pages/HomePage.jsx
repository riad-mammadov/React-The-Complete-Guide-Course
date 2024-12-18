import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/");
  }
  return (
    <>
      <h1>My home page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
    </>
  );
}
