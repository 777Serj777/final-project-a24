import mapRouter from './mapRouter';
import Login from './../Login/Login';
import Registration from './../Registration/Registration';
import { Redirect } from 'react-router';

const authRouter = [

    {
        path: mapRouter.LOGIN_ROUTER,
        component: Login,
    
    },
    {
        path: mapRouter.REGISTRATION_ROUTER,
        component: Registration,
      
    },
    {
        path: '*',
        component: <Redirect to = {mapRouter.DEFAULT_ROUTER}/>,
      
    },
    
]


export default authRouter;

