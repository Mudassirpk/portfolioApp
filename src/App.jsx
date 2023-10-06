import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main.jsx";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails.jsx";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blogpost/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
