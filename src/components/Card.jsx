function Card({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <div>
        {product.tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
    </div>
  );
}
export default Card;