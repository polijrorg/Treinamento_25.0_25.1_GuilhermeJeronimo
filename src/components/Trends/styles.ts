import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 23%px;
    padding: 32px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    background: var(--Slate-2, #1a1d1e);
`;
export const Titulo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;
export const Fogo = styled.img`
    width: 32px;
    height: 32px;
`;
export const TituloTexto = styled.text`
    color: var(--Slate-12, #ecedee);
    font-family: Nunito;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const Lines = styled.div`
    width: 100%;
    height: 1px;
    background: var(--Slate-8, #4c5155);
`;
export const Noticias = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
    align-self: stretch;
`;
