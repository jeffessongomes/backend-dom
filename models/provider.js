import { Sequelize, Model} from "sequelize";
import {db} from "../services/db";

class Provider extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        providerName: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
        },
        hour: {
          type: Sequelize.DATE,
          allowNull: false,
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
          allowNull: false,
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
          allowNull: false,
          defaultValue: "",
        },
        volumeType: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
        },
        isChecked: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        isReturned: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        isSchedule: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        idDriver: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: "",
        },
      },
      {
        sequelize,
        modelName: "provider",
      }
    );
  }

  /*
  static associate(models) {
    this.hasMany(models.Notes, { foreignKey: "provider_id", sourceKey: "id" });
  }
  */
}

export {Provider};
