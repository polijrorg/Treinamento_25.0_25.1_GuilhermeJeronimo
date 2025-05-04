import React, { useState } from 'react';
import * as S from './styles';

export const SideBar = () => {
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (item: string) => {
        setSelected(item);
    };

    return (
        <S.Wrapper>
            <S.InfoSideBar>
                <S.TopSideBar>
                    <S.TopSideBarIcon src="assets/icons/piupiu.svg" />
                    <S.TopSideBarText>PIUPIUWER</S.TopSideBarText>
                </S.TopSideBar>
                <S.WebInfo>
                    {[
                        {
                            icon: 'assets/icons/Home2.svg',
                            text: 'Página Inicial'
                        },
                        {
                            icon: 'assets/icons/Sininho.svg',
                            text: 'Notificações'
                        },
                        {
                            icon: 'assets/icons/Mensagens.svg',
                            text: 'Mensagens'
                        },
                        { icon: 'assets/icons/Nuvem.svg', text: 'Salvos' },
                        { icon: 'assets/icons/Perfil.svg', text: 'Perfil' },
                        {
                            icon: 'assets/icons/Config.svg',
                            text: 'Configurações'
                        }
                    ].map((item) => (
                        <S.WebInfoText
                            key={item.text} // Use um valor único como key
                            onClick={() => handleSelect(item.text)}
                            isSelected={selected === item.text}
                        >
                            <S.Icon src={item.icon} />
                            <S.Text>{item.text}</S.Text>
                        </S.WebInfoText>
                    ))}
                </S.WebInfo>
            </S.InfoSideBar>
            <S.DivBaixo>
                <S.IconPiu src="assets/icons/Quadradopiu.svg" />
                <S.IconLeave src="assets/icons/Log_Out.svg" />
            </S.DivBaixo>
        </S.Wrapper>
    );
};

export default SideBar;
