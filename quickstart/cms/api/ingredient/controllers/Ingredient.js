'use strict';

/**
 * Ingredient.js controller
 *
 * @description: A set of functions called "actions" for managing `Ingredient`.
 */

module.exports = {

  /**
   * Retrieve ingredient records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.ingredient.search(ctx.query);
    } else {
      return strapi.services.ingredient.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a ingredient record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.ingredient.fetch(ctx.params);
  },

  /**
   * Count ingredient records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.ingredient.count(ctx.query);
  },

  /**
   * Create a/an ingredient record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.ingredient.add(ctx.request.body);
  },

  /**
   * Update a/an ingredient record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.ingredient.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an ingredient record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.ingredient.remove(ctx.params);
  }
};
