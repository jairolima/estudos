module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'estudos',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
