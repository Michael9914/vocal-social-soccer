const expulsions =(sequelize, type) =>{
    return sequelize.define('expulsions', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },


        player_name: type.STRING,
        player_number: type.INTEGER,
        team_name: type.STRING,
        
        createExpulsions:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateExpulsions:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = expulsions