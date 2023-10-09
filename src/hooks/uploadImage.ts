import S3 from "awsConfig";
import { useState } from "react";

export function useImageUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
  };

  const uploadImage = async () => {
    if (!selectedFile) {
      setUploadError("No file selected");
      return;
    }

    const fileName = selectedFile.name;

    const params = {
      Bucket: "YOUR_S3_BUCKET_NAME",
      Key: fileName,
      Body: selectedFile,
    };

    try {
      setUploading(true);
      await S3.upload(params).promise();
      setUploading(false);
      setSelectedFile(null);
      setUploadError(null);
    } catch (error) {
      console.error("S3 upload error", error);
      setUploadError("Error uploading image");
      setUploading(false);
    }
  };

  return {
    selectedFile,
    handleFileChange,
    uploadImage,
    uploading,
    uploadError,
  };
}
