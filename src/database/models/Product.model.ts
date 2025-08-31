import {
  Table, Column, Model, DataType, Default,
  AllowNull, PrimaryKey, AutoIncrement
} from "sequelize-typescript";

@Table({
  tableName: "Products",
  timestamps: false,
})
export class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  product_id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  product_name!: string;

  @Column(DataType.TEXT)
  product_desc?: string;

  @Default("Draft")
  @Column(DataType.ENUM("Draft", "Published", "Archived"))
  status!: string;

  @AllowNull(false)
  @Column(DataType.STRING(50))
  created_by!: string;

  @Default(DataType.NOW)
  @Column(DataType.DATE)
  created_at!: Date;

  @Column(DataType.STRING(50))
  updated_by?: string;

  @Default(DataType.NOW)
  @Column(DataType.DATE)
  updated_at!: Date;

  @Default(false)
  @Column(DataType.BOOLEAN)
  is_deleted!: boolean;
}
