import React from "react";
import styles from "./nodes.module.css";
import Link from "next/link";

const Node = {};

const Nodes = ({ categories }) => {
  return (
    // <ul className="nodes">
    //   {nodes.map((node) => {
    //     // return <Node key={node.id} {...node} />;
    //     <div>
    //       <li>
    //         <a>computers</a>
    //       </li>
    //       ;
    //     </div>;
    //   })}
    // </ul>
    <ul>
      {categories.map((category) => (
        <li key={category.key}>
          <Link href={category.url}>{category.name}</Link>
          {category.categories && category.categories.length > 0 && (
            <Nodes categories={category.categories} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Nodes;
