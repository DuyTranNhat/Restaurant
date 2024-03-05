import React from "react";
import clsx from "clsx";

import "./ImageGallery.module.scss";
import Gallery1 from "~/utils/img/gallery1.jpg";
import Gallery2 from "~/utils/img/gallery2.jpg";
import Gallery3 from "~/utils/img/gallery3.jpg";
import Gallery4 from "~/utils/img/gallery4.jpg";
import Gallery5 from "~/utils/img/gallery5.jpg";
import Gallery6 from "~/utils/img/gallery6.jpg";
import GalleryImg1 from "~/utils/img/galleryimg1.avif"


function ImageGallery() {
  return (
    <div className="container py-5">
      <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">
        Image Gallery Restaurant
      </h2>
      <div className="row">
        <div className="col-md-4 px-2">
          <div className="my-3">
            <img src='https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D' className="img-fluid w-100" alt="" />
          </div>
          <div className="my-3">
            <img src={Gallery2} className="img-fluid w-100" alt="" />
          </div>
        </div>
        <div className="col-md-4 px-2">
          <div className="my-3">
            <img src='https://images.unsplash.com/photo-1567745219000-b99afacf5ef6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxyZXN0YXVyYW50fGVufDB8fDB8fHww' className="img-fluid w-100" alt="" />
          </div>
          <div className="my-3">
            <img src='https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D' className="img-fluid w-100" alt="" />
          </div>
        </div>
        <div className="col-md-4 px-2">
          <div className="my-3">
            <img src={Gallery5} className="img-fluid w-100" alt="" />
          </div>
          <div className="my-3">
            <img src={Gallery6} className="img-fluid w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
