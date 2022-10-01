import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Tools = styled.div`
  section {
    background-color: ${colors.primaryColor};
    border: 3px solid ${colors.descriptionColor};
    border-radius: 4px;
    margin-top: 25px;
    padding: 15px;
    width: 100%;
  }
`;

export const AddTools = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    font-weight: 600;
  }

  input {
    border: 3px solid ${colors.descriptionColor};
    border-radius: 4px;
    margin-top: 5px;
    height: 35px;
    padding-left: 5px;
    font-size: 0.9rem;
  }

  input::placeholder {
    color: ${colors.descriptionColor};
    font-weight: 600;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }

  button {
    width: 70px;
    height: 27px;
    margin-top: 20px;
  }
`;

export const ToolsContent = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    cursor: pointer;
  }

  span {
    font-weight: bold;
  }

  h6 {
    color: blue;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

export const ToolsText = styled.div`
  p {
    font-size: 1rem;
    margin: 8px 0 10px 0;
  }

  span {
    cursor: pointer;
    font-weight: bold;
  }
`;
export const RemoveModal = styled.div`
  h2 {
    font-size: 1.1rem;
    font-weight: 700;
  }
`;

export const TitleModal = styled.div`
  h2 {
    font-size: 1.1rem;
    font-weight: 700;
  }
`;

export const RemoveModalButton = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    border-radius: 4px;
    border: 3px solid ${colors.descriptionColor};
    font-weight: bold;
    margin: 25px 0 0 25px;
    padding: 3px;
  }
`;

export const RemoveModalText = styled.div`
  p {
    margin-top: 25px;
    font-weight: bold;
    font-size: 0.9rem;
  }
`;

export const OpenModal = styled.div`
  margin-right: 5px;

  p,
  i {
    display: flex;
    align-items: center;
    margin-right: -3px;
  }
`;

export const ToolsSearchAdd = styled.div`
  display: flex;
  margin-top: 40px;

  div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  button {
    border: 3px solid ${colors.descriptionColor};
    background-color: ${colors.primaryColor};
    width: 100px;
    padding: 0 10px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  label:first-child {
    position: relative;
  }

  label:first-child::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 15px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E")
      center / contain no-repeat;
  }

  input[type='text'] {
    border: 3px solid ${colors.descriptionColor};
    padding: 4px 2px 4px 28px;
    border-radius: 4px;
    width: 160px;
  }

  input[type='checkbox'] {
    margin-left: 10px;
    margin-right: 5px;
  }

  #labelCheck {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    width: 500px;
  }

  input[type='checkbox']:checked {
    border: 1.5px solid #2b64ce;
    background-position: center;
    background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
    background-color: #2b64ce;
  }
`;
