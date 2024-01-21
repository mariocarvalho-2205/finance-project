import { formatCurrentMonth } from '../../helpers/dateFilter'
import { ResumeItem } from '../../components/ResumeItem/index'
import * as S from './styles'

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }) => {

    const handlePrevMonth = () => {
        let [ year, month ] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth( currentDate.getMonth() - 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
        // console.log(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }    
    const handleNextMonth = () => {

        let [ year, month ] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth( currentDate.getMonth() + 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    return (
        <S.Container>
            <S.MonthArea>
                <S.MonthArrow onClick={handlePrevMonth}>⬅️</S.MonthArrow>
                <S.MonthTitle>{formatCurrentMonth(currentMonth)}</S.MonthTitle>
                <S.MonthArrow onClick={handleNextMonth}>➡️</S.MonthArrow>
                
            </S.MonthArea>
            <S.ResumeArea>
                <ResumeItem title='Receita' value={income}/>
                <ResumeItem title='Despesas' value={expense}/>
                <ResumeItem 
                    title='Balanço' 
                    value={(income - expense).toFixed(2)}
                    color={(income - expense < 0 ? 'red' : 'green')}/>
            </S.ResumeArea>

        </S.Container>


    )
}