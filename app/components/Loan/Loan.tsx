import './Loan.css';

export const Loan = () => {
  return (
    <section className="wpb_row vc_row-fluid vc_custom_1482745542542 vc_row-has-fill mt-4 mb-4 border-none">
      <div className="container">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-4">
          <div className="col">
            <div className="rate-custom">
              <div className="rate-counter-block">
                <div className="icon rate-icon">
                  <img
                    decoding="async"
                    src="https://finconnex.com.au/wp-content/uploads/2017/01/mortgage-5.svg"
                    className="icon-svg-1x"
                    alt=""
                  />
                </div>
                <div className="rate-box">
                  <h1 className="loan-rate">5.69%</h1>
                  <small className="rate-title">Home Loans (CR 5.69%)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="rate-custom">
              <div className="rate-counter-block">
                <div className="icon rate-icon">
                  <img
                    decoding="async"
                    src="https://finconnex.com.au/wp-content/uploads/2017/01/loan-5.svg"
                    className="icon-svg-1x"
                    alt=""
                  />
                </div>
                <div className="rate-box">
                  <h1 className="loan-rate">5.76%</h1>
                  <small className="rate-title">
                    Personal Loans (CR 5.76%)
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="rate-custom">
              <div className="rate-counter-block">
                <div className="icon rate-icon">
                  <img
                    decoding="async"
                    src="https://finconnex.com.au/wp-content/uploads/2017/01/car-5.svg"
                    className="icon-svg-1x"
                    alt=""
                  />
                </div>
                <div className="rate-box">
                  <h1 className="loan-rate">5.54%</h1>
                  <small className="rate-title">Car Loans (CR 6.99%)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="rate-custom">
              <div className="rate-counter-block">
                <div className="icon rate-icon">
                  <img
                    decoding="async"
                    src="https://finconnex.com.au/wp-content/uploads/2017/01/credit-card-5.svg"
                    className="icon-svg-1x"
                    alt=""
                  />
                </div>
                <div className="rate-box">
                  <h1 className="loan-rate">6.09%</h1>
                  <small className="rate-title">Business Loans (CR 6.19)</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
