"use strict";
const { Model } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
  class MicroPost extends Model {}


  MicroPost.init(
    {
      content: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
      fileName: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "MicroPost",
    }
  );


  MicroPost.associate = (models) => {
    // associations can be defined here
  };


  return MicroPost;
};