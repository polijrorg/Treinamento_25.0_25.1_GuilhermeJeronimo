import Noticia from 'components/Noticia';
import * as S from './styles';

const Noticias = [
    {
        id: '1',
        title: 'Eleição 2022',
        description:
            'Eleição em São Paulo: veja Pius sobre a disputa de segundo turno entre Neymar e Vini Jr.',
        image: 'assets/images/Eleicao.png'
    },
    {
        id: '2',
        title: '#AppleTeacher',
        description:
            'Na semana do Dia do professor, agradecemos sua paixão e dedicação!',
        image: 'assets/images/Apple.png'
    },
    {
        id: '3',
        title: 'A fazenda',
        description: 'A fazenda 14: Veja os Pius sobre o programa 🤠',
        image: 'assets/images/Fazenda.png'
    },
    {
        id: '4',
        title: 'Vôlei',
        description:
            'Sérvia derrota o Brasil e é campeã mundial de vôlei feminino',
        image: 'assets/images/Volei.png'
    },
    {
        id: '5',
        title: 'Clima tenso no NTEC',
        description: 'Gomes é chamado de Campos e se irrita com companheiros',
        image: 'assets/images/ntec.png'
    },
    {
        id: '6',
        title: 'CBF',
        description: 'CBF divulga que Copa do Mundo de 2026 está facinho',
        image: 'assets/images/CBF.png'
    },
    {
        id: '7',
        title: 'Valorant melhor que CS',
        description:
            'Relatado que jogo de fadinha supera jogo puramente de tiro',
        image: 'assets/images/Valorant.jpg'
    },
    {
        id: '8',
        title: 'The Beatles é bom?',
        description: 'Pesquisa Ntécnica mostra que 75% acham que sim',
        image: 'assets/images/TheBeatles.jpg'
    }
];

export const Trends = () => {
    return (
        <S.Wrapper>
            <S.Titulo>
                <S.Fogo src="assets/icons/Fogo.svg" />
                <S.TituloTexto>PIUS EM ALTA</S.TituloTexto>
            </S.Titulo>
            <S.Lines />
            <S.Noticias>
                {Noticias.map((noticia) => (
                    <Noticia
                        key={noticia.id}
                        id={noticia.id}
                        title={noticia.title}
                        description={noticia.description}
                        image={noticia.image}
                    />
                ))}
            </S.Noticias>
        </S.Wrapper>
    );
};
