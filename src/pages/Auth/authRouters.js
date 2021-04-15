import mapRouter from './mapRouter';
import Login from '../login/login';
import Registration from '../registration/Registration';
import { Redirect } from 'react-router';

const authRouter = [

    {
        path: mapRouter.LOGIN_ROUTER,
        component: <Login/>   
    },
    {
        path: mapRouter.REGISTRATION_ROUTER,
        component: <Registration/>     
    },
    {
        path: '*',
        component: <Redirect to = {mapRouter.DEFAULT_ROUTER}/>     
    },
    
]

export default authRouter;




