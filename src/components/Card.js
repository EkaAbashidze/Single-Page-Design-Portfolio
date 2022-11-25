import styled from "styled-components";

function Card() {
  return (
    <Cardbox>
      <Heading>Book a call with me</Heading>
      <Para>
        I’d love to have a chat to see how I can help you. The best first step
        is for us to discuss your project during a free consultation. Then we
        can move forward from there.
      </Para>
      <Button>Free Consultation</Button>
    </Cardbox>
  );
}

export default Card;

const Cardbox = styled.div`
  width: 90%;
  height: 352px;
  background-color: #030303;
  color: #fff7f0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 49px 24px 48px 24px;
  gap: 24px;
  margin: auto;
`;

const Button = styled.button`
  background-color: #eb7565;
  border: 28px;
  width: 176px;
  height: 44px;
  color: #fff7f0;
  font-family: "Plus Jakarta Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  font-size: 14px;
  line-height: 28px;
`;

const Heading = styled.h1`
  font-size: 26px;
  font-weight: 700;
  line-height: 33px;
`;

const Para = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
`;
