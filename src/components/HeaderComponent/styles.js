import styled from 'styled-components';


export const HeaderStyled = styled.div `
    display: flex;
    position: relative;
    align-items: flex-end;
    height: 100px;
    width: 100%;
    background-color: red;
`;

export const LogoStyled = styled.div `
    width: 20%;
    text-align: center;
    margin: auto;
`;

export const Nav = styled.ul `
    display: flex;
    width: 40%;
    height: 50%;
    margin: 0;
    padding: 0;
    background-color: green;
    list-style: none;
`;

export const FunctionBtnStyled = styled.li `
    border: solid 1px ;
    padding: 10px 20px;
`;

export const SearchStyled = styled.input `
    width: 20%;
    height: 45%;
`;

export const SearchBtnStyled = styled.button `
    width: 10%;
    height: 50%;
`;

export const OutBtnStyled = styled.button `
    width: 10%;
    height: 50%;
`;
