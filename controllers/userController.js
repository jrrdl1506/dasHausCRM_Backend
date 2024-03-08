const User = require("../models/User");

// ALTAS USUARIOS
exports.addUser = async(req,res) =>{
    try{
        let user;
        user = new User(req.body);
        await user.save();
        res.send(user);
    }
    catch(error){
        console.log("Hubo un problema");
    }
}

// OBTENER TODOS LOS USUARIOS
exports.getUsers = async(req,res) => {
    try{
        const usuarios = await User.find();
        res.json(usuarios);
    }
    catch(error){
        console.log(error);
        res.status(500).res('Hubo un error');
    }
}


// AUTENTICAR UN USUARIO
exports.authUser = async(req,res)=> {
    const {username,password} = req.body;
    try{
        const user = await User.findOne({username,password});
        if(!user){
            res.status(404).json({msg:'No existe el usuario'});
        }
        else{
            res.json(user)
        }
        

    } 
    catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


// OBTENER UN USUARIO QUE COINCIDA
exports.getUserRegex = async (req, res) => {
    try {
    
        const palabra = req.query.palabra; 
        const regex = new RegExp('^' + palabra, 'i'); 
        const users = await User.find({ username: regex });

        res.status(200).json(users);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};

// OBTENER UN USUARIO
exports.getUser = async (req, res) => {
    try {
        // Palabra con la que quieres hacer la búsqueda
        const palabra = req.query.palabra; // Suponiendo que la palabra viene en el querystring

        // Realizar la consulta para encontrar el usuario cuyo nombre sea idéntico a la palabra dada
        const user = await UserModel.findOne({ nombre: palabra });

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        res.status(500).json({ error: 'Error al obtener usuario' });
    }
};

exports.deleteUser = async(req,res) =>{
    const userId = req.params.id;
    try{
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
        return res.status(404).send("Usuario no encontrado");
        }
        res.status(200).send("Usuario eliminado correctamente");
        }
    catch(err){
        console.error(err);
        res.status(500).send("Error al eliminar el usuario");
    }
}




