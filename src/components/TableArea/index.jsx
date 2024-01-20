import * as S from './styles'
import { TableItem } from '../TableItem/index'

export const TableArea = ({ list }) => {

    return (
        <S.Table>
            <thead>
                <tr>
                    <S.TableHeadColumn width={100}>Data</S.TableHeadColumn>
                    <S.TableHeadColumn width={130}>Categoria</S.TableHeadColumn>
                    <S.TableHeadColumn>Titulo</S.TableHeadColumn>
                    <S.TableHeadColumn width={150}>Valor</S.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item}/>
                ))}
            </tbody>

        </S.Table>
    )
}