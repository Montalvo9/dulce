//importamos un TYPE (solo para TYpeScript) que es el menuItem que esta en types.ts, esto es para decirle a MenuItemProps que el item es de tipo menuItem
import type { menuItem } from "../types"

//definimos los props que acepta este componente
type MenuItemProps = {
    item: menuItem  // <- item es la prop y su tipo es menuItem
    addItem: (item:menuItem) => void
}


//componente que recibe un item del menu y lo muestra, este componente se va a usar en App.tsx para mostrar cada item del menu, el item se recibe como prop y se muestra el nombre y el precio, el precio se muestra con 2 decimales usando toFixed(2)
export default function MenuItem({ item , addItem }: MenuItemProps) {
  return (
    <button className="border-2 border-pink-300 hover:bg-pink-300 w-full p-3 flex justify-between items-center rounded-lg"
    onClick={ () => addItem(item) }>
    <p>{item.name}</p>
    <p className="font-black">${item.price.toFixed(2)}</p>
    
    
    
    </button>
  )
}
