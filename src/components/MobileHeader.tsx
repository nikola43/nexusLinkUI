import { useState } from "react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileHeaderWrapper = styled.header`
  overflow: hidden;
  background-color: black;
  position: relative;
  min-height: 60px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Link = styled.a`
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  font-family: Gilroy-Light, sans-serif;
`;

const Hamburger = styled.div`
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  height: 64.1px;
  width: 64.1px;
  text-align: center;
  font-size: 50px;
  color: white;
  cursor: pointer;
  margin-top: 8px;
`;

interface LogoProps {
  src: string;
  alt: string;
}

const LogoImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 60px;
  margin-left: 20px;
`;

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return <LogoImage src={src} alt={alt} />;
};

const EnterCompetitionButton = styled.a`
  border-radius: 38px;
  background: linear-gradient(90deg, #c670d2 0%, #8b36d9 100%);
  color: #fff;
  padding: 10px 30px;
  font-family: Gilroy-Ligth, sans-serif;
  border: none;
  font-size: 17px;
  cursor: pointer;
  margin-left: 10px;
  underline: none;
  text-decoration: none;
`;

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MobileHeaderWrapper>
      <Logo
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/801cb201cf6261a7a44d51b24c6271783a5b3b3a751a0db7fd21ae66c0d72636?apiKey=62999276618d44279ca60b7a2a85e28a&"
        alt="Logo"
      />
      {isOpen && (
        <Links>
          {/* <EnterCompetitionButton
            href="https://beamish-kangaroo-4d4e0e.netlify.app/"
            target="blank_"
          >
            Enter Competition
          </EnterCompetitionButton> */}
          <Link href="#home">Home</Link>
          <Link href="#features">Features</Link>
          <Link href="#tokenomics">Tokenomics</Link>
          <Link href="#revenue-share">Revenue Share</Link>
        </Links>
      )}
      <Hamburger
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <RxHamburgerMenu />
      </Hamburger>
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
