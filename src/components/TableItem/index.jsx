import { formateDate } from '../../helpers/dateFilter'
import * as S from './styles'

export const TableItem = ({ item }) => {
    return (
        <S.TableLine>
            <S.TableColumn>{formateDate(item.date)}</S.TableColumn>
            <S.TableColumn>{item.category}</S.TableColumn>
            <S.TableColumn>{item.title}</S.TableColumn>
            <S.TableColumn>R$ {item.value}</S.TableColumn>

        </S.TableLine>
    )
}