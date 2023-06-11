import { useState } from 'react'
import './App.css'
import { Button } from '@mono/common';
import {Input} from "@mono/ui";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button>모노레포 테스트</Button>
      <Input />
      
    </>
  )
}

export default App
