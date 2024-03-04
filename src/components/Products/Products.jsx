import { useState } from "react";
import ProductNav from "./ProductPageNav/ProductNav";
import VirtualMachine from "./MainProducts/VirtualMachine.jsx";
import ObjectStorage from "./MainProducts/ObjectStorage.jsx";
import ArrayStorage from "./MainProducts/ArrayStorage.jsx";

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
        {selectedComponent === null && <VirtualMachine />}
        {selectedComponent === "VirtualMachine" && <VirtualMachine />}
        {selectedComponent === "ObjectStorage" && <ObjectStorage />}
        {selectedComponent === "ArrayStorage" && <ArrayStorage />}
      </div>
    </div>
  );
};

export default Products;
