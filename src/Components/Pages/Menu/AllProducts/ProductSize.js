function ProductSize({ size, capacity, i, selectSize, sized }) {

  return (

    <div onClick={() => selectSize(i)} >
      <div  className={sized === i  ? 'selected-size img-bg' : 'img-bg'} ><img className={sized === i  ? 'selected-img' : ''} src="https://www.starbucks.com/app-assets/19e21917b2d785e85afbc26f6c03f784.svg" alt="" />
      </div>
      <div className="size-name">{size}</div>
      <div>{capacity}</div>
    </div>
  )
}

export default ProductSize