import components from "../components/components";
import routers from "./const";

export const publicRouter = [

    {
        path: routers.LOGIN_ROUTER,
        component: components.Login
    },

    {
        path: routers.REGISTRATION_ROUTER,
        component: components.Registration
    }
]
export const privetRouter = [

    {
      
    }
]