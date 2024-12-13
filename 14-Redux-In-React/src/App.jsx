import Counter from "./components/Counter.jsx";
import Header from "./components/Header.jsx";
import Auth from "./components/Auth.jsx";
import UserProfile from "./components/UserProfile.jsx";
import { useSelector } from "react-redux";
function App() {
  const auth = useSelector((state) => state.auth.auth);

  return (
    <>
      <Header />
      {!auth && <Auth />}
      {auth && <UserProfile />}
      <Counter />;
    </>
  );
}

export default App;
