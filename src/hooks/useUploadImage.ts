import S3 from "awsConfig";
import { useState } from "react";

export function useImageUpload(id = "") {
  if (!id) {
    throw new Error("id is required");
  }
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleFileChange = (file: File | null) => {
    console.log("filechange ", file);
    setSelectedFile(file);
  };

  const uploadImage = async () => {
    console.log("uploading");
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
      const result = await S3.upload(params).promise();
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

const saveUrlToDb = async (url: string) => {};
