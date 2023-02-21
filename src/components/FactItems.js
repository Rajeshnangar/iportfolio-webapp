export default function FactItems(props) {
  return (
    <>
      <section id="facts" className="facts">
        <div className="container">
          <div className="row no-gutters">
            {props.data.map((item) => (
              <div key={item.name}
                className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="count-box">
                  <i className={`bi ${item.icon}`} />
                  <span
                    data-purecounter-start={item.data_purecounter_start}
                    data-purecounter-end={item.data_purecounter_end}
                    data-purecounter-duration={item.data_purecounter_duration}
                    className="purecounter"
                  />
                  <p>
                    <strong>{item.name}</strong> {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Facts Section */}
    </>
  );
}
