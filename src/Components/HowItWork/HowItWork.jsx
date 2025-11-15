export default function HowItWork({ steps }) {
  return (
    <section className="how-work py-5">
      <div className="container">
        <span className="my-badge mx-auto mb-3">HOW IT WORK</span>
        <h2 className="section-title mb-3 text-center">
          Rent with following 3 working steps
        </h2>
        <div className="row g-4 mt-5">
          {steps.map((step, index) => (
            <div key={index} className="col-md-4">
              <div className="text-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#1572D31A",
                  }}
                >
                  <i
                    className={`fas ${step.icon} fs-2`}
                    style={{
                      color: "#1572D3",
                    }}
                  ></i>
                </div>
                <h5 className="fw-bold mb-2">{step.title}</h5>
                <p className="text-muted small mb-0">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
