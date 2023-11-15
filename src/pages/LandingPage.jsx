import Hero from "../components/Hero";
import Body from "../components/Body";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { Navigate } from "react-router-dom";

function LandingPage() {
  const { isAuth } = useGetUserInfo();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>

        <div className="app">
          <Hero buttonName="History" buttonLink="history" />
          <Body />
        </div>
      </main>
    </>
  );
}

export default LandingPage;
