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
              <Link
                href={category.url}
                onClick={() => toggleCategory(category.key)}
                className="name"
              >
                {category.name}
              </Link>
            </div>
            {category.categories &&
              openCategories.includes(category.key) &&
              category.categories.length > 0 && (
                <div className="subcategory-container">
                  <Nodes categories={category.categories} />
                </div>
              )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Nodes;
