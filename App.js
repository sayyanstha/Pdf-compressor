import React, { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:3000/compress', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const compressedFile = await response.blob();
        // Handle the compressed file (e.g., download or display)
        console.log('File compressed successfully!');
      } else {
        console.error('Failed to compress file.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>PDF Compressor</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Compress</button>
    </div>
  );
}

export default App;
