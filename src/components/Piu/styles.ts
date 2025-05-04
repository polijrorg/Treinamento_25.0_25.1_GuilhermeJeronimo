import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    border-radius: 16px;
    background: var(--Slate-3, #202425);
    height: 251px;
    width: 92%;
`;

export const InfoDiv = styled.div`
    display: flex;
    gap: 12px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    height: 80px;
    width: 100%;
`;

export const InfoImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;

export const InfoText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    height: 80px;
`;

export const InfoTextName = styled.text`
    color: var(--Slate-12, #ecedee);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const InfoTextUsername = styled.text`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
`;

export const LixoDiv = styled.div`
    width: 24px;
    height: 80px;
    display: flex;
`;
export const UserDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 17.5px;
    align-items: center;
    height: 80px;
    width: 50%;
`;
export const LixoImage = styled.img`
    width: 24px;
    height: 24px;
`;

export const PiuText = styled.text`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const IconDiv = styled.div`
    display: flex;
    justify-content: left;
    align-items: flex-start;
    align-self: stretch;
    height: 24px;
    width: 100%;
    gap: 24px;
`;
