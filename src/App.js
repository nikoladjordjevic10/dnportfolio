import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./containers/HomePage/HomePage";
// import WorkPage from "./containers/WorkPage/WorkPage";
import InfoPage from "./containers/InfoPage/InfoPage";
import ContactPage from "./containers/ContactPage/ContactPage";
import WorkLogoPage from "./containers/WorkLogoPage/WorkLogoPage";
// import WorkBrandingPage from "./containers/WorkBrandingPage/WorkBrandingPage";
import GetInTouchPage from "./containers/GetInTouch/GetInTouch";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NotificationContainer />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* <Route path="/work" element={<WorkPage />}></Route> */}
          <Route path="/info" element={<InfoPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/work-logo" element={<WorkLogoPage />}></Route>
          {/* <Route path="/work-branding" element={<WorkBrandingPage />}></Route> */}
          <Route path="/get-in-touch" element={<GetInTouchPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
