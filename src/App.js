import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    axios({
      url: "http://demo.borland.com/testsite/downloads/downloadfile.php?file=MyDocument.docx&cd=attachment+filename", //your url
      method: 'GET',
      responseType: 'arraybuffer',
    }).then(response => {
      console.log(response);
      console.log(response.headers["content-type"]);
      
      const url = window.URL.createObjectURL(new Blob([response.data], {type: response.headers["content-type"]}));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file.docx');
      document.body.appendChild(link);
      link.click();
    }).catch(error => {
      console.log(error);
    });
    return () => {
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
