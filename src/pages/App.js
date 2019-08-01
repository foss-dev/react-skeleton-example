import React from 'react';
import '../styles/app.css';

function App() {
  return (
    <div id="page-top">
      <header class="d-flex masthead">
        <div class="container my-auto text-center">
          <div class="row">
            <div class="col col-sm-12">
                <h2 class="display-4 text-center mb-3">
                  <strong>React Content Loader</strong><br />
                </h2>
            </div>
          </div>
          <div class="row">
            <div class="col col-sm-12">
                <h3>
                  <em class="mb-3">
                    <strong>Remember to follow. :)</strong>
                  </em>
                </h3>
            </div>
          </div>
        </div>
      </header>
      <div class="social-icons text-center">
        <a href="https://www.linkedin.com/in/enes-kahraman-86bb7217a/"><i class="fa fa-linkedin"></i></a>
        <a href="https://github.com/Phoique"><i class="fa fa-github"></i></a>
      </div>
    </div>
  );
}

export default App;