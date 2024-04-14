"use client"
import React from "react";

const Test = () => {
    const handleDownloadPDF = () => {
        const pdfUrl = '/test.pdf'; // Path to your PDF file
    
        // Create a temporary anchor element
        const anchor = document.createElement('a');
        anchor.href = pdfUrl;
        anchor.download = 'example.pdf'; // Set the filename for the download
        document.body.appendChild(anchor);
    
        // Trigger the download
        anchor.click();
    
        // Clean up
        document.body.removeChild(anchor);
      };
  return (
    <div className="p-4 flex flex-col items-center w-full h-full gap-2 justify-center bg-gray-200">
      <h1>Your Page</h1>
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};

export default Test;
