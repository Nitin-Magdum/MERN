import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ResponceOutput from './ReponceOutput';


export default function UserInput() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [firstNumberError, setFirstNumberError] = useState('');
  const [secondNumberError, setSecondNumberError] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);



  const handleFirstNumberChange = (event) => {
    const input = event.target.value;
    const regex = /^[1-9]\d*$/; 
    if (regex.test(input)) {
      setFirstNumber(input);
      setFirstNumberError('');
    } else {
      setFirstNumber('');
      setFirstNumberError('Please enter a positive number.');
    }
  };




  const handleSecondNumberChange = (event) => {
    const input = event.target.value;
    const regex = /^[1-9]\d*$/;
    if (regex.test(input)) {
      setSecondNumber(input);
      setSecondNumberError('');
    } else {
      setSecondNumber('');
      setSecondNumberError('Please enter a positive number.');
    }
  };



  const handleGenerateClick = () => {
    const regex = /^[1-9]\d*$/; 
    if (!regex.test(firstNumber)) {
      setFirstNumberError('Please enter a positive number.');
      return;
    }
    if (!regex.test(secondNumber)) {
      setSecondNumberError('Please enter a positive number.');
      return;
    }

    setIsGenerating(true);
  };



  useEffect(() => {
    if (isGenerating) {
      const url = 'http://localhost:8000/api/additionResponce';
      const payload = { firstNumber, secondNumber };
      axios.post(url, payload, { headers: { 'Content-Type': 'application/json' } })
        .then((response) => {
          setApiResponse(response.data);
          setIsGenerating(false);
        })
        .catch((error) => {
          console.error(error);
          setIsGenerating(false);
        });
    }
  }, [isGenerating, firstNumber, secondNumber]);


  return (
    <div style={{ marginTop: '100px' }}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
      >
        <TextField
          id="first-number"
          label="First Number"
          variant="outlined"
          value={firstNumber}
          onChange={handleFirstNumberChange}
          error={Boolean(firstNumberError)}
          helperText={firstNumberError}
        />
        <TextField
          id="second-number"
          label="Second Number"
          variant="outlined"
          value={secondNumber}
          onChange={handleSecondNumberChange}
          error={Boolean(secondNumberError)}
          helperText={secondNumberError}
        />
      </Box>
      <Button
        style={{ marginTop: '40px' }}
        variant="contained"
        onClick={handleGenerateClick}
        disabled={isGenerating}
      >
        Generate
      </Button>
      <ResponceOutput {...apiResponse} />
    </div>
  );
}
