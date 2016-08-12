"use strict";
var router_1 = require('@angular/router');
var personne_component_1 = require('./personne.component');
var dashboard_component_1 = require('./dashboard.component');
var appRoutes = [
    {
        path: 'personnes',
        component: personne_component_1.PersonneComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map