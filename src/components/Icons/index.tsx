import React from 'react';
import * as S from './styles';

interface IconsProps {
    count: number;
    images: string;
    click: () => void;
}

export const Icons: React.FC<IconsProps> = ({ count, images, click }) => {
    return (
        <S.Wrapper>
            <S.IconImage src={images} onClick={click} />
            <S.IconNumber>{count}</S.IconNumber>
        </S.Wrapper>
    );
};

export default Icons;
