import styled from 'styled-components'


/**
 * FormRow
 */
export const FormRow = styled.div`
  display: flex;
`;


/**
 * Input
 */
export const Input = styled.input`
  display: block;
  width: 100%;
  height: 64px;
  padding: 0 30px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: #353535;
  background-color: #fff;
  background-clip: padding-box;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 0 0 rgb(247, 0, 238);
  transition: border-color .15s ease-in-out,
              box-shadow .15s ease-in-out;

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 4px rgb(247, 0, 238);
  }
`;


/**
 * Button
 */
export const Button = styled.button`
  margin-left: 10px;
  display: flex;
  cursor: pointer;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #f700ee;
  border: 1px solid transparent;
  padding: 0 30px;
  font-size: 18px;
  line-height: 1.5;
  border-radius: 8px;
  transition: color .15s ease-in-out,
              background-color .15s ease-in-out,
              border-color .15s ease-in-out,
              box-shadow .15s ease-in-out;

  &:focus {
    color: #f700ee;
    background-color: #fff;
    outline: 0;
    box-shadow: 0 0 0 4px rgb(247, 0, 238);
  }
`;
