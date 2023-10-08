import HomeBanner from "../assets/house-banner.png";
function Hero() {
  return (
    <>
      <section className="hero--section">
        <div className="hero--text">
          <div className="hero--text-main">
            <h1>
              <span style={{ color: "rgb(104, 104, 176)" }}>Rent</span> your
              dream
            </h1>
            <h1>Home with Us.</h1>
          </div>
          <p className="hero--text-sub">
            <span>Unlock Exceptional Rentals: Your Dream Home Awaits</span>
            <span>Start Your Journey Now!</span>
          </p>
        </div>
        <div className="hero--banner">
          <img src={HomeBanner} alt="" />
        </div>
      </section>
    </>
  );
}

export default Hero;
