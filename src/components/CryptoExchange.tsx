import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  padding: 20px 40px;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    rgba(31, 207, 241, 0.1) 0%,
    rgba(35, 77, 182, 0.1) 100%
  );
  box-shadow: 6px 10px 17px 0px rgba(0, 0, 0, 0.1),
    0px 4px 82.9px 0px rgba(50, 26, 64, 0.4);
`;

const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 28px;
  text-align: center;
  font: 500 24px/36px Gilroy-Light, sans-serif;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #fff;
  font: 500 20px/36px Gilroy-Light, sans-serif;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font: 500 16px Gilroy-Light, sans-serif;
`;

const Select = styled.select`
  margin-left: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font: 500 16px Gilroy-Light, sans-serif;
`;

const RateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RateButton = styled.button`
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: linear-gradient(90deg, #c670d2 0%, #8b36d9 100%);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CryptoExchange: React.FC = () => {
  const [btcAmount, setBtcAmount] = useState("0.1");
  const [ethAmount, setEthAmount] = useState("2.16105494");
  const [rate, setRate] = useState("Floating rate");
  const [sendCurrency, setSendCurrency] = useState("BTC");
  const [receiveCurrency, setReceiveCurrency] = useState("ETH");

  const toggleRate = () => {
    setRate(rate === "Floating rate" ? "Fixed rate" : "Floating rate");
  };

  const handleCurrencySwap = () => {
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(sendCurrency);
  };

  return (
    <Container>
      <Title>Crypto Exchange</Title>
      <Label>
        You send
        <InputWrapper>
          <Input
            type="text"
            value={btcAmount}
            onChange={(e) => setBtcAmount(e.target.value)}
          />
          <Select
            onChange={(e) => setSendCurrency(e.target.value)}
            defaultValue={sendCurrency}
            value={sendCurrency}
          >
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </Select>
        </InputWrapper>
      </Label>
      <Row>
        <Label>
          <RateWrapper>
            <span>{rate}</span>
            <RateButton onClick={toggleRate}>
              {rate === "Floating rate" ? "🔓" : "🔒"}
            </RateButton>
          </RateWrapper>
        </Label>
        <RateButton onClick={handleCurrencySwap}>&#x21bb;</RateButton>
      </Row>
      <Label>
        You get
        <InputWrapper>
          <Input
            type="text"
            value={ethAmount}
            onChange={(e) => setEthAmount(e.target.value)}
          />
          <Select
            defaultValue={receiveCurrency}
            value={receiveCurrency}
            onChange={(e) => setReceiveCurrency(e.target.value)}
          >
            <option value="ETH">ETH</option>
            <option value="BTC">BTC</option>
          </Select>
        </InputWrapper>
      </Label>
      <Button>Exchange</Button>
    </Container>
  );
};

export default CryptoExchange;
