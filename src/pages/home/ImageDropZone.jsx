import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setMyImage } from "../../store/slices/myInfoSlice";

function ImageDropZone() {
  const dispatch = useDispatch();
  const myImage = useSelector((state) => state.myInfo.myImage);
  const [uploadStatus, setUploadStatus] = useState("idle"); // idle, success, error

  useEffect(() => {
    if (uploadStatus === "success" || uploadStatus === "error") {
      const timeout = setTimeout(() => setUploadStatus("idle"), 3000); // 3 seconds
      return () => clearTimeout(timeout);
    }
  }, [uploadStatus]);

  function handleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setMyImage(reader.result));
        setUploadStatus("success");
      };
      reader.readAsDataURL(file);
    } else {
      setUploadStatus("error");
    }
  }

  return (
    <div
      className={`mt-8 cursor-pointer border-2 border-dashed p-6 text-center transition-all duration-300 ${
        uploadStatus === "success"
          ? "border-green-500 bg-green-50 text-green-700"
          : uploadStatus === "error"
            ? "border-red-500 bg-red-50 text-red-700"
            : "border-gray-400 text-gray-600"
      }`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {uploadStatus === "success"
        ? "✅ Image uploaded!"
        : uploadStatus === "error"
          ? "❌ File must be an image"
          : "Drag & Drop a Logo Here"}
    </div>
  );
}

export default ImageDropZone;
