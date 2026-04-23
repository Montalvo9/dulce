/**Funcion que formatea el string de precio  y lo que hace es coloar el signo de $ del lado 
 * izquierdo
*/
export const formatearPrecio = (precio: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(precio);
};