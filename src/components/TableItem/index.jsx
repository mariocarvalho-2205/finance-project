import { formateDate } from '../../helpers/dateFilter'
import { categories } from '../../data/category'
import * as S from './styles'

export const TableItem = ({ item }) => {
    return (
        <S.TableLine>
            <S.TableColumn>{formateDate(item.date)}</S.TableColumn>
            <S.TableColumn>
                <S.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </S.Category>
            </S.TableColumn>
            <S.TableColumn>{item.title}</S.TableColumn>
            <S.TableColumn>
                <S.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </S.Value>
            </S.TableColumn>

        </S.TableLine>
    )
}