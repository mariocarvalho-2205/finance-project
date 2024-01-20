import * as C from './App.styled';
import { useState, useEffect } from 'react';
import { items } from '../src/data/items'
import { categories } from '../src/data/category'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea';
import './App.css'
// parou no minuto 37

function App() {

  const [ list, setList ] = useState(items);
  const [ category, setCategory ] = useState(categories)
  const [ filteredList, setFilteredList ] = useState([])
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth())

  useEffect(() => {
    // filtrar a lista e rodar a função filteredlistbymonth
    setFilteredList( filterListByMonth( list, currentMonth) )
  }, [list, currentMonth])

  return (
    <C.Container >
      <C.Header>
        <C.HeaderText>Finanças Pessoais</C.HeaderText>
        

      </C.Header>
      <C.Body className="body">
        {/* Area de Informações */}


        {/* Area de Iserção */}


        {/* Area de Itens */}
        <TableArea list={filteredList}/>
      </C.Body>

      
    </C.Container>
  )
}

export default App
