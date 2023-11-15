import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GoogleLogin from "./pages/auth/GoogleLogin";
import History from "./pages/History";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/login" element={<GoogleLogin />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default App;
