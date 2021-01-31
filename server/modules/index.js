import auth from './auth';

const apiPrefix = '/api/v1';

const routes = (app) => {
    app.use(apiPrefix,auth)
}
export default routes;