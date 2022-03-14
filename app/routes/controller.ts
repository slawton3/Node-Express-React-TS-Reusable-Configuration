import { IRoutes } from '../types/interfaces';
import { Router } from 'express';

export default abstract class Controller {
    // Router instance for mapping routes
    public router: Router = Router();
    // The path on which this.routes will be mapped
    public abstract path: string;
    // Array of objects which implement IRoutes interface
    protected abstract readonly routes: Array<IRoutes>;

    public setRoutes = (): Router => {
        // Set HTTP method, middleware, and handler for each route
        // Returns Router object, which we will use in Server class 
        for(const route of this.routes) {
            for(const mw of route.localMiddleware) {
                this.router.use(route.path, mw);
            }
            switch (route.method) {
                case 'GET':
                    this.router.get(route.path, route.handler);
                    break;
                case 'POST':
                    this.router.post(route.path, route.handler);
                    break;
                case 'PUT':
                    this.router.put(route.path, route.handler);
                    break;
                case 'DELETE':
                    this.router.delete(route.path, route.handler);
                    break;
                default:
                    //throw exception
            }
        }
        // Return router instance (will be usable in Server class)
        return this.router;
    }
}