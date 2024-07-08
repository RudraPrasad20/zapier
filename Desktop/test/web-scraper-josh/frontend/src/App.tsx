import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [download, setDownload] = useState('');
  const [input, setInput] = useState('');

  const getDownloads = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/?input=${input}`);
      const { downloads } = res.data;
      setDownload(downloads);
    } catch (error) {
      console.error("Error fetching downloads:", error);
    }
  };

  return (
    <>
      <div>
        <div>
          <h1>you can see the total weekly downloads of any npm package</h1>
          <h2>just enter the package name here </h2>
        </div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <br />
        <br />
        <button onClick={getDownloads}>Enter</button>
        <p>This package has {download} downloads so far</p>
      </div>
    </>
  );
}

export default App;
