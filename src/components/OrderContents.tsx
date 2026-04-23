import { formatearPrecio } from "../helpers";
import type { pedidoItem } from "../types";

type OrderContentsProps = {
  pedido: pedidoItem[];
};

export default function OrderContents({ pedido }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-5">
        {pedido.length === 0 ? (
          <p className="text-red-500 text-center">No hay items en el pedido</p>
        ) : (
          pedido.map((item) => (
            <div key={item.id} className="flex flex-col border-b pb-3 mb-2 border-t border-gray-200 py-5 last-of-type:border-b">
              {/* Fila 1: Nombre y precio */}
              <div className="flex justify-between items-center">
                <p className="text-lg">
                  {item.name} - {formatearPrecio(item.price)}
                </p>
                <button className="bg-red-500 text-white h-8 w-8 rounded-full font-black" >
                  X
                </button>
              </div>

              {/* Fila 2: Cantidad y subtotal */}
              <p className="font-black mt-1">
                Cantidad: {item.cantidad} - {formatearPrecio(item.price * item.cantidad)}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}