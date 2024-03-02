import './Processes.css';

const Processes = () => {
  return (
    <section className="wpb_row vc_row-fluid fincon-steps-sec vc_custom_1668074092750 vc_row-has-fill border mb-4 process">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="wpb_column vc_column_container vc_col-sm-8 vc_col-lg-offset-2 vc_col-md-offset-2 vc_col-sm-offset-2">
            <div className="vc_column-inner vc_custom_1482995981213">
              <div className="wpb_wrapper ">
                <h1 className="text-center p-4">
                  {' '}
                  Fast &amp; Easy Application Process
                </h1>

                <p className="align-center">
                  With so many steps involved, people generally don’t know where
                  to start when applying for a mortgage. However, here at Eco
                  Finance and Home Loans, we have made the loan application
                  process very smooth and stress-frees.
                </p>
              </div>
            </div>
          </div>
          <div className="fincon-step-item wpb_column vc_column_container vc_col-sm-4 box">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper ">
                {' '}
                <div className="pinside40 number-block outline mb60 bg-boxshadow">
                  <div className="circle">
                    <span className="number">1</span>
                  </div>{' '}
                  <h3 className="number-title">
                    Initial Appointment with your Mortgage Broker
                  </h3>{' '}
                  <p>
                    During our initial appointment, we discuss your situation,
                    your needs and objectives behind getting a home loan and
                    also determine if you’re eligibility for a home loan.
                  </p>{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="fincon-step-item wpb_column vc_column_container vc_col-sm-4 box">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper ">
                {' '}
                <div className="pinside40 number-block outline mb60 bg-boxshadow">
                  <div className="circle">
                    <span className="number">2</span>
                  </div>{' '}
                  <h3 className="number-title">
                    Preliminary assessment and document submission
                  </h3>{' '}
                  <p>
                    After receiving your documents and loan requirement we
                    carefully review all the document and perform pre-assessment
                    of your application to ensure all the application is
                    complete.
                  </p>{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="fincon-step-item wpb_column vc_column_container vc_col-sm-4 box">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper ">
                {' '}
                <div className="pinside40 number-block outline mb60 bg-boxshadow">
                  <div className="circle">
                    <span className="number">3</span>
                  </div>{' '}
                  <h3 className="number-title">Submit to a lender</h3>{' '}
                  <p>
                    Once we find the most suitable loan product for your need,
                    we submit it to the lender for processing
                  </p>{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper ">
                {' '}
                <a
                  href="/loan-products"
                  className="btn btn-default loan-button"
                >
                  View Our Loans
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processes;
