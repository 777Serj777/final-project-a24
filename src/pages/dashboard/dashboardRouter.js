import mapRouter from './mapRouter';
import { Redirect } from 'react-router-dom';
import Header from '../../components/header/Header';
import Users from './users/Users';
import Setting from './setting/Setting';

const dashboardRouter = [

    {
        path: mapRouter.MAIN_ROUTER,
        component: <Header/>,
        expect: true      
    },
    {
        path: mapRouter.SEARCH_ROUTER,
        component: <Users/>,     
        expect: true   
    },
    {
        path: mapRouter.SETTING_ROUTER,
        component: <Setting/>,     
        expect: true   
    },
    {
        path: '*',
        component: <Redirect to = {mapRouter.DEFAULT_ROUTER}/> ,   

    },
    
]

export default dashboardRouter;
