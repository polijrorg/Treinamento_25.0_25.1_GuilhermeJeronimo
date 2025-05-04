import * as S from './styles';

interface NoticiaProps {
    title: string;
    description: string;
    image: string;
    id: string;
}

const Noticia: React.FC<NoticiaProps> = ({ title, description, image }) => {
    return (
        <S.Wrapper>
            <S.CadaNoticia>
                <S.ImagemNoticias src={image} alt={title} />
                <S.TextoNoticiasDiv>
                    <S.TextoNoticiasTitulo>{title}</S.TextoNoticiasTitulo>
                    <S.TextoNoticias>{description}</S.TextoNoticias>
                </S.TextoNoticiasDiv>
            </S.CadaNoticia>
            <S.Linhas />
        </S.Wrapper>
    );
};

export default Noticia;
