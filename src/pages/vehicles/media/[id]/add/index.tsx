import { useRouter } from "next/router";
import Container from "~/components/container";
import { useImageUpload } from "~/hooks/useUploadImage";

export default function AddVehicleMediaPage() {
  const id = useRouter().query.id;

  const {
    selectedFile,
    handleFileChange,
    uploadImage,
    uploading,
    uploadError,
  } = useImageUpload(String(id));

  const handleClick = () => {
    uploadImage();
  };

  return (
    <Container>
      <h2 className="mb-4 text-xl font-semibold">Image Upload</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
      />
      <button
        className="mt-4 rounded-md bg-blue-500 p-2 text-white"
        onClick={handleClick}
        disabled={uploading || !selectedFile}
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
      {uploadError && <p className="mt-2 text-red-500">{uploadError}</p>}
    </Container>
  );
}
