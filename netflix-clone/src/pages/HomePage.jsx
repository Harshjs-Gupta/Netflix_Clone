import { lazy, Suspense } from "react";
// import HomeBanner from "../components/HomePageComponent/HomeBanner";
// import HomeHeader from "../components/HomePageComponent/HomeHeader";
// import MovieTemplates from "../components/HomePageComponent/MovieTemplates";
import HomeSkeleton from "../components/HomePageSkeleton/HomeSkeleton";
import Footer from "../components/SignUpComponent/Footer";
// import SearchedMovieList from "../components/SearchMovieData/SearchedMovieList";
import Movies from "../components/SearchMovieData/Movies";

const HomeHeader = lazy(() =>
  import("../components/HomePageComponent/HomeHeader")
);
const HomeBanner = lazy(() =>
  import("../components/HomePageComponent/HomeBanner")
);
const MovieTemplates = lazy(() =>
  import("../components/HomePageComponent/MovieTemplates")
);

function HomePage({ handleLogOut }) {
  return (
    <>
      <Suspense fallback={<HomeSkeleton />}>
        <HomeHeader handleLogOut={handleLogOut} />
        <HomeBanner />
        <MovieTemplates />
        <Footer />
      </Suspense>
      <Movies />
    </>
  );
}

export default HomePage;
