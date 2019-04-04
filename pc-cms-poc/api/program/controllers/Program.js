'use strict';

/**
 * Program.js controller
 *
 * @description: A set of functions called "actions" for managing `Program`.
 */

module.exports = {

  /**
   * Retrieve program records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.program.search(ctx.query);
    } else {
      return strapi.services.program.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a program record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.program.fetch(ctx.params);
  },

  /**
   * Count program records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.program.count(ctx.query);
  },

  /**
   * Create a/an program record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.program.add(ctx.request.body);
  },

  /**
   * Update a/an program record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.program.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an program record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.program.remove(ctx.params);
  }
};
