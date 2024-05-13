import Navbar from "../../components/molecules/Navbar";
import Footer from "../../components/organisms/Footer";
import Instant from "../../components/organisms/Instant";
import Intro from "../../components/organisms/Intro";
import Odogwu from "../../components/organisms/Odogwu";
import Privacy from "../../components/organisms/Privacy";
import SwapScreen from "../../components/organisms/SwapScreen";
import Auth from "./auth/Auth";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";

const Homepage = () => {
  const showAuth = useSelector(selectAuth).showAuth;

  return (
    <div className="relative flex flex-col gap-[3rem] justify-content items-center">
      <Navbar />
      {showAuth && <Auth />}
      <Intro />
      <button className="bg-gray-500 my-2 px-4 hover:scale-105">
        Check the api
      </button>
      <SwapScreen />
      <Odogwu />
      <Privacy />
      <Instant />
      <Footer />
    </div>
  );
};

export default Homepage;
