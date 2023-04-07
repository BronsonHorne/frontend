import React from 'react';

function Header() {
  return (
    <>
      <div className="row">
        <div className="col align-self-center text">
          <h1>Joel Hilton's Movie Site</h1>
        </div>
        <div className="">
          <img src="./JoelHiltonHeadshot.jpg" alt="JoelHilton" />
        </div>
      </div>
      <div>
        <h4>
          This is a site for Joel Hilton for showing off his podcast and movie
          collection!
        </h4>
      </div>
    </>
  );
}

export default Header;
