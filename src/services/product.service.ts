import { Product } from "../database/models/Product.model";

export class ProductService {
  static async createProduct(data: Partial<Product>) {
    return await Product.create(data as any);
  }

  static async getProducts() {
    return await Product.findAll({ where: { is_deleted: false } });
  }

  static async updateProduct(id: number, data: Partial<Product>) {
    return await Product.update(data, { where: { product_id: id } });
  }

  static async softDeleteProduct(id: number, updated_by: string) {
    return await Product.update(
      { is_deleted: true, updated_by },
      { where: { product_id: id } }
    );
  }
}
