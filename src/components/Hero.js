function Hero() {
  return (
    <>
      {/* ======= Hero Section ======= */}
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Rajesh Nangar</h1>
          <p>
            I'm
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            />
          </p>
        </div>
      </section>
      {/* End Hero */}
    </>
  );
}

export default Hero;
