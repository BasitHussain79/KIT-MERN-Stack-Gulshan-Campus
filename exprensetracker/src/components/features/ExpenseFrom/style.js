import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 5rem auto;
  background-color: lightblue;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 80%;
  border-radius: 10px;
  border: ${(props) => props.validation && props.validation};
`;

export { Form, Input };
