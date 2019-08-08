import React from 'react';
import { withRouter } from 'react-router-dom';


const Default = ({ location }) => (
  <div className="page-content container py-5">
    <div className="row">
      <div className="col-10 mx-auto text-center pt-5">
        <h2 className="display-4">404 Error</h2>
        <h3>
          The requested URL&nbsp;  
          <span className="text-danger">{ location.pathname }</span>
          &nbsp;was not found
        </h3>
      </div>
    </div>
  </div>
)

export default withRouter(Default);
