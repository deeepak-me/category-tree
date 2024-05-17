"use client";

import React, { useEffect, useState } from "react";
import "./categories.css";
import Link from "next/link";
import { FaAngleDown, FaAngleRight, FaCircle } from "react-icons/fa";

const Categories = ({ categories }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (key) => {
    setOpenCategory(openCategory === key ? null : key);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.closest(".Container") === null) {
        setOpenCategory(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <ul className="nodes">
      {categories.map((category) => (
        <div className="Container">
          <li key={category.key}>
            <div className="category-container">
              <div className="category-item">
                {category.categories ? (
                  <span>
                    {openCategory === category.key ? (
                      <FaAngleDown className="category-icon arrow-down" />
                    ) : (
                      <FaAngleRight className="category-icon arrow-icon" />
                    )}
                  </span>
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
            </div>
            {category.categories &&
              openCategory === category.key &&
              category.categories.length > 0 && (
                <div className="subcategory-container">
                  <Categories categories={category.categories} />
                </div>
              )}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Categories;
