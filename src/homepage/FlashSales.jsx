import { Link } from "react-router-dom";


const FlashSales = () => {  
  
  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex items-start justify-center w-full gap-12 mt-11 place-content-evenly">
        {/* Left Side - Flash Sales */}
        <div className="text-red-600 text-2xl font-semibold">Flash Sales </div>

        {/* Middle - Countdown Timer */}




      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))} */}
      </div>

    </div>
  );
};

export default FlashSales;