import React from 'react';

const CoinPairSelector = ({amount,selectedCoin,handleAmountChange,handleCoinChange}) => {
  return (
    <section className='d-flex '>
      <input
        type='number'
        placeholder="Enter amount"
        value={amount}
        onChange={handleAmountChange}
        required
        style={{marginRight: '5px', border: '1px solid #ccc', borderRadius: '5px', padding: '5px'}}
      />
      <div style={{marginRight: '5px', border: '1px solid #ccc', borderRadius: '5px', padding: '5px'}}>
        {selectedCoin}
      </div>
      <select
        value={selectedCoin}
        onChange={handleCoinChange}
        required
        style={{border: '1px solid #ccc', borderRadius: '5px', padding: '5px'}}
      >
        <option value="">Select Coin</option>
        <option value="BTC">Bitcoin</option>
        <option value="ETH">Ethereum</option>
        <option value="LTC">Litecoin</option>
        <option value="XRP">Ripple</option>
      </select>
    </section>
  );
};

export default CoinPairSelector;
