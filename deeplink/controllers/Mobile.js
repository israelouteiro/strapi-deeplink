'use strict'; 

const config = () => { return strapi.plugins.deeplink.config }
const { sanitizeEntity } = require('strapi-utils'); 

module.exports = {
    deeplink: async (ctx) => {
        const { params: params, state: { user: user }, request: { body: body, query: query, header } } = ctx;
        ctx.redirect(`${ config().APP_DEEPLINK }${ query.redirect }`);
    }, 
    store: async (ctx) => {
        const { params: params, state: { user: user }, request: { body: body, query: query, header} } = ctx;
        let ua = header['user-agent']; 
        if (ua != null && ( ua.indexOf("iPhone") !== -1 || ua.indexOf("iPad") !== -1 || ua.indexOf("iPod") !== -1 || ua.indexOf("Macintosh") !== -1 ) ){ 
            ctx.redirect(`${ config().STORE_APPLE }`);
        } else {
            ctx.redirect(`${ config().STORE_GOOGLE }`);
        }
    },
};
