(function () {
    var controllerId = 'app.views.layout.sidebarNav';
    angular.module('app').controller(controllerId, [
        '$rootScope', '$state', 'appSession',
        function ($rootScope, $state, appSession) {
            var vm = this;

            vm.menuItems = [
                createMenuItem(App.localize("HomePage"), "", "home", "home"),
                createMenuItem(App.localize("Tenants"), "Pages.Tenants", "business", "tenants"),
                createMenuItem(App.localize("Users"), "Pages.Users", "people", "users"),
                createMenuItem(App.localize("Roles"), "Pages.Roles", "local_offer", "roles"),
                createMenuItem(App.localize("About"), "", "mail", "about"),
                createMenuItem(App.localize("Calendar"), "", "content_paste", "calendar"),
                createMenuItem(App.localize("Wteam"), "", "people", "wteam"),

                createMenuItem(App.localize("VolunteerMenu"), "", "menu", "", [
                    createMenuItem("Volunteer Tracker", "", "", "", [
                        createMenuItem("Home", "", "", "https://gcustomair.appspot.com"),
                        createMenuItem("Templates", "", "", "https://gcustomair.appspot.com"),
                        createMenuItem("Samples", "", "", "https://gcustomair.appspot.com"),
                        createMenuItem("Documents", "", "", "https://gcustomair.appspot.com")
                    ]),
                    createMenuItem("Worship", "", "", "", [
                        createMenuItem("Home", "", "", "https://gcustomair.appspot.com"),
                        createMenuItem("Description", "", "", "https://gcustomair.appspot.com"),
                        createMenuItem("Features", "", "", "https://gcustomair.appspot.com"),
                        createMenuItem("Pricing", "", "", "https://gcustomair.appspot.com"),
                        createMenuItem("Faq", "", "", "https://gcustomair.appspot.com"),
                        createMenuItem("Documents", "", "", "https://gcustomair.appspot.com")
                    ])
                ])
            ];

            vm.showMenuItem = function (menuItem) {
                if (menuItem.permissionName) {
                    return abp.auth.isGranted(menuItem.permissionName);
                }

                return true;
            }

            function createMenuItem(name, permissionName, icon, route, childItems) {
                return {
                    name: name,
                    permissionName: permissionName,
                    icon: icon,
                    route: route,
                    items: childItems
                };
            }
        }
    ]);
})();