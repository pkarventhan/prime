// custom imports
import LatestVideo from './LatestVideo/LatestVideo';
import LifeCycleDemo from './LifeCycleDemo/LifeCycleDemo';
import MyProfile from './MyProfile/MyProfile';
import RecommendedVideoList from './RecommendedVideoList/RecommendedVideoList';
import Subscription from './Subscription/Subscription';
import TrendingVideoList from './TrendingVideoList/TrendingVideoList';
import Title from './../../components/Title/Title';

const HomePage = () => {
  return (
    <div>
      <Title title="Prime Video" />

      <div className="row px-5 pb-5">
        <h1>Welcome to Home Page</h1>
        <h2>Latest Videos | Fn Comp and Props Demo</h2>
        <div className="col-md-6">
          <LatestVideo
            title="Fra vs Arg FIFA 2022 Final"
            thumbnailUrl="https://placehold.co/260x220"
            views="2.4M"
            publishedDate="10 Days ago"
          >
            Watch highlights of Arg vs Fra FIFA 2022 Final, Qatar
          </LatestVideo>
        </div>

        <div className="col-md-6">
          <LatestVideo
            title="CSK vs KKR 2023 IPL"
            thumbnailUrl="https://placehold.co/260x220"
            views="1.6M"
            publishedDate="1 Day ago"
          >
            Watch highlights of CSK vs KKR 2023 IPL
          </LatestVideo>
        </div>
      </div>

      <div className="row bg-white p-5">
        <h2>Trending Videos | Class Comp, States and Events Demo</h2>
        <TrendingVideoList />
      </div>

      <div className="row p-5">
        <h2>
          Recommended Video List | States, Events, Lists and Keys, Conditionals
          Demo
        </h2>
        <RecommendedVideoList />
      </div>

      <div className="row bg-white p-5">
        <h2>Subscription | Styling in React JS - Demo</h2>
        <Subscription />
      </div>

      <div className="row p-5">
        <h2>Life Cycle Hooks | Demo</h2>
        <LifeCycleDemo />
      </div>

      <div className="row bg-white p-5">
        <h2>My Profile | Two Way Binding Demo</h2>
        <MyProfile />
      </div>
    </div>
  );
};

export default HomePage;
