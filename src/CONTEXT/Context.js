import React, { createContext, useState } from 'react'
import Product from '../DATA/Product';
export const context = createContext();
const Context = (props) => {
const [data,setData] = useState(Product);
  return (
    <>
      <context.Provider
      value={{data,setData}}
      >
        {props.children}
      </context.Provider>
    </>
  )
}

export default Context
