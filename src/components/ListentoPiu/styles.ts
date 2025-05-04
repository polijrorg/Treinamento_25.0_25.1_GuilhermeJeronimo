import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background: var(--Slate-8, #4c5155);
    width: 92%;
`;

export const ListenPiu = styled.textarea`
    text-align: left;
    font-family: Nunito;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    height: 25px;
    width: 100%;
    background: none;
    border: none;
    resize: none;
    &:focus {
        outline: none;
    }
`;

export const ListenPiuImage = styled.img`
    width: 24px;
    height: 24px;
`;
