import { lazy, Suspense } from "react";
import HomeSkeleton from "../components/HomePageSkeleton/HomeSkeleton";
import Footer from "../components/SignUpComponent/Footer";
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

function HomePage() {
  return (
    <>
      <Suspense fallback={<HomeSkeleton />}>
        <HomeHeader />
        <HomeBanner />
        <MovieTemplates />
        <Footer />
      </Suspense>
      <Movies />
    </>
  );
}

export default HomePage;
