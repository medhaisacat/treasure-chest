import React, { useState } from 'react';
import axios from 'axios';
import './transfer.css'
import backendServerAddress from './constants';

function TransferForm() {
  const [privateKey, setPrivateKey] = useState('');
  const [senderAddress, setSenderAddress] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [amount, setAmount] = useState(0);

  const sendTransaction = function(event) {
    event.preventDefault();
    alert(privateKey + senderAddress + receiverAddress + amount); 

    axios({
  
      // Endpoint to send files
      url: backendServerAddress + "/transactions",
      method: "POST",
      data: {
        privateKey: privateKey,
        senderAddress: senderAddress,
        receiverAddress: receiverAddress,
        amount: amount
      }
    })
  
      // Handle the response from backend here
      .then((res) => { 
        // Alert with transaction hash
        alert(JSON.stringify(res.data));
       })
  
      // Catch errors if any
      .catch((err) => { console.log(err) });

  }
  return (
    <form className='Simple' onSubmit={event => {sendTransaction(event)}}>
      {/* Heading */}
      <label  className='Head'>📝 Transfer some tokens 📝</label>
      <br />
      <br/>

      {/* Private Key */}
      <label  className='Text'>🗝️ Private Key 🗝️</label>
      <br />
      <input 
        name='Private Key' 
        type='text'
        value={privateKey}
        onChange={event => {
          setPrivateKey(event.target.value);
        }}
      />
      <br/>
      <br/>

      {/* Sender Address */}
      <label  className='Text'>👛 My Address 👛</label>
      <br />
      <input 
        name='My Address' 
        type='text'
        value={senderAddress}
        onChange={event => {
          setSenderAddress(event.target.value);
        }}
      />
      <br/>
      <br/>

      {/* Receiver Address */}
      <label  className='Text'>👛 Receiver Address 👛</label>
      <br />
      <input 
        name='Receiver Address' 
        type='text'
        value={receiverAddress}
        onChange={event => {
          setReceiverAddress(event.target.value);
        }}
      />
      <br/>
      <br/>

      {/* Coins */}
      <label className='Text'>🪙 Amount 🪙</label>
      <br />
      <input 
        name='Amount' 
        type='text' 
        value={amount}
        onChange={event => {
          setAmount(event.target.value);
        }}
      />
      <br />
      <br />

      {/* Send */}
      <input 
        className='Link'
        type='submit' 
        value='SEND ➡️'
      />
    </form>
  )
}



export default TransferForm;

