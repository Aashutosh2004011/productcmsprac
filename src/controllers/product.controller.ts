import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

export class ProductController {
  static async create(req: Request, res: Response) {
    console.log("🚀 ~ ProductController ~ create ~ req:", req)
    try {
      console.log("🚀 ~ ProductController ~ create ~ req.body:", req.body)

      const product = await ProductService.createProduct(req.body);
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create product" });
    }
  }

  static async list(req: Request, res: Response) {
    try {
      const products = await ProductService.getProducts();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const [updated] = await ProductService.updateProduct(Number(req.params.id), req.body);
      updated
        ? res.json({ message: "Product updated" })
        : res.status(404).json({ error: "Product not found" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update product" });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { updated_by } = req.body;
      const [updated] = await ProductService.softDeleteProduct(Number(req.params.id), updated_by);
      updated
        ? res.json({ message: "Product soft deleted" })
        : res.status(404).json({ error: "Product not found" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete product" });
    }
  }
}
