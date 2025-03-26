import React, { useState } from "react";
import "./FileUploader.css";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(""); // Store the file
  const [downloadUrl, setDownloadUrl] = useState(""); // For processed file download link

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]); // Store the file object
    }
  };

  const uploadFile = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile); // Add the file to the FormData object

    try {
      const response = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setDownloadUrl(data.downloadUrl); // Set the URL for the processed file
      } else {
        console.error("Error processing file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="file-uploader">
      
      {/* <input
        type="file"
        onChange={handleFileChange}
        className="file-input"
      />
      <button onClick={uploadFile} className="upload-button">
        Upload File
      </button>
      {downloadUrl && (
        <a href={downloadUrl} download className="download-link">
          Download Processed File
        </a>
      )} */}
      <h1>UNDER WORKING</h1>
    </div>
  );
};

export default FileUploader;