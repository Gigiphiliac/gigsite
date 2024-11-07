import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProjectsHome from "./pages/ProjectsHome/ProjectsHome";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={<Home />}
        />
        
        {/* ProjectsHome route */}
        <Route
          path="/projects"
          element={<ProjectsHome />}
        />

        {/* All other undefined paths */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Router>
  );
}

export default App;
