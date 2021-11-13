import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
