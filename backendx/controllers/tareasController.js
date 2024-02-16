const getTareas = (req,res)  => {
    res.status(200).json({message: 'Get Tareas'})
}

const createTareas = (req,res)  => {
    res.status(201).json({message:'Create Tareas'})
}

const updateTareas = (req,res)  => {
    res.status(200).json({message:`Modificar la tarea con id ${req.params.id}`})
}

const deleteTareas = (req,res)  => {
    res.status(200).json({id:req.params.id})
}

module.exports = {
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}