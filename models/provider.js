import {Sequelize} from "sequelize";
import {db} from "../services/db";
import { WorkDay } from "./workDay";

export const Provider = db.define("provider", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  providerName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  hour: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: Sequelize.NOW,
  },
  idNotes: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "",
  },
  idWorkDay: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "",
  },
  quantity: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "",
  },
  isConfirmedByHeritage: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  isConfirmedByCPD: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  isConfirmedByArbitrator: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  loadType: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "",
  },
  volumeType: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "",
  },
  isChecked: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  isReturned: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  isSchedule: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  idDriver: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "",
  },
});
