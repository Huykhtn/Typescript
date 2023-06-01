import { useState } from "react"
import Counter from "./component/Counter"
import Heading from "./component/Heading"
import { Section } from "./component/Section"
import List from "./component/List";

function App() {
 const [count , setCount] = useState<number>(0);

  return (
    <>
    
        <Heading title={"Hello Mr Frank Le"} />
        <Section title={"Different Title"}>
           This is my section.
        </Section>
        <Counter setCount={setCount} >Count is {count}</Counter>
        <List items={["☕ Coffee", "🌮 Tacos", "💻 Code"]} render={(item:string)=><span className="gold">{item}</span> } />
    </>
  )
}

export default App