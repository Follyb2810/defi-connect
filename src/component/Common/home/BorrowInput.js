import React, { useState } from 'react';
import Template from '../../Shared/Template'
import { BorrowInputData } from '../../data'
import { Button, Col, Row } from 'react-bootstrap'
import CoinPairSelector from '../../Shared/CoinPairSelector'
import {BsArrowLeftRight} from 'react-icons/bs'
import {FaGreaterThan} from 'react-icons/fa'


const BorrowInput = () => {
  const [amount, setAmount] = useState('');
  const [selectedCoin, setSelectedCoin] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCoinChange = (e) => {
    setSelectedCoin(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`You selected ${amount} ${selectedCoin}`);
  };

  const {title,para} = BorrowInputData;

  return (
    <Template title={title} para={para}>
      <section className='d-flex flex-column align-items-center border border-3 border-light-subtle px-2 py-3 rounded-4'>
            <section className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-3'>
            <CoinPairSelector amount={amount} handleCoinChange={handleCoinChange} handleAmountChange={handleAmountChange} selectedCoin={selectedCoin}/>
            <BsArrowLeftRight style={{color:'teal'}} className='fs-3'/>
            <CoinPairSelector amount={amount} handleCoinChange={handleCoinChange} handleAmountChange={handleAmountChange} selectedCoin={selectedCoin}/>
            </section>
            <Button className='fw-bold w-50 text-center' onClick={handleSubmit}>BORROW NOW <FaGreaterThan/></Button>
      </section>
   
    </Template>
  )
}

export default BorrowInput;
