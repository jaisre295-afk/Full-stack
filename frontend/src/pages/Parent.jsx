import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
      <Child name="laks" age={18} 
      marks ={[1,2,3,4,5]} 
      person={{name:"jai",dept:["AI&DS","ct"]}}
      />
    </div>
  )
}

export default Parent