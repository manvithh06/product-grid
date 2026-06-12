import { useState } from "react";
import products from "./products.json";
import Toolbar from "./components/Toolbar";
import Grid from "./components/Grid";

const allTags = ["All", ...new Set(products.flatMap(p => p.tags))];

function App() {
  const [activeTag, setActiveTag] = useState("All");
  const [sortAsc, setSortAsc] = useState(true);

  const filtered = products
    .filter(p => activeTag === "All" || p.tags.includes(activeTag))
    .sort((a, b) => sortAsc ? a.price - b.price : b.price - a.price);

  return (
    <div>
      <Toolbar
        tags={allTags}
        activeTag={activeTag}
        sortAsc={sortAsc}
        onTagChange={setActiveTag}
        onSortToggle={() => setSortAsc(prev => !prev)}
      />
      <Grid products={filtered} />
    </div>
  );
}
export default App;