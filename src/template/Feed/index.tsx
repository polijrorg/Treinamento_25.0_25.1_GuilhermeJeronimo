import React from 'react';
import { SideBar } from 'components/SideBar';
import { Piuwer } from 'components/Piuwer';
import { Trends } from 'components/Trends';
import * as S from './styles';

const HomeTemplate = () => {
    return (
        <S.Container>
            <S.Wrapper>
                <SideBar />
                <Piuwer />
                <Trends />
            </S.Wrapper>
        </S.Container>
    );
};
export default HomeTemplate;
