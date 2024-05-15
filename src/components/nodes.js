import React from "react";
import styles from "./nodes.module.css";

const Node = {};

const Nodes = ({ nodes }) => {
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
    <ul className={styles.nodes}>
      <li>
        <a>Computers</a>
      </li>
    </ul>
  );
};

export default Nodes;
