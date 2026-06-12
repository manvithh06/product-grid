import Card from "./Card";
function Grid({ products }) {
  return (
    <div className="grid">
      {products.map(p => <Card key={p.id} product={p} />)}
    </div>
  );
}
export default Grid;