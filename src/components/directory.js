import categoriesData from "@/data/data";
import Nodes from "./nodes";
import "./nodes.css";

const Directory = () => {
  return (
    <div className="directory-container">
      <Nodes categories={categoriesData} />
    </div>
  );
};

export default Directory;
