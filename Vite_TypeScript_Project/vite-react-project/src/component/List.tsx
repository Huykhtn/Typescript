import  { ReactNode } from 'react'

interface ListProps<T> {
  items: T[],
  render:(item: T) => ReactNode
    
}

const List =  <T,    /* có thể dùng  extends {} thay vì dấu phẩy*/ >({items , render} : ListProps<T>) => {
  return (
   <ul>
    {items.map((item,i)=>(
      <li key={i}>
           {render(item)}
      </li>
    ))}

   </ul>
  )
}

export default List