import React from 'react'
import DataCard from './DataCard'

function Data(props) {
  console.log(props)
  const date = new Date(props.reportedOn);
  return (
    <div className='w-3/4 m-auto'>
      <h1>Name : {props.name}</h1>
      <h1>Age : {props.age}</h1>
      <h1>Reported On : {date.toDateString()}</h1>
      <h1>Sex : {props.sex}</h1>
      <div className='flex flex-row flex-wrap'>

      {
        props.tests?.map((test , index)=>
          <DataCard key={index} {...test}/>

        )
      }
      </div>
    </div>
  )
}

export default Data
