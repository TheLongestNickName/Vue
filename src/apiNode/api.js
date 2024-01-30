const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const products = [
  {
    id: 1,
    tittle: "Oil",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    price: 79,
    length: 100,
    width: 2,
    category: "Oil",
  },
  {
    id: 2,
    tittle: "Camera",
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: 219,
    length: 13,
    width: 3,
    category: "Camera",
  },
  {
    id: 3,
    tittle: "Makeup",
    image:
      "https://media.istockphoto.com/id/487770577/photo/makeup-set-on-table-front-view.jpg?s=612x612&w=0&k=20&c=IS_ZuHCF3N66jhDMwt2s7J_PGWABlpv2ISEAwpJ4JKU=",
    price: 34,
    length: 10,
    width: 51,
    category: "Makeup",
  },
  {
    id: 4,
    tittle: "Product 4",
    image:
      "https://img.freepik.com/free-photo/gua-sha-care-products-arrangement_23-2149322589.jpg",
    price: 57,
    length: 8,
    width: 78,
    category: "Product 4",
  },
  {
    id: 5,
    tittle: "Wrist watch",
    image: "https://fcity.in/images/products/200854917/hnd8w_256.jpg",
    price: 44,
    length: 109,
    width: 54,
    category: "Wrist watch",
  },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
