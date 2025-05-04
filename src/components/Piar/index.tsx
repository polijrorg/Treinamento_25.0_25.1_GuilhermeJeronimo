import React, { useState } from 'react';
import * as S from './styles';

interface PiarProps {
    onSendPiu: (textopiu: string) => void;
}

export const Piar: React.FC<PiarProps> = ({ onSendPiu }) => {
    const [textopiu, setTextopiu] = useState('');

    const handleSend = () => {
        if (textopiu.trim() !== '') {
            onSendPiu(textopiu);
            setTextopiu('');
        }
    };
    return (
        <S.Wrapper>
            <S.InfoPiar
                placeholder="Quero dar um piu..."
                value={textopiu}
                onChange={(e) => setTextopiu(e.target.value)}
            />
            <S.ActionsDiv>
                <S.ActionsDivLeft>
                    <S.ActionDivLeftIcons src="assets/icons/Media.svg" />
                    <S.ActionDivLeftIcons src="assets/icons/Video.svg" />
                    <S.ActionDivLeftIcons src="assets/icons/Carinha.svg" />
                    <S.ActionDivLeftIcons src="assets/icons/Tag.svg" />
                    <S.ActionDivLeftIcons src="assets/icons/Gif.svg" />
                </S.ActionsDivLeft>
                <S.ActionDivRight
                    src="assets/icons/Enviar.svg"
                    onClick={handleSend}
                />
            </S.ActionsDiv>
        </S.Wrapper>
    );
};
