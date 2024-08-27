import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';

const SwapComponent: React.FC = () => {
  const [pairs, setPairs] = useState([]);
  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('');
  const [amount, setAmount] = useState('0');
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    // Fetch supported token pairs from 0x API or a similar service
    const fetchPairs = async () => {
      try {
        const response = await axios.get('https://api.0x.org/swap/v1/tokens');
        setPairs(response.data.records);
      } catch (error) {
        console.error('Error fetching token pairs:', error);
      }
    };
    fetchPairs();
  }, []);

  const handleQuoteFetch = async () => {
    try {
      const response = await axios.get(
        `https://api.0x.org/swap/v1/quote`,
        {
          params: {
            buyToken: toToken,
            sellToken: fromToken,
            sellAmount: ethers.utils.parseUnits(amount, 18).toString(),
          },
        }
      );
      setQuote(response.data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div>
      <h2>Token Swap</h2>
      <div>
        <label>
          From Token:
          <select value={fromToken} onChange={(e) => setFromToken(e.target.value)}>
            {pairs.map((token: any) => (
              <option key={token.symbol} value={token.symbol}>
                {token.symbol}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          To Token:
          <select value={toToken} onChange={(e) => setToToken(e.target.value)}>
            {pairs.map((token: any) => (
              <option key={token.symbol} value={token.symbol}>
                {token.symbol}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleQuoteFetch}>Get Quote</button>

      {quote && (
        <div>
          <h3>Quote Details</h3>
          <p>Buy Amount: {ethers.utils.formatUnits(quote.buyAmount, 18)}</p>
          <p>Price: {quote.price}</p>
          <p>Gas: {quote.estimatedGas}</p>
        </div>
      )}
    </div>
  );
};

export default SwapComponent;
