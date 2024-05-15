"use client";

import React, { useState } from "react";
import "./nodes.css";
import Link from "next/link";
import { FaAngleDown, FaAngleRight, FaCircle } from "react-icons/fa";

const Node = {};

const Nodes = ({ categories }) => {
  const [openCategories, setOpenCategories] = useState([]);

  const toggleCategory = (key) => {
    if (openCategories.includes(key)) {
      setOpenCategories(openCategories.filter((item) => item !== key));
    } else {
      setOpenCategories([...openCategories, key]);
    }
  };
  return (
    <ul className="nodes">
      {categories.map((category) => (
        <div className="Container">
          <li key={category.key}>
            <div className="category-container">
              <div className="category-item">
                {category.categories ? (
                  openCategories.includes(category.key) ? (
                    <FaAngleDown className="category-icon arrow-down" />
                  ) : (
                    <FaAngleRight className="category-icon arrow-icon" />
                  )
                ) : (
                  <FaCircle className="category-icon circle-icon" />
                )}
                {category.categories ? (
                  <span
                    className="name"
                    onClick={() => toggleCategory(category.key)}
                  >
                    {category.name}
                  </span>
                ) : (
                  <Link href={category.url} className="name">
                    {category.name}
                  </Link>
                )}
              </div>
              {/* {category.categories &&
              openCategories.includes(category.key) &&
              category.categories.length > 0 && (
                <div className="subcategory-container">
                  <Nodes categories={category.categories} />
                </div>
              )} */}
            </div>
            {category.categories &&
              openCategories.includes(category.key) &&
              category.categories.length > 0 && (
                <div className="subcategory-container">
                  <Nodes categories={category.categories} />
                </div>
              )}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Nodes;
