import React from 'react';
import { Link } from 'react-router-dom';

const MyDynamicComponent = ({ pageTitle, breadcrumbLink, breadcrumbText }) => (
  <div className="container-fluid page-header py-5 mb-5">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">{pageTitle}</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link className="text-white" to="/">{breadcrumbLink}</Link></li>
          <li className="breadcrumb-item text-white active" aria-current="page">{breadcrumbText}</li>
        </ol>
      </nav>
    </div>
  </div>
);

export default MyDynamicComponent;
