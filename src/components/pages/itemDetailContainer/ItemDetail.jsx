

export const ItemDetail = ({productSelected, onAdd}) => {
  return (
    <div>
        <h2>{productSelected.title}</h2>
        <h6>{productSelected.description}</h6>

        <button onClick={ ()=> onAdd(productSelected)}>Agregar al Carrito</button>
    </div>
  )
}

