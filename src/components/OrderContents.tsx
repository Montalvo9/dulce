import type { pedidoItem } from "../types";

type OrderContentsProps = {
  pedido: pedidoItem[]; // <-- Esto es para decirle a OrderContentsProps que la prop pedido es un array de tipo pedidoItem, esto es para que cuando se use el componente OrderContents en App.tsx se le pueda pasar el pedido como prop y se pueda mostrar el contenido del pedido en el componente OrderContents, esto se hace para que el componente OrderContents sea un componente que muestre el contenido del pedido, es decir, los items que se han agregado al pedido y la cantidad de cada item en el pedido
};

export default function OrderContents({ pedido }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-5">
        {pedido.length === 0 ? (
          <p className="text-slate-500 text-center">No hay items en el pedido</p>
        ) : (
            pedido.map((item) => (
              <div key={item.id} className="flex justify-between">
                <p>{item.name}</p>
              </div>
            ))
        )}

      </div>
    </div>
  );
}
