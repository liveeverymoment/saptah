import { useState } from 'react'
import './App.css'
import CommonPageLayout from "../src/common/CommonPageLayout"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CommonPageLayout />
    </>
  )
}

export default App
