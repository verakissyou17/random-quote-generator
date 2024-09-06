import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function App() {
  const [quote, setQuote] = useState('The only way to do great work is to love what you do.');
  const [author, setAuthor] = useState('Steve Jobs');
  const [color, setColor] = useState('#16a085');


  const getNewQuote = async () => {
    const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    const jsonQuoteData = await response.json();
    const ri = Math.floor(Math.random() * jsonQuoteData.quotes.length);

    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 50);
    const lightness = Math.floor(Math.random() * 50);

    setQuote(jsonQuoteData.quotes[ri].quote);
    setAuthor(jsonQuoteData.quotes[ri].author);
    setColor(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
  };


  return (<>
    <div className="wrapper">
      <div className="quote-box">
        <div className="quote-text"
          style={{ color: color }}
        >
          <FontAwesomeIcon icon={faQuoteLeft} />
          <span className="text">{quote}</span>
        </div>
        <div className="quote-author"
          style={{ color: color }}
        >
          - <span className="author">{author}</span>
        </div>
        <div className="buttons">
          <a className="button" href="https://www.facebook.com/" target="_blank"
            style={{ backgroundColor: color }} rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a className="button" href="https://www.linkedin.com/" target="_blank"
            style={{ backgroundColor: color }} rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <button className="new-quote button" style={{ backgroundColor: color }} onClick={getNewQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  </>);
}

export default App;
