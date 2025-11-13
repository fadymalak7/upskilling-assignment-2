export default function HowItWork({ steps }) {
  return (
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
  );
}
