import Button from "./UI/buttons";

interface Iprop { }
const ProductCard = ({ }: Iprop) => {
  return (
    <div className="border border-gray-600 flex-col rounded-lg p-2 gap-3 flex">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="" className="rounded-md"
      />
      <h3 className="text-base">Nike Shoes</h3>
      <p className="text-xs">
        As luxury T-Shirt is just as distinctive and can be trimmed with premium
        materials like Nappa leather and carbon fiber.
      </p>
      <div className="flex items-center space-x-1">
        <span className="w-5 h-5 bg-blue-400 rounded-full"></span>
        <span className="w-5 h-5 bg-yellow-400 rounded-full"></span>
        <span className="w-5 h-5 bg-red-400 rounded-full"></span>
        <span className="w-5 h-5 bg-green-400 rounded-full"></span>
      </div>
      <div className="flex justify-between items-center">
        <span>$5000.55</span>
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="" className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="flex space-x-2">
      <Button className="bg-red-700">DElETE</Button>
      <Button className="bg-indigo-700">EDIT</Button>
      <Button className="bg-gray-300">CANSLE</Button>

      </div>
    </div>
  );
};
export default ProductCard;
