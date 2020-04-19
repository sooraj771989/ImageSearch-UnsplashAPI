import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {

  if (images.length <= 0) {
    return (
    <div className="px-4 mt-6 image-list">
      Search For Images....
      </div>
    )
  }else{
  return (
    <div className="px-4 mt-6 image-list">
      {images.map(({ id, urls: { regular }, description }) => {
        return <ImageCard key={id} src={regular} alt={description} />;
      })}
    </div>
  );
  }
};

export default ImageList;
