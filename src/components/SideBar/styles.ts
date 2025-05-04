import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 22.22%;
    height: 1024px;
    padding: 32px 0px;
    flex-direction: column;
    align-items: center;
    gap: 240px;
    flex-shrink: 0;
`;
export const InfoSideBar = styled.div`
    width: 100%;
    height: 528px;
    gap: 40px;
    display: flex;
    flex-direction: column;
`;
export const TopSideBar = styled.div`
    width: 247px;
    height: 48px;
    gap: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 32px;
    padding-bottom: 40px;
    padding-top: 32px;
`;
export const TopSideBarIcon = styled.img`
    width: 48px;
    height: 48px;
`;
export const TopSideBarText = styled.text`
    width: 183px;
    height: 33px;
    font-family: Nunito;
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 25%;
    color: white;
`;
export const WebInfo = styled.div`
    width: 320px;
    height: 56px;
    gap: 40px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;
`;
interface WebInfoTextProps {
    isSelected: boolean;
}

export const WebInfoText = styled.div<WebInfoTextProps>`
    display: flex;
    align-items: center;
    padding: 12px;
    cursor: pointer;
    background-color: ${({ isSelected }) =>
        isSelected ? '#007BFF' : 'transparent'};
    border-radius: 8px;

    &:hover {
        background-color: ${({ isSelected }) =>
            isSelected ? '#0056b3' : '#0056b3'};
    }
`;
export const Icon = styled.img`
    width: 16px;
    height: 19.5px;
    top: 2.5px;
    left: 4px;
`;
export const Text = styled.text`
    font-family: Nunito;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: white;
`;
export const DivBaixo = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
`;
export const IconPiu = styled.img`
    width: 64px;
    height: 64px;
`;
export const IconLeave = styled.img`
    width: 64px;
    height: 64px;
`;
