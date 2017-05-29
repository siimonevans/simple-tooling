'use strict';
/**
 * @module BrowserSync.options
 */
module.exports = {
    server: 'dist',
    startPath: '/html/',
    open: false,
    snippetOptions: {
        async: true,
        whitelist: [],
        blacklist: [],
        rule: {
            match: /<body[^>]*>/i,
            fn: function (snippet, match) {
                return match + snippet;
            }
        }
    },
};
