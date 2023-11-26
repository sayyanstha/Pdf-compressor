import React from 'react';
import './PdfCompressor.css';

function PdfCompressor() {
  let url = "Your-Link-Here";

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add logic to handle form submission or file upload
  };

  return (
    <div id="body">
      <h1 id="welcome">Welcome</h1><br/>
      <form id="form" onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="File" accept=".pdf"/><br/>
        <input type="submit" value="Convert File"/>
      </form>
    </div>
  );
}

export default PdfCompressor;
