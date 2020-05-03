import { createProxyMiddleware } from 'http-proxy-middleware'

module.exports = (app) => {
	app.use(createProxyMiddleware({ target: 'https://front-test.beta.aviasales.ru', changeOrigin: true }))
}
