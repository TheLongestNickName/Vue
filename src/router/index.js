import Product from "@/components/ShowProduct";
import ProductList from "@/components/ProductList";
import E404 from "@/components/ErrorPage";

export default [
  { name: "products", path: "/", component: ProductList },
  {
    name: "products-item",
    path: "/product/:id",
    component: Product,
  },
  {
    name: "E404",
    path: "/:pathMatch(.*)",
    component: E404,
  },
];
