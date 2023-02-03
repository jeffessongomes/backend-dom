import { Sequelize } from "sequelize";
import { Notes } from "../models/notes";
import { Provider as ProviderClass} from "../models/provider";

const Provider = new ProviderClass(Sequelize);

export async function createProvider(providerData) {
  try {
    const provider = await Provider.create(providerData);
    return provider;
  } catch (error) {
    throw error;
  }
}

export async function getAllProviders() {
  try {
    const providers = await Provider.findAll({ include: [Notes] });
    return providers;
  } catch (error) {
    throw error;
  }
}

export async function getProviderById(id) {
  try {
    const provider = await Provider.findByPk(id, { include: [Notes] });
    return provider;
  } catch (error) {
    throw error;
  }
}

export async function updateProvider(id, providerData) {
  try {
    const [updated] = await Provider.update(providerData, {
      where: { id: id },
      returning: true,
    });
    if (updated) {
      const updatedProvider = await Provider.findByPk(id);
      return updatedProvider;
    }
    return null;
  } catch (error) {
    throw error;
  }
}

export async function deleteProvider(id) {
  try {
    const deleted = await Provider.destroy({
      where: { id: id },
    });
    return deleted;
  } catch (error) {
    throw error;
  }
}
