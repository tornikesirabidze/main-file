function List(props){

    const category = props.category;
    const itemList = props.items;



    //const loWercal = fruits.sort((a, b)=> b.calories -a.calories)


    // const loWercalories =lisTitem.filter(items => items.calories<80)

    const listFruit= itemList.map(item => <li key={item.id}>{item.name} : {item.calories}</li>)
    return(
        <>
        <h3>{category}</h3>
        <ol>{listFruit}</ol>
        
        </>
    )
}


export default List