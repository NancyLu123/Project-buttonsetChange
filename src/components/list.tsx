import React from 'react';

interface IPros{
    count:{
      id:number
      inpute:number
    }[]
  }

const List:React.FC<IPros>=({count})=>{
    
    const render=():JSX.Element[]=>{

        return count.map((count)=>{
            return(
                <h3>
                    {count.inpute}
                 </h3>
            )
        })
    }

    return(

        <div>
            {render()}
        </div>
    )
}

export default List