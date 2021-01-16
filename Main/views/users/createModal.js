(function () {
    angular.module('app').controller('app.views.wteam.createModal', [
        '$scope', '$uibModalInstance', 'abp.services.app.wteam',
        function ($scope, $uibModalInstance, userService) {
            var vm = this;

            vm.user = {
                isActive: true
            };

            vm.roles = [];

            function getRoles() {
                userService.getRoles()
                    .then(function (result) {
                        vm.roles = result.data.items;
                    });
            }

            vm.save = function () {
                var assingnedRoles = [];

                for (var i = 0; i < vm.roles.length; i++) {
                    var role = vm.roles[i];
                    if (!role.isAssigned) {
                        continue;
                    }

                    assingnedRoles.push(role.name);
                }

                vm.user.roleNames = assingnedRoles;
                userService.create(vm.user)
                    .then(function () {
                        abp.notify.info(App.localize('SavedSuccessfully'));
                        $uibModalInstance.close();
                    });
            };

            vm.cancel = function () {
                $uibModalInstance.dismiss({});
            };

            getRoles();
        }
    ]);
})();