import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";

function Home() {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="home-content-container">
        <p>Main content</p>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
