import React from "react";

import "../Style/main-haeder.css"
function MainHeader({img,paragraph,title}) {
  return (
    <>
      <div className="main-header">


          <div className="overlay"></div>

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
