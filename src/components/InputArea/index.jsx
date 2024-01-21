import * as S from './styles'

export const InputArea = ({ onAdd }) => {

    const handleAddEvent = () => {
        let newItem = {
            date: new Date(2024, 1, 15),
            category: 'food',
            title: 'item de teste',
            value: 250.00
        }
        onAdd(newItem)
    }

    return (
        <S.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </S.Container>
    )



}