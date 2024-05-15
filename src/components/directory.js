import categoriesData from "@/data/data";
import Nodes from "./nodes";

const Directory = () => {
  return (
    <div>
      <Nodes categories={categoriesData} />;
    </div>
  );
};

export default Directory;
