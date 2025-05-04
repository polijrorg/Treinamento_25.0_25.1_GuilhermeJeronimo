import { useState } from 'react';
import { ListentoPiu } from 'components/ListentoPiu';
import { Piar } from 'components/Piar';
import Piu from 'components/Piu';
import * as S from './styles';

export const Piuwer = () => {
    const [pius, setPius] = useState([
        {
            id: '1',
            profilepic: 'assets/images/Xerife.jpeg',
            name: 'Xerife',
            username: '@xerifadas',
            piu: 'Moizas não aguentou a rima do pai. #vemcompiupiu',
            retweetnumber: 300,
            likesnumber: 2000,
            commentsnumber: 100,
            liked: false,
            retweeted: false
        },
        {
            id: '2',
            profilepic: 'assets/images/NTEC.jpg',
            name: 'NTEC',
            username: '@ntecaccount',
            piu: 'Rapaziada, treinamento de frontzinho facinho, pessoal só ficou mais de 24 horas fazendo',
            retweetnumber: 20,
            likesnumber: -1,
            commentsnumber: 10,
            liked: false,
            retweeted: false
        },
        {
            id: '3',
            profilepic: 'assets/images/Lula.jpg',
            name: 'Lula',
            username: '@lulinha',
            piu: 'Picanha e cerveja para o NTEC inteiro. Frontendzinho de qualidade',
            retweetnumber: 600,
            likesnumber: 2000,
            commentsnumber: 1500,
            liked: false,
            retweeted: false
        },
        {
            id: '4',
            profilepic: 'assets/images/CBF.png',
            name: 'CBF',
            username: '@cbfoficial',
            piu: 'o Ancelloti disse que só aceita ser técnico se o Neymar jogar de ladinho. E AGORA VAI ENTRAR O GROSSO',
            retweetnumber: 3340,
            likesnumber: 1361,
            commentsnumber: 783,
            liked: false,
            retweeted: false
        }
    ]);

    const handleSendPiu = (textopiu: string) => {
        const newPiu = {
            id: (pius.length + 1).toString(),
            profilepic: 'assets/images/CaradePedra.jpeg',
            name: 'Jeronimooooooo',
            username: '@gui',
            piu: textopiu,
            retweetnumber: 0,
            likesnumber: 0,
            commentsnumber: 0,
            liked: false,
            retweeted: false
        };
        setPius([newPiu, ...pius]);
    };

    const handleDeletePiu = (id: string) => {
        setPius(pius.filter((piu) => piu.id !== id));
    };

    const handleToggleLike = (id: string) => {
        setPius((prevPius) =>
            prevPius.map((piu) =>
                piu.id === id
                    ? {
                          ...piu,
                          likesnumber: piu.likesnumber + (piu.liked ? -1 : 1),
                          liked: !piu.liked
                      }
                    : piu
            )
        );
    };

    const handleToggleRetweet = (id: string) => {
        setPius((prevPius) =>
            prevPius.map((piu) =>
                piu.id === id
                    ? {
                          ...piu,
                          retweetnumber:
                              piu.retweetnumber + (piu.retweeted ? -1 : 1),
                          retweeted: !piu.retweeted
                      }
                    : piu
            )
        );
    };

    return (
        <S.Wrapper>
            <ListentoPiu />
            <Piar onSendPiu={handleSendPiu} />
            <S.Lines />
            {pius.map((piu) => (
                <Piu
                    key={piu.id}
                    profilepic={piu.profilepic}
                    name={piu.name}
                    username={piu.username}
                    piu={piu.piu}
                    retweetnumber={piu.retweetnumber}
                    likesnumber={piu.likesnumber}
                    commentsnumber={piu.commentsnumber}
                    onDelete={() => handleDeletePiu(piu.id)}
                    onToggleLike={() => handleToggleLike(piu.id)}
                    onToggleRetweet={() => handleToggleRetweet(piu.id)}
                />
            ))}
        </S.Wrapper>
    );
};
