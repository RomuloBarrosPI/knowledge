module.exports = app => {
      app.route('/users')
      .post(app.api.users.save)
      .get(app.api.users.get);

      app.route('/users/:id')
      .put(app.api.users.save);
      
      app.route('/users/:id')
      .get(app.api.users.getByID);
};