
exports.up = function (knex, Promise) {
      return knex.schema.createTable('articles', table => {
            table.increments('id').primary();
            table.string('name').notNull();
            table.string('description', 1000).notNull();
            table.integer('parentId').references('id').inTable('categories');
      });
};

exports.down = function (knex, Promise) {
      return knew.schema.dropTable('articles');
};
