const CalorieGuage = () => {
  return (
    <div className="guage">
      <div className="guage-container">
        <div className="guage-fill"></div>
        <div className="gauge-cover"></div>
      </div>
      <div className="gauge-content">
        <h3>1000 cal</h3>
        <hr className="underline" />
        <h3>2000 cal</h3>
      </div>
    </div>
  );
};

export default CalorieGuage;
