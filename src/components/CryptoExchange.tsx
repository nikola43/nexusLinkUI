import React, { useEffect, useState } from "react";
import Select, { components } from 'react-select';

import styled from "styled-components";
import { currencyLists } from "../constants/exchange";
import axios from "axios";
import SingleValue from "react-select/dist/declarations/src/components/SingleValue";

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
  width: 60%;
`;

const Input = styled.input`
  width: 100%;
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
  margin-bottom: 20px;
`;

const CoinImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

const Badge = styled.span`
  text-transform: uppercase;
  padding: 1px 6px;
  color: white;
  background: grey;
  margin: 0px 5px;
  font-size: 12px;
  border-radius: 10px;
`

const customSingleValue = ({ data }: any) => (
  <div style={{ display: 'inline-flex', alignItems: 'center' }}>
    <CoinImage src={data.image} alt={data.label} />
    {data.label}
    <Badge>{data.network}</Badge>
  </div>
)

const customOption = (props: any) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        cursor: 'pointer',
        borderBottom: '1px solid #ccc',
      }}
    >
      <CoinImage src={data.image} alt={data.label} />
      {data.label}
      <Badge>{data.network}</Badge>
    </div>
  );
};

const CustomValueContainer = (props: any) => {
  const { children, ...rest } = props;

  return (
    <components.ValueContainer {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
        {children}
      </div>
    </components.ValueContainer>
  );
};


const CryptoExchange: React.FC = () => {
  const [sendAmount, setSendAmount] = useState(0.1);
  const [receiveAmount, setReceiveAmount] = useState(0);
  const [rate, setRate] = useState("Floating rate");
  const [isOpen, setIsOpen] = useState(false);
  const [sendCurrency, setSendCurrency] = useState({ value: currencyLists[0].symbol, label: currencyLists[0].symbol, image: currencyLists[0].logo, network: currencyLists[0].network });
  const [receiveCurrency, setReceiveCurrency] = useState({ value: currencyLists[1].symbol, label: currencyLists[1].symbol, image: currencyLists[1].logo, network: currencyLists[1].network });

  const toggleRate = () => {
    setRate(rate === "Floating rate" ? "Fixed rate" : "Floating rate");
  };

  const handleCurrencySwap = () => {
    setSendCurrency({ ...receiveCurrency });
    setReceiveCurrency({ ...sendCurrency });
  };

  const fetchExchangeRate = async () => {
    try {
      const res = await axios.get(`https://api.coinconvert.net/convert/${sendCurrency.value}/${receiveCurrency.value}?amount=${sendAmount}`);
      setReceiveAmount(res.data[receiveCurrency.value])
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => { fetchExchangeRate() }, []);

  useEffect(() => {
    if (sendCurrency.value !== receiveCurrency.value && sendAmount > 0) {
      fetchExchangeRate();
    }
  }, [sendCurrency, receiveCurrency, sendAmount]);

  return (
    <Container>
      <Title>Crypto Exchange</Title>
      <Label>
        You send
      </Label>
      <Row>
        <InputWrapper>
          <Input
            type="number"
            value={sendAmount}
            onChange={(e) => setSendAmount(parseFloat(e.target.value))}
          />
        </InputWrapper>
        <Select
          styles={{container: (props)=>({...props, width: '40% !important'})}}
          isSearchable={false}
          value={sendCurrency}
          onChange={(value: any)=>setSendCurrency(value)}
          options={currencyLists.map((item) => {
            return { value: item.symbol, label: item.symbol, image: item.logo, network: item.network }
          })}
          components={{ SingleValue: customSingleValue, Option: customOption, ValueContainer: CustomValueContainer }}
        />
      </Row>
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
      </Label>
      <Row>
        <InputWrapper>
          <Input
            type="text"
            value={receiveAmount}
            readOnly
          />
        </InputWrapper>
        <Select
          styles={{container: (props)=>({...props, width: '40% !important'})}}
          isSearchable={false}
          value={receiveCurrency}
          onChange={(value: any)=>setReceiveCurrency(value)}
          options={currencyLists.map((item) => {
            return { value: item.symbol, label: item.symbol, image: item.logo, network: item.network }
          })}
          components={{ SingleValue: customSingleValue, Option: customOption, ValueContainer: CustomValueContainer }}
        />
      </Row>
      <Button>Exchange</Button>
    </Container>
  );
};

export default CryptoExchange;
