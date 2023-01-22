import {Sequelize, hasOne} from "sequelize";
import { db } from "../services/db";

export const WorkDay = db.define("workDay", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  idProvider: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'providers',
      key: 'id'
    }
  }
});

WorkDay.sync();