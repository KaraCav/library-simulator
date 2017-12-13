module.exports = {
  getAllUsers: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance
      .get_all_users()
      .then(users => res.status(200).json(users))
      .catch(() => res.status(500).json());
  }
};
