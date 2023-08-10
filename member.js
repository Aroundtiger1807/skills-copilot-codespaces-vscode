function skillsMember() {
    return {
        restrictt: 'E',
        templateUrl: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        };
    }
}