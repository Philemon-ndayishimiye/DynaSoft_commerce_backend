'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.addColumn('Users','role',{
      type:Sequelize.ENUM('user','admin','seller'),
      allowNull:false,
    })
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn('Users', 'role' )
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
