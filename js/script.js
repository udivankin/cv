var cvApp = angular.module('cvApp', []);

cvApp.controller('CvCtrl', function ($scope) {

    $scope.model = {
        birthday: new Date('1983-02-20'),
        experience: {
            languages: [
                {label: 'PHP', active: true, ratio: '60'},
                {label: 'JS (+Node.js)', active: true, ratio: '65'},
                {label: 'HTML5', active: true, ratio: '80'},
                {label: 'CSS3 (+LESS/SASS)', active: true, ratio: '75'},
                {label: 'SQL (MySQL, MSSQL, SQLite)', active: true, ratio: '60'},
                {label: 'ASP.NET (Sharepoint, Web Forms)', active: false, ratio: '30'}
            ],
            tools: [
                {label: 'NetBeans', active: true, ratio: '70'},
                {label: 'Adobe Photoshop', active: false, ratio: '80'},
                {label: 'MS Visual Studio', active: false, ratio: '30'},
                {label: 'git (GitHub, Bitbucket)', active: true, ratio: '60'},
                {label: 'kanban, CI, Scrum', active: true, ratio: '50'},
                {label: 'StackOverflow', active: true, ratio: '99'}
            ],
            frameworks: [
                {label: 'jQuery', active: false, ratio: '75'},
                {label: 'AngularJS', active: true, ratio: '60'},
                {label: 'Node.Js', active: true, ratio: '55'},
                {label: 'CMS/CMF: WolfCMS, Wordpress, Drupal', active: false, ratio: '50'},
                {label: 'CodeIgniter', active: false, ratio: '40'},
                {label: 'YII', active: true, ratio: '75'},
                {label: 'Laravel', active: true, ratio: '25'},
                {label: 'Bootstrap, Foundation', active: true, ratio: '70'},
                {label: 'SASS (Compass, Kraken, Furatto)', active: true, ratio: '30'}
            ]
        }

    };

    $scope.calculateAge = function calculateAge() { // birthday is a date
        var ageDate = new Date(Date.now() - $scope.model.birthday.getTime()); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

});