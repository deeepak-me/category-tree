const categoriesData = {
  categories: [
    {
      key: "electronics",
      name: "Electronics",
      url: "https://example.com/categories/electronics",
    },
    {
      key: "computers",
      name: "Computers",
      url: "https://example.com/categories/computers",
      categories: [
        {
          key: "laptops",
          name: "Laptops",
          url: "https://example.com/categories/computers/laptops",
        },
        {
          key: "desktops",
          name: "Desktops",
          url: "https://example.com/categories/computers/desktops",
        },
      ],
    },
  ],
};

export default categoriesData;
