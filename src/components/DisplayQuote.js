// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function DisplayQuote() {
  const apiUrl = 'https://api.api-ninjas.com/v1/quotes/';
  const token = 'CPEgr5h8YYAQbPBSC4RRnw==vFulvycB9TQ8Wyah';
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}`,
      headers: { 'X-API-Key': `${token}` },
    }).then((res) => {
      setQuote(res.data[0].quote);
      setIsLoading(false);
    }).catch((err) => {
      setError('An error occurred while fetching the quote.');
      setIsLoading(false);
      throw new Error(err);
    });
  }, []);

  return (
    <div className="quote">
      <span>{isLoading ? 'Loading ...' : ''}</span>
      <span>{error || ''}</span>
      {quote}
    </div>
  );
}
