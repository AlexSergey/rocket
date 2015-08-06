var _ = require('lodash');

var environment = [
    {
        developer: 'Sergey',
        client: 'http://localhost:3000',
        backend: 'http://localhost:8000'
    }
];

if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

var Env =  _.find(environment, {
    client: window.location.origin
});

module.exports = {
    links: {
        works: [
            'api/works',
            '_id'
        ],
    },

    getLink(linkName) {
        if (this.links[linkName]) {
            return {
                link: Env.backend + '/' + this.links[linkName][0],
                param: this.links[linkName][1]
            }
        }
    },

    getEnv() {
        return Env;
    }
}