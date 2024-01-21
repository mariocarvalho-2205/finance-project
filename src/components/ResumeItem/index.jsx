import * as S from './styles'

export const ResumeItem = ({ title, value, color }) => {

    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Info color={color}>R$ {value}</S.Info>
        </S.Container>
    )
}