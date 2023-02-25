const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const apiPaths = {
    '/api': {
        target: 'http://localhost:8081',
        pathRewrite: {
            '^/api': '/api'
        },
        changeOrigin: true
    }
};

app
    .prepare()
    .then(() => {
        const server = express();

        if(dev){
            server.use('/api', createProxyMiddleware(apiPaths['/api']));
        }

        server.all('*', (req, res) => {
            return handle(req, res);
        })

        server.listen(port, (err) => {
            if(err) throw err;
            console.log(`==============================`)
            console.log(`Ready on localhost:${port}`)
            console.log(`==============================`)
        })
    })
    .catch((err) => {
        console.log('ERROR: ', err)
    });