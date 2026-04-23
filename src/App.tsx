import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import usePedido from "./hooks/usePedido"; 


function App() {
  const { pedido,addItem } = usePedido() // <-- Esto es para usar la función de agregar item al pedido que creamos en el hook usePedido.ts, esta función se va a usar en el componente MenuItem.tsx para agregar un item al pedido cuando se haga click en el botón del item del menú
  return (
    <>
      <header className="bg-pink-500 py-5">
        <h1 className="text-center text-4xl font-black text-amber-50">
          El Dulce Rincón
        </h1>
      </header>

      {/* Aqui va la seccion principal*/}
      <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-3xl font-bold mb-5">Menú</h2>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id} // ← Esto es para React (renderizado)
                item={item} // ← Esto es un prop real que llega al componente que es de MenuItem.tsx
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 rounded-lg p-5 space-y-10">
         <OrderContents
         pedido = {pedido}
         
         /> 
          
        </div>
      </main>
    </>
  );
}

export default App;
