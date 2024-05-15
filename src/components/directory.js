import categoriesData from "@/data/data";
import Nodes from "./nodes";

const Directory = () => {
  return (
    <div>
      <Nodes nodes={categoriesData.categories} />;
    </div>
  );
};

export default Directory;
