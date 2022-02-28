import React from 'react';
import quotes from "../quotes.json"
import { useState } from 'react';

const getRandom = () => Math.floor(Math.random() * quotes.length);

const colors = [
    "#5EC2B4", "#6AD1AD", "#82DEA1", "#A4E990", "#CCF27F", "#F9F871"
  ];

const Quote = () => {

    const [quote, setQuote] = useState(quotes[getRandom()]);

    const changeQuote = () => {
        const random = getRandom();
        setQuote(quotes[random]);
      };

      //Color Aleatorio

      const color = colors[Math.floor(Math.random() * colors.length)];

      //Cambiar el color del fondo de la pagina
      document.body.style = `background: ${color}`;

    return (
        
        <div className='quoteContainer' style={{color:color}}> 
          
          <h3>
          <i class="fas fa-quote-left"></i>{quote.quote}
          </h3>

          <h3 className='autor'>
          {quote.author}
          </h3>

          <button className='button' onClick={changeQuote} style={{background:color}}>  
          <i class="fas fa-greater-than"></i>
          </button>
            
        </div>
    );
};

export default Quote;