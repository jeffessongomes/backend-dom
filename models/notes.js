import {Sequelize, Model} from "sequelize";
import {Provider} from "./provider";

class Notes extends Model {
    static init(sequelize) {
      super.init({
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        numberNote: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        idProvider: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: Provider,
            key: 'id'
          }
        }
      }, {
        sequelize,
        modelName: 'notes'
      });
      
      /*

      Notes.belongsTo(Provider, { foreignKey: 'idProvider', targetKey: 'id' });
      */
      return this;
    }
    
    static async sync() {
      await this.sync({force: true});
    }
  }

export { Notes };