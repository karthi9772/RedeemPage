import RewardsDashboard from "./RewardsDashboard";
// import Header from "./Header";
import Footer from "./Footer";
import logo from "./images/logo_design.altruisty 5.png";

const App = () => {
  return (
    <div>
      {/* Header */}
      <div className="w-full bg-white h-[110px] m-0 p-0">
        <img src={logo} className=" scale-75 m-0 p-0" alt="" />
      </div>

      <div className="">
        <RewardsDashboard />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
