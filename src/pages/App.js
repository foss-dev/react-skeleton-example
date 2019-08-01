import React, { useState } from 'react';
import Home from './Home';
import Loading from './Loading';
import '../styles/app.css';

function App() {

  // Yüklenme ekranı için state. 
  const [loading, setLoading] = useState(false);

  // Yüklenme ekranı gösterim süresi. 3 saniye.
  setTimeout(() => setLoading(true), 3000);

  if(loading) {
    return (
      <Home />
    );
  }
  else {
    return(<Loading />);
  }  

}

export default App;