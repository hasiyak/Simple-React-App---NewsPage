import React from 'react';
import imagePlaceholder from '../assets/news.jpg';

const NewsItems = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ width: "345px", minHeight: "450px" }}>
      <img 
        src={src ? src : imagePlaceholder} 
        style={{ height: "200px", objectFit: "cover" }} 
        className="card-img-top" 
        alt="News" 
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{title ? title.slice(0, 50) + "..." : "Title unavailable"}</h5>
          <p className="card-text">
            {description ? description.slice(0, 90) + "..." : "Description not available for this news."}
          </p>
        </div>
        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary mt-2">වැඩිදුර කියවන්න</a>
      </div>
    </div>
  );
};

export default NewsItems;