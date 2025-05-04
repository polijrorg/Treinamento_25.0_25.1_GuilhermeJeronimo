import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 55px;
    border-radius: 16px;
    background: var(--Slate-8, #4c5155);
    width: 92%;
`;

export const InfoPiar = styled.textarea`
    text-align: left;
    font-family: Nunito;
    font-size: 18px;
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

export const ActionsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const ActionsDivLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ActionDivLeftIcons = styled.img`
    width: 24px;
    height: 24px;
    gap: 8px;
`;

export const ActionDivRight = styled.img`
    width: 24px;
    height: 24px;
`;
