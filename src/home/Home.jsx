import Banner from "../components/banner/Banner";
import "./Home.css";
import Membership from "../components/membership/Membership";
import Programs from "../components/programs/Programs";
import Reviews from "../components/reviews/Reviews";
import Contact from "../components/contact/Contact";
import Community from "../components/community/Community";

const Home = () => {
  return (
    <>
      <Banner />
      <marquee behavior="scroll" direction="left">
        <span className="mar-item">BEGINNERS FRIENDLY</span>
        <span className="mar-item">AVAILABLE TARINERS</span>
        <span className="mar-item">ALL NEW MACHINES</span>
        <span className="mar-item">FULL AC</span>
      </marquee>
      <Programs />
      <Membership />
      <Reviews />
      <Community />
      <Contact />
    </>
  );
};

export default Home;
