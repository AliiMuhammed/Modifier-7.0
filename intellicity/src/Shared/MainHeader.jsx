import React from "react";

import "../Style/main-haeder.css"
function MainHeader({img,paragraph,title}) {
  return (
    <>
      <div className="main-header gradient">
        <div className="container">
          <div className="content">
          <h1>{title}</h1>
          <p>
            {paragraph}
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
