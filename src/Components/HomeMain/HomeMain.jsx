import CalorieGuage from "../CalorieGuage/CalorieGuage";
import MainChart from "../MainChart/MainChart";
const HomeMain = () => {
  return (
    <main className="home-main">
      <div className="home-main-calorie home-main-card home-main-content">
        <h1 className="bold">Calorie Count</h1>
        <CalorieGuage />
      </div>

      {/* This is profile section */}
      <div className="home-main-card home-main-profile home-main-content">
        <h1 className="bold">Summary</h1>
      </div>

      {/* This is the section for macronutrients */}
      <div className="home-main-card home-main-macro">
        <h1 className="bold">Macros</h1>

        <MainChart />
      </div>

      {/* This is the food category section */}
      <div className="home-main-category home-main-content">
        <section className="home-main-card"></section>
        <section className="home-main-card"></section>
        <section className="home-main-card"></section>
        <section className="home-main-card"></section>
      </div>
    </main>
  );
};

export default HomeMain;
