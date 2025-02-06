import React from "react";
import "./styles/article.css"; // Ensure this file contains your button styles

const Article = () => {
  return (
    <div className="resume-container">
      {/* Download Resume Button */}
     
      {/* View Resume Button */}
      <a href="/My_Resume.pdf" target="_blank" rel="noopener noreferrer" className="view-btn">
        View Resume
      </a>
    </div>
  );
};

export default Article;
