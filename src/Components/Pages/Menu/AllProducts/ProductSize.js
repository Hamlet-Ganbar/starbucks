function ProductSize({ size, capacity, i, selectSize, sized }) {

  return (

    <div onClick={() => selectSize(i)} >
      <div  className={sized === i  ? 'selected-size img-bg' : 'img-bg'} ><img src="https://www.starbucks.com/app-assets/2362af789511c4dbe2446445dcc324f8.svg" alt="" />
      </div>
      <div className="size-name">{size}</div>
      <div>{capacity}</div>
    </div>
  )
}

export default ProductSize