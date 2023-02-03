import { WorkDay } from '../models/workDay';

WorkDay.sync();

export const createWorkDay = async (req, res) => {
  try {
    const { data, idProvider } = req.body;
    const workDay = await WorkDay.create({ data, idProvider });
    res.status(201).send(workDay);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getAllWorkDays = async (req, res) => {
  try {
    const workDays = await WorkDay.findAll();
    res.send(workDays);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getWorkDayById = async (req, res) => {
  try {
    const { id } = req.params;
    const workDay = await WorkDay.findByPk(id);
    if (!workDay) res.status(404).send('WorkDay not found');
    else res.send(workDay);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const updateWorkDayById = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await WorkDay.update(req.body, { where: { id } });
    if (!updated) res.status(404).send('WorkDay not found');
    else {
      const updatedWorkDay = await WorkDay.findByPk(id);
      res.send(updatedWorkDay);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};


export const deleteWorkDayById = async (req, res) => {
    try {
        const { id } = req.params;
        const workDayToDelete = await WorkDay.findByPk(id);
        if (!workDayToDelete) {
            res.status(404).send({ error: 'WorkDay not found' });
        } else {
            await workDayToDelete.destroy();
            res.status(200).send({ message: 'WorkDay deleted successfully' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Error deleting WorkDay' });
    }
}