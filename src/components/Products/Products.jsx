// import ProductNav from "./ProductPageNav/ProductNav";

// const Products = () => {
//   return (
//     <div className="w-full h-screen bg-red-500 relative top-[5em]">
//       <div className="">
//         <ProductNav />
//       </div>
//       <div className="main"></div>
//     </div>
//   );
// };
// export default Products;

import { useState } from "react";
import ProductNav from "./ProductPageNav/ProductNav";
import Test from "./Test.jsx";
import Test2 from "./Test2.jsx";

const Products = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelectComponent = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div className="w-full h-screen flex relative top-[5em] border-3 border-blue-800">
      <div className="">
        <ProductNav onSelectComponent={handleSelectComponent} />
      </div>
      <div className="w-full">
        {selectedComponent === "Test" && <Test />}
        {selectedComponent === "Test2" && <Test2 />}
      </div>
    </div>
  );
};

export default Products;
