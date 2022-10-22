'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [{
      nameRole: 'User',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Roles', [{
      nameRole: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Users', [{
      email: 'duongdoican@gmail.com',
      password: '$2a$12$RzZbZZG0ZWSXUeUYckoTXu53H.anMcpomtjdc5o0jp7glNIuQLCp6',
      status: 1,
      image: 2,
      roleId: 1,
      token: "",
      name: 'New User',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Users', [{
      email: 'nguyenhoangminh@gmail.com',
      password: '$2a$12$RzZbZZG0ZWSXUeUYckoTXu53H.anMcpomtjdc5o0jp7glNIuQLCp6',
      status: 1,
      image: 2,
      roleId: 2,
      token: "",
      name: 'New User',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Users', [{
      email: 'duongdoican1@gmail.com',
      password: '$2a$12$RzZbZZG0ZWSXUeUYckoTXu53H.anMcpomtjdc5o0jp7glNIuQLCp6',
      status: 1,
      image: 2,
      roleId: 1,
      token: "",
      name: 'New User',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
