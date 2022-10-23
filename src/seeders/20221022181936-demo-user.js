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
    await queryInterface.bulkInsert('Genders', [{
      name: '(none)',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Genders', [{
      name: 'Male',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Genders', [{
      name: 'Female',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Addresses', [{
      name: '(none)',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Addresses', [{
      name: 'Ha Noi',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Addresses', [{
      name: 'Sai Gon',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Users', [{
      email: 'duongdoican@gmail.com',
      password: '$2a$12$RzZbZZG0ZWSXUeUYckoTXu53H.anMcpomtjdc5o0jp7glNIuQLCp6',
      status: 1,
      image: 2,
      RoleId: 1,
      token: "",
      name: 'New User',
      GenderId: 1,
      AddressId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '$2a$12$RzZbZZG0ZWSXUeUYckoTXu53H.anMcpomtjdc5o0jp7glNIuQLCp6',
      status: 1,
      image: 1,
      RoleId: 2,
      GenderId: 1,
      token: "",
      name: 'New User',
      AddressId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Users', [{
      email: 'nguyenhoangminh@gmail.com',
      password: '$2a$12$RzZbZZG0ZWSXUeUYckoTXu53H.anMcpomtjdc5o0jp7glNIuQLCp6',
      status: 1,
      image: 2,
      RoleId: 1,
      token: "",
      name: 'New User',
      GenderId: 1,
      AddressId: 1,
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

    await queryInterface.bulkDelete('Roles', null, { where: { nameRole: 'User' } });
    await queryInterface.bulkDelete('Roles', null, { where: { nameRole: 'Admin' } });
    await queryInterface.bulkDelete('Genders', null, { where: { name: '(none)' } });
    await queryInterface.bulkDelete('Genders', null, { where: { name: 'Male' } });
    await queryInterface.bulkDelete('Genders', null, { where: { name: 'Female' } });
    await queryInterface.bulkDelete('Addresses', null, { where: { name: 'Ha Noi' } });
    await queryInterface.bulkDelete('Addresses', null, { where: { name: 'Sai Gon' } });

  }
};
