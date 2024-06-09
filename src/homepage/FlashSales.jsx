import { Link } from "react-router-dom";


const FlashSales = () => {  
  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex items-start justify-center w-full gap-12 mt-11 place-content-evenly">
        {/* Left Side - Flash Sales */}
        <div className="text-red-600 text-2xl font-semibold">Flash Sales</div>

        {/* Middle - Countdown Timer */}
        <div className="flex items-center gap-4">
  {/* Countdown Timer Blocks */}
  <div className="timer flex flex-col items-center bg-white rounded-lg p-2">
    <div className="countdown-element font-manrope font-semibold text-3xl text-red-600">
      {/* Countdown Days */}
      1
    </div>
    <p className="text-sm font-normal text-gray-900">days</p>
  </div>
  <h3 className="font-manrope font-semibold text-3xl text-gray-900"></h3>
  <div className="timer flex flex-col items-center bg-white rounded-lg p-2">
    <div className="countdown-element font-manrope font-semibold text-3xl text-red-600">
      {/* Countdown Hours */}
      12
    </div>
    <p className="text-sm font-normal text-gray-900">hours</p>
  </div>
  <h3 className="font-manrope font-semibold text-3xl text-gray-900"></h3>
  <div className="timer flex flex-col items-center bg-white rounded-lg p-2">
    <div className="countdown-element font-manrope font-semibold text-3xl text-red-600">
      {/* Countdown Minutes */}
      34
    </div>
    <p className="text-sm font-normal text-gray-900">minutes</p>
  </div>

  <h3 className="font-manrope font-semibold text-3xl text-gray-900"></h3>
  <div className="timer flex flex-col items-center bg-white rounded-lg p-2">
    <div className="countdown-element font-manrope font-semibold text-3xl text-red-600">
      {/* Countdown Minutes */}
      34
    </div>
    <p className="text-sm font-normal text-gray-900">Seconds</p>
  </div>
</div>


        {/* Right Side - < > */}
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">{'<'}</button>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">{'>'}</button>
        </div>
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