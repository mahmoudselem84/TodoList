import React from 'react';
const ListItem= ({item,onDelete}) => {
    return ( 
        <div className='item-row'>
            <div className='name-cell'>{item.name}</div>
            <div className='age-cell'>{item.age}</div>
            <div  className='action-cell' onClick={()=>{onDelete(item.id)}}>&times;</div>
        </div>
     );
}
 
export default ListItem