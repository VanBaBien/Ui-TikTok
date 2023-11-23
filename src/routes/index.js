import routesConfig from '~/config/routes';

import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Folowing from '~/pages/Folowing';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/components/Layout/components/Search';
//public routes
const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.folowing,
        component: Folowing,
    },
    {
        path: routesConfig.profile,
        component: Profile,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.search,
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
