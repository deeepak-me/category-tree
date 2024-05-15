// const categoriesData = {
//   categories: [
//     {
//       key: "electronics",
//       name: "Electronics",
//       url: "https://example.com/categories/electronics",
//     },
//     {
//       key: "computers",
//       name: "Computers",
//       url: "https://example.com/categories/computers",
//       categories: [
//         {
//           key: "laptops",
//           name: "Laptops",
//           url: "https://example.com/categories/computers/laptops",
//         },
//         {
//           key: "desktops",
//           name: "Desktops",
//           url: "https://example.com/categories/computers/desktops",
//         },
//       ],
//     },
//   ],
// };

// export default categoriesData;

const categoriesData = [
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
        categories: [
          {
            key: "MacBook",
            name: "MacBook",
            url: "https://example.com/categories/computers/laptops",
          },
          {
            key: "Azer",
            name: "Azer",
            url: "https://example.com/categories/computers/desktops",
          },
        ],
      },
      {
        key: "desktops",
        name: "Desktops",
        url: "https://example.com/categories/computers/desktops",
      },
    ],
  },
  {
    key: "Dresses",
    name: "Dresses",
    url: "https://example.com/categories/computers",
    categories: [
      {
        key: "Men",
        name: "Men",
        url: "https://example.com/categories/computers/laptops",
      },
      {
        key: "Women",
        name: "Women",
        url: "https://example.com/categories/computers/desktops",
      },
      {
        key: "Kids",
        name: "Kids",
        url: "https://example.com/categories/computers/desktops",
      },
    ],
  },
];

export default categoriesData;
