import Icons from 'components/Icons';
import * as S from './styles';

interface PiuProps {
    profilepic: string;
    name: string;
    username: string;
    piu: string;
    retweetnumber: number;
    likesnumber: number;
    commentsnumber: number;
    onDelete: () => void;
    onToggleLike: () => void;
    onToggleRetweet: () => void;
}
export const Piu: React.FC<PiuProps> = ({
    profilepic,
    name,
    username,
    piu,
    retweetnumber,
    likesnumber,
    commentsnumber,
    onDelete,
    onToggleLike,
    onToggleRetweet
}) => {
    return (
        <S.Wrapper>
            <S.InfoDiv>
                <S.UserDiv>
                    <S.InfoImage src={profilepic} />
                    <S.InfoText>
                        <S.InfoTextName>{name}</S.InfoTextName>
                        <S.InfoTextUsername>{username}</S.InfoTextUsername>
                    </S.InfoText>
                </S.UserDiv>
                <S.LixoDiv>
                    <S.LixoImage
                        src="assets/icons/Lixo.svg"
                        onClick={onDelete}
                    />
                </S.LixoDiv>
            </S.InfoDiv>
            <S.PiuText>{piu}</S.PiuText>
            <S.IconDiv>
                <Icons
                    count={retweetnumber}
                    images="assets\icons\Retweet.svg"
                    click={onToggleRetweet}
                />
                <Icons
                    count={likesnumber}
                    images="assets/icons/like.svg"
                    click={onToggleLike}
                />
                <Icons
                    count={commentsnumber}
                    images="assets/icons/Comments.svg"
                    click={() => {
                        ('');
                    }}
                />
            </S.IconDiv>
        </S.Wrapper>
    );
};
export default Piu;
