import mapRouter from './mapRouter';
import Login from './login/login';
import Registration from './registration/Registration';
import { Redirect } from 'react-router-dom';

const authRouter = [

    {
        path: mapRouter.LOGIN_ROUTER,
        component: <Login/>,
        expect: true  
    },
    {
        path: mapRouter.REGISTRATION_ROUTER,
        component: <Registration/>,
         expect: true      
    },
    {
        path: '*',
        component: <Redirect to = {mapRouter.DEFAULT_ROUTER}/>     
    },
    
]

export default authRouter;




