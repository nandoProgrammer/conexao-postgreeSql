const database = require('../models');

class PessoaController{
    static async getAllPeople(req, res){
        try{
            const allPeople = await database.Pessoas.findAll()
            return res.status(200).json(allPeople)
        }catch(error){
            return res.status(500).json(error.message)
        }
       
    }

    static async getPeopleById(req, res){
        const { id } = req.params

        try{
            const onePeople = await database.Pessoas.findOne({ 
                where: { id: Number(id) } 
            })
            return res.status(200).json(onePeople);
        }catch(error){
            res.status(500).json(error.message)
        }
    }

    static async createPeople(req, res){
        const newPeople = req.body;
        try{
            const newPeopleCreate = await database.Pessoas.create(newPeople)
            return res.status(200).json(newPeople, {
                where: {
                   id: Number(id)
                }
        })
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updatePeople(req, res){
        const { id } = req.params;
        const updatePeople = req.body;
        try{
            await database.Pessoas.update(updatePeople)
            const onePeople = await database.Pessoas.findOne({ 
                where: { id: Number(id) } 
            })
            return res.status(200).json(onePeople);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async deletePeople(req, res){

        try{
            await database.Pessoas.destroy({ where: { id: Number(id) } })
            return res.sttaus(200).json({message: `id ${id} deletado`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController