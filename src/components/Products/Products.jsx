import "./products.scss";
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
    <div className="w-full flex flex-col relative border-3">
      <div className="products-bg font-montserrat min-h-[17em] flex items-end justify-center text-center p-8">
        <div className="flex flex-col gap-4 place-items-center">
          <h1 className="text-4xl text-primary-blue font-semibold">
            Our{" "}
            <span className="relative text-primary-light line">services</span>
          </h1>
          <span className="text-primary-blue text-lg">
            Explore our range of quality services tailored just for you.
          </span>
        </div>
      </div>
      <div className="flex">
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
    </div>
  );
};

export default Products;
