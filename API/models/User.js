// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

import { prisma } from "../lib/prisma.js";

const createUser = async (data) => {
  try {
    const user = await prisma.user.create({
      data: data,
    });
    console.log("Created user:", user);
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
};

export default { createUser };

// import { Model, DataTypes } from 'sequelize';
// import sequelize from '../config/connection.js';

// // public class fields of the same name as the model's attribute = causes errors
// class User extends Model {}

// User.init ({
//     // Define model attributes
//     roleId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         defaultValue: 2, // default roleID for normal users (not admins)
//     },
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },

// }, {
//     // Sequelize instance:
//     sequelize,
//     freezeTableName: true,
//     tableName: "users",
//     modelName: "User",
//     timestamps: false,
// });

// // the defined model is the class itself - optional line ofc
// console.log(User === sequelize.models.User);

// export default User;
