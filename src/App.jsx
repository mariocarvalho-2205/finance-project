import * as C from './App.styled';
import { useState, useEffect } from 'react';
import { items } from '../src/data/items'
import { categories } from '../src/data/category'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import './App.css'
// parou no minuto 37

function App() {

  const [ list, setList ] = useState(items);
  // const [ category, setCategory ] = useState(categories)
  const [ filteredList, setFilteredList ] = useState([])
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth())
  const [ income, setIncome ] = useState(0)
  const [ expense, setExpense ] = useState(0)

  useEffect(() => {
    // filtrar a lista e rodar a função filteredlistbymonth
    setFilteredList( filterListByMonth( list, currentMonth) )
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount =+ filteredList[i].value;
      }
    }

    setIncome(incomeCount.toFixed(2))
    setExpense(expenseCount.toFixed(2))

  }, [filteredList])

  const handleMonthChange = ( newMonth ) => {
    setCurrentMonth(newMonth)
  }

  return (
    <C.Container >
      <C.Header>
        <C.HeaderText>Finanças Pessoais</C.HeaderText>
        

      </C.Header>
      <C.Body className="body">

        {/* Area de Informações */}
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />


        {/* Area de Iserção */}


        {/* Area de Itens */}
        <TableArea list={filteredList}/>
      </C.Body>

      
    </C.Container>
  )
}

export default App
