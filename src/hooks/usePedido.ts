import { useState } from "react";
import type { menuItem, pedidoItem } from "../types";
export default function usePedido() {
  const [pedido, setPedido] = useState<pedidoItem[]>([]);

  /**CReamos la funcion de agregar item o agregar un producto al pedido y lo exportamos al return
   */

  const addItem = (item: menuItem) => {
    //console.log("Probando la función agregando item al pedido");
    //console.log(item);

    const itemExiste = pedido.find((pedidoItem) => pedidoItem.id === item.id); // <-- Esto es para verificar si el item que se está agregando al pedido ya existe en el pedido, esto se hace para evitar agregar el mismo item varias veces al pedido, si el item ya existe en el pedido entonces no se agrega de nuevo, si el item no existe en el pedido entonces se agrega al pedido

    if(itemExiste) {
      console.log("El item ya existe en el pedido");
      const actualizaPedido = pedido.map(pedidoItem => pedidoItem.id === item.id ? {...pedidoItem, cantidad: pedidoItem.cantidad + 1} : pedidoItem); // <-- Esto es para actualizar el pedido, si el item que se está agregando al pedido ya existe en el pedido entonces se actualiza la cantidad de ese item en el pedido, esto se hace usando el método map para recorrer el pedido y encontrar el item que se está agregando al pedido, si se encuentra el item entonces se actualiza la cantidad de ese item en el pedido sumando 1 a la cantidad actual, si no se encuentra el item entonces se deja igual
      setPedido(actualizaPedido);
    }else{
      console.log("agregando item al pedido");
    }

    const newItem = { ...item, cantidad: 1 }; // <-- Esto es para crear un nuevo item que tenga toda la información del item del menú pero con una propiedad adicional que es la cantidad, esta cantidad se inicializa en 1 porque cuando se agrega un item al pedido se asume que se está agregando una unidad de ese item
    setPedido([...pedido, newItem]);
  };
 // console.log(pedido);

  return {
    pedido,
    addItem,
  };
}
