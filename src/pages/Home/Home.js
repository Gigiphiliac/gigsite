import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import banner from "../../assets/double-me.jpg";

function Home() {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="home-content-container">
        <div className="home-profile-banner">
          <img
            src={banner}
            alt="Banner with two of me"
            className="banner-image"
          />
        </div>
        <h1>About Me</h1>
        <p>
          Hi! 👋 My name is Clayton, I'm a recent graduate of Bachelor of
          Information Technology at RMIT.
        </p>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
