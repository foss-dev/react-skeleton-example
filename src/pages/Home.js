import React from 'react';

function Home() {
  return (
    <div id="page-top">
      <header className="d-flex masthead">
        <div className="container my-auto text-center">
          <div className="row">
            <div className="col col-sm-12">
                <h2 className="display-4 text-center mb-3">
                  <strong>React Content Loader</strong><br />
                </h2>
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-12">
                <h3>
                  <em className="mb-3">
                    <strong>Remember to follow. :)</strong>
                  </em>
                </h3>
            </div>
          </div>
        </div>
      </header>
      <div className="social-icons text-center">
        <a href="https://www.linkedin.com/in/enes-kahraman-86bb7217a/"><i className="fa fa-linkedin"></i></a>
        <a href="https://github.com/Phoique"><i className="fa fa-github"></i></a>
      </div>
    </div>
  );
}

export default Home;
