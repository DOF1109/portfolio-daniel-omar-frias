import ImageGallery from "react-image-gallery";

const ImagesCarrousel = (props) => {
  const imageList = props?.images?.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });

  return (
    <>
      <ImageGallery items={imageList} showBullets showThumbnails={false} />
    </>
  );
};

export default ImagesCarrousel;
