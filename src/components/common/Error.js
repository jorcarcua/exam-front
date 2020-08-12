import React from 'react';

const Error = ({ message }) => (
  <div>
    {message && (
      <div className="alert alert-danger" role="alert">
        {message}
      </div>
    )}
  </div>
);

export default Error;
