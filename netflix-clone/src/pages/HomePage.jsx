import HomeBanner from "../components/HomePageComponent/HomeBanner";
import HomeHeader from "../components/HomePageComponent/HomeHeader";

function HomePage({ handleLogOut }) {
  return (
    <div>
      <HomeHeader handleLogOut={handleLogOut} />
      <HomeBanner />
    </div>
  );
}

export default HomePage;
