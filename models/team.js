'use strict';
module.exports = (sequelize, DataTypes) => {
  var Team = sequelize.define('Team', {
    nama: DataTypes.STRING,
    id_ketua: DataTypes.INTEGER
  }, {
    // hooks: {
    //   afterCreate(team, options){
    //     models.UserTeam.create({
    //       teamId = team.id,
    //       userId = 0,
    //       position = "1"
    //     })
    //     models.UserTeam.create({
    //       teamId = team.id,
    //       userId = 0,
    //       position = "2"
    //     })
    //     models.UserTeam.create({
    //       teamId = team.id,
    //       userId = 0,
    //       position = "3"
    //     })
    //     models.UserTeam.create({
    //       teamId = team.id,
    //       userId = 0,
    //       position = "4"
    //     })
    //     models.UserTeam.create({
    //       teamId = team.id,
    //       userId = 0,
    //       position = "5"
    //     })
    //   }
    // }
    hooks: {
      beforeSave: (user, option) => {
        let userteam = model.UserTeam.build({
          TeamId: user.id,
          UserId: req.session.user.position,
          position: req.session.user.position
        })
        userteam.save();
      }
    }
  });
  Team.associate = function(models) {
    // associations can be defined here
    Team.belongsToMany(models.User, {
      through: models.UserTeam
    })

    Team.hasMany(models.UserTeam)

    Team.hasMany(models.Invitation)

    Team.belongsTo(models.User, {
      foreignKey: "id_ketua",
      as: 'ketua'
    })
  };
  return Team;
};
