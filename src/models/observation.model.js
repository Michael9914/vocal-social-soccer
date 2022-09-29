const observations =(sequelize, type) =>{
    return sequelize.define('observations', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        stadium: type.STRING, 
        observation_team1: type.STRING,
        observation_team2: type.STRING,
        match_id: type.INTEGER,

        createObservations:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateObservations:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = observations