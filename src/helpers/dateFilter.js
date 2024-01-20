export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()} - ${now.getMonth()+1}`
}

// filtra o mes e a data com os items 

export const filterListByMonth = (list, date) => {
    let newList = [];
    let [ year, month ] = date.split('-');

    for ( let i in list ) {
        
        if ( 
            list[i].date.getFullYear() === parseInt(year) &&
            list[i].date.getMonth() + 1 === parseInt(month)
            ) {
            newList.push(list[i])
        }
    }

    return newList
}

export const formateDate = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate()

    return `${day}/${month}/${year}`
}