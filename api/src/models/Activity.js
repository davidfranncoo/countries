const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('Activity', {

        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        dificultad:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        duracion:{
            type:DataTypes.INTEGER,
          
        },
        temporada:{
            //! controlar el datatype porque era ENUM
           type:DataTypes.STRING, 
            allowNull:false,
        }
    });
};
