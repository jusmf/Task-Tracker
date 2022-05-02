import styled from 'styled-components';

const StyledButton = styled.button`
  box-sizing: border-box;
  margin: 0px 7px;
  min-width: 0px;
  background: white;
  border: 1px solid rgba(197, 193, 204, 255);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    background-color: #ef6393;
    background-color: linear-gradient(315deg, #ee5166 0%, #f08efc 100%);
    color: white;
    transition: all 0.5s ease 0s;
  }
`;

export const Button = ({ className, list, handleClick, label }) => {
  return (
    <StyledButton
      className={className}
      list={list}
      onClick={() => handleClick()}
    >
      {label}
    </StyledButton>
  );
};
