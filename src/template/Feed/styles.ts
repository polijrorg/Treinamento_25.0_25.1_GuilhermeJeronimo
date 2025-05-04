import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    flex-direction: column;
    background-color: #1a1d1e;
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 16px;
    flex-direction: row;
`;

export const Text = styled.text`
    font-family: Nunito;
    font-weight: 500;
    font-size: 24px;
    color: #000000;
`;
