"use strict";
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.transactions.create(data, { files });
    } else {
      entity = await strapi.services.transactions.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.transactions });
  },
};
