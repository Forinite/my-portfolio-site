import HomePage from "./components/pages/HomePage";
import ProjectPage from "./components/pages/ProjectPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
