import React from 'react';

function Podcast() {
  return (
    <>
      <div className="row">
        <div className="col align-self-center text">
          <h1>Joel Hilton's Podcast</h1>
        </div>
        <div className="">
          <img src="./JoelHiltonHeadshot.jpg" alt="JoelHilton" />
        </div>
      </div>
      <div>
        <a className="btn btn-primary" href="https://baconsale.com/">To Podcast</a>
      </div>
    </>
  );
}

export default Podcast;
