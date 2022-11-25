import styled from "styled-components";

function Marginals() {
  return (
    <Header>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" fill="#030303" />
        <circle cx="24" cy="24" r="10.5" stroke="#FFF7F0" strokeWidth="3" />
      </svg>

      <Button>Free Consultation</Button>
    </Header>
  );
}

export default Marginals;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 32px 16px;
`;

// const LogoMobile = styled.svg`
//     display: none;
// `

const Button = styled.button`
  background-color: #030303;
  width: 176px;
  height: 44px;
  color: white;
  border: none;
  border-radius: 28px;
  font-family: "Plus Jakarta Sans", sans-serif;
`;
