import React from 'react'

function InputField({item}) {
  return (
    <div>
        <Input name ={item?.name} />
    </div>
  )
}

export default InputField