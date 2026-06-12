## Interactive Product Card Grid

### Setup
1. `npm install`
2. `npm run dev`

### Features
- Filter products by tag (All, electronics, sports, etc.)
- Sort by price ascending/descending
- Components: App → Toolbar, Grid → Card

### Reflection
I learned how useState manages shared state at the top level and flows
down as props. The hardest part was understanding that data only goes
one way — down through props — and events go back up through callbacks.