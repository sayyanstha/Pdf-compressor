import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import './App.css';  
import React, { useState } from 'react';


function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const compressPDF = async () => {
    if (!file) {
      console.error('Please select a file');
      return;
    }

    try {
      const pdfBytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(pdfBytes);

      // Perform compression operations here

      const compressedPdfBytes = await pdfDoc.save();
      const compressedPdfBlob = new Blob([compressedPdfBytes], { type: 'application/pdf' });
      const downloadLink = document.createElement('a');

      downloadLink.href = URL.createObjectURL(compressedPdfBlob);
      downloadLink.download = 'compressed.pdf';
      downloadLink.click();
    } catch (error) {
      console.error('Error compressing PDF:', error);
    }
  };

  return (
    <div>
      <h1>PDF Compressor</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={compressPDF}>Compress PDF</button>
    </div>
  );
}

export default App;

export default App;
