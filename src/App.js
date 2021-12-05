import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import WorkPage from "./containers/WorkPage/WorkPage";
import InfoPage from "./containers/InfoPage/InfoPage";
import ContactPage from "./containers/ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/work" element={<WorkPage />}></Route>
          <Route path="/info" element={<InfoPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
