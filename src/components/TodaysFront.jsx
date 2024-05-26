function TodaysFront() {
    return (
        <div className="h-60 w-full">
            <div className="h-10 w-50 mt-20">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4  ring-opacity-40 w-64
" style={{ height: '300px' }}>
                    <div className="relative" style={{ height: '45%' }}>
                        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image" />
                        <div className="absolute top-0 left-0 bg-red-500 text-white px-4 py-1 m-2 rounded-md text-sm font-medium">
                            30:20:10
                        </div>
                    </div>
                    <div className="" style={{ height: '10%' }}>
                        <h3 className="text-lg font-medium mb-2">Product Title</h3>
                        <p className="text-gray-600 text-sm mb-4 text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus sit amet euismod lorem.
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-lg">$19.99</span>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default TodaysFront;
