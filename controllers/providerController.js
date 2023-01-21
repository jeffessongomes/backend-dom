import {Provider} from "../models/provider";

export const getAllProviders = async (req, res) => {
  try {
    const providers = await Provider.findAll();
    res.send(providers);
  } catch (err) {
    res.status(500).send("Erro ao buscar providers");
  }
};

export const getProvider = async (req, res) => {
  try {
    const { id } = req.params;
    const provider = await Provider.findByPk(id);
    if (!provider) res.status(404).send("Provider não encontrado");
    else res.send(provider);
  } catch (err) {
    res.status(500).send("Erro ao buscar provider");
  }
};

export const createProvider = async (req, res) => {
  try {
    const provider = await Provider.create(req.body);
    res.status(201).send(provider);
  } catch (err) {
    res.status(500).send("Erro ao criar provider");
  }
};

export const updateProvider = async (req, res) => {
  try {
    const { id } = req.params;
    const provider = await Provider.findByPk(id);
    if (!provider) res.status(404).send("Provider não encontrado");
    else {
      await provider.update(req.body);
      res.send({ message: "Provider atualizado com sucesso" });
    }
  } catch (err) {
    res.status(500).send("Erro ao atualizar provider");
  }
};

export const deleteProvider = async (req, res) => {
  try {
    const { id } = req.params;
    const provider = await Provider.findByPk(id);
    if (!provider) res.status(404).send("Provider não encontrado");
    else {
      await provider.destroy();
      res.send({ message: "Provider deletado com sucesso" });
    }
  } catch (err) {
    res.status(500).send("Erro ao deletar provider");
  }
};
