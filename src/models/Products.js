import mongoose from "mongoose";
import paginate from "./plugins/paginate.plugin.js";

const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: 255,
    },
    desc: {
      type: String,
      maxLength: 500,
    },
    images: [
      {
        type: String,
        maxLength: 255,
      },
    ],
    price: {
      type: Number,
    },
    gender: {
      type: String,
      maxLength: 25,
    },
    slug: {
      type: String,
      maxLength: 255,
    },
    rating: {
      type: Number,
      default: 0,
    },
    id_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "caregories",
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
    updateAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: "Products",
    versionKey: false,
  }
);

productsSchema.plugin(paginate);
const Products = mongoose.model("Products", productsSchema);

export default Products;
