import React from 'react';

export const TinyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="tiny-footer overflow-hidden">
      <div className="tiny-container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-6">
            <p>
              <span>
                Australian Credit License Number 1 | Credit Representative
                Number 1
              </span>
            </p>
          </div>
          <div className="col-md-6 col-sm-6 text-right col-xs-6">
            <p>
              <span>© Copyright {currentYear} | Eco Finance & Home Loans </span>
              <span> |</span>Terms of use | Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
