import ProductCard from "./components/ProductCard"
const App = () => {
  return (
    <div className="grid md:grid-cols-4 gap-3  ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
export default App;