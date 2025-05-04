import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 164px;
    gap: 16px;
    padding: 12px 0px;
    flex-direction: column;
    align-items: center;
`;
export const CadaNoticia = styled.div`
    display: flex;
    width: 304px;
    height: 120px;
    align-items: center;
    gap: 8px;
    flex-direction: row;
    padding: 2px 0px;
`;
export const ImagemNoticias = styled.img`
    width: 112px;
    height: 112px;
    border-radius: 16px;
`;
export const TextoNoticiasDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    flex: 1 0 0;
    align-self: stretch;
`;
export const TextoNoticiasTitulo = styled.text`
    color: var(--Slate-12, #ecedee);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const TextoNoticias = styled.text`
    align-self: stretch;
    color: var(--Slate-12, #ecedee);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;
export const Linhas = styled.div`
    width: 100%;
    height: 1px;
    background: var(--Slate-8, #4c5155);
`;
