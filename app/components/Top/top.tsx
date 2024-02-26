import './Top.css';

export const TopBar = () => {
  return (
    <div className="container-fluid top-bar">
      {/* <!-- top-bar --> */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 col-sm-6">
            <p className="mail-text">
              <a href="https://www.rba.gov.au/" target="_blank" rel="noopener">
                <strong>RBA Cash Rate:</strong> 4.35%{' '}
                <strong>Inflation:</strong> 4.1%
              </a>
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <p className="mail-text text-center">
              <a href="tel:0287509780">
                <i className="icon-phone-call icon-2x icon-default"></i>Call us
                at 0421561785
              </a>
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <p className="mail-text text-center">
              <i className="icon-clock icon-2x icon-default"></i>Mon to Fri
              10:00 am - 06:00 pm
            </p>
          </div>
          <div className="col-md-2 col-sm-6">
            <p className="mail-text text-center">MFAA&nbsp; 673747334</p>
          </div>
          <div className="col-md-1 d-none d-md-block"></div>{' '}
          {/* Spacer column */}
          <div className="col-md-6 col-sm-12 text-center d-md-none">
            <p>
              <a href="tel:0287509780">
                <i className="icon-phone-call icon-2x icon-default"></i>
              </a>
              <i className="icon-clock icon-2x icon-default"></i>
              <i className="fa fa-facebook"></i>
              <i className="fa fa-linkedin"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
