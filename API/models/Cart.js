import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";
import CoffeeBean from "./CoffeeBean.js";
import UserDetails from "./UserDetails.js";

class Cart extends Model {}

Cart.init(
  {
    beanType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    beanAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // userAddress: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    beanPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "Cart",
    tableName: "cart",
    timestamps: false,
  }
);

export default Cart;