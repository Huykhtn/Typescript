import { useCallback, useEffect, useState  ,MouseEvent, KeyboardEvent, useMemo, useRef} from 'react'

const myNum:number = 37;
interface User {
  id:number,
  username:string
}


function App() {
  const[count,setCount] = useState<number>(0) 
  const [users,setUser] = useState<User[]| null>(null)

  const inputRef = useRef<HTMLInputElement>(null)
  console.log(inputRef.current);
  console.log(inputRef.current?.value)
  type fibFunc = (n:number) => number

  const fib:fibFunc = (n)=>{
    if(n<2) return n
    return fib(n-1) + fib(n-2)
  }

  

  useEffect(()=>{
    
    console.log('mounting');
    console.log('Users:', users)
    return()=> console.log('Unmounting')
  },[users])

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>):void=>setCount(prev=>prev+2),[])
  const resultMemo = useMemo<number>(()=>fib(myNum),[myNum])
  return (
   <div className='App'>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(prev=>prev+1)}}>+</button>
    <button onClick={addTwo}>+2</button>
    <h2>{resultMemo}</h2>
    <input ref={inputRef}  type='text'/>
   </div>
  )
}

export default App
