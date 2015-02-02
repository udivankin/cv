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
        },
        recentWorks: [
            {
                title: {
                    ru: 'фициальный сайт известного hip-hop исполнителя Смоки Мо',
                    en: 'Offical website for famous Russian hip-hop artist - Smoky Mo'
                },
                image: 'smokymo.jpg',
                desc: {
                    ru: 'WolfCMS, CSS3+XHTML верстка, разработка модулей CMF, SEO',
                    en: 'WolfCMS, CSS3+XHTML, CMF module developement, SEO'
                },
                url: 'http://smokymo.ru'
            },
            {
                title: {
                    ru: 'Сайт крупнейшего в Самаре Wellness-центра',
                    en: 'Website for the Wellness center'
                },
                image: 'wellness.jpg',
                desc: {
                    ru: 'WolfCMS, CSS3+XHTML, jQuery',
                    en: 'WolfCMS, CSS3+XHTML, jQuery'
                },
                url: 'http://wellness.mega-samara.ru'
            },
            {
                title: {
                    ru: 'Внутренний портал компании',
                    en: 'Corporate intranet website'
                },
                image: 'viktorco.jpg',
                desc: {
                    ru: 'Sharepoint 2007, ASP.Net, MSSQL, jQuery, дизайн, CSS3, интеграция с поставщиками данных из внешних источников (MSSQL, MySQL, XML, JSON)',
                    en: 'Sharepoint 2007, ASP.Net, MSSQL, jQuery, design, CSS3, misc. data sources (MSSQL, MySQL, XML, JSON)'
                },
                url: ''
            },
            {
                title: {
                    ru: 'Внутренний сайт технической поддержки',
                    en: 'Corporate intranet helpdesk'
                },
                image: 'helpdesk.jpg',
                desc: {
                    ru: 'Sharepoint 2007, ASP.Net, MSSQL, jQuery, дизайн, CSS3, интеграция с СЭД &laquo;DocsVision&raquo;',
                    en: 'Sharepoint 2007, ASP.Net, MSSQL, jQuery, design, CSS3, workflow software &laquo;DocsVision&raquo; integration'
                },
                url: ''
            },
            {
                title: {
                    ru: 'Рабочее место руководителя',
                    en: 'Senior management web-portal'
                },
                image: 'workspace1.jpg',
                desc: {
                    ru: 'YII + jQuery Mobile, разработка, CSS3 + HTML5 верстка и дизайн',
                    en: 'YII + jQuery Mobile developement, CSS3 + HTML5, design'
                },
                url: ''
            },
            {
                title: {
                    ru: 'Рабочее место руководителя',
                    en: 'Senior management web-portal'
                },
                image: 'workspace2.jpg',
                desc: {
                    ru: 'Источники данных MSSQL, MySQL, XML, JSON, разработка провайдера аутентификации LDAP, интеграция с СЭД &laquo;DocsVision&raquo;',
                    en: 'YII + jQuery Mobile developement, CSS3 + HTML5, design'
                },
                url: ''
            },
            {
                title: {
                    ru: 'Фотоблог',
                    en: 'Photo blog'
                },
                image: 'ukushu.jpg',
                desc: {
                    ru: 'Форк opensource системы Pixelpost: разработка шаблона XHTML+CSS, миграция с Prototype на jQuery',
                    en: 'Pixelpost CMS fork: XHTML+CSS template, migrate from Prototype to jQuery, almost completely rewritten backend'
                },
                url: 'http://www.ukushu.com'
            },
            {
                title: {
                    ru: 'Сайт крупнейшего в поволжье аквапарка',
                    en: 'Website for the largest aqua park in Volga`s region'
                },
                image: 'aquapark.jpg',
                desc: {
                    ru: 'WolfCMS, CSS+XHTML, jQuery',
                    en: 'WolfCMS, CSS+XHTML, jQuery'
                },
                url: 'http://aquapark-samara.ru'
            },
            {
                title: {
                    ru: 'Интернет-система сервиса для арендаторов ТЦ',
                    en: 'CRM for leaseholders'
                },
                image: 'issa.jpg',
                desc: {
                    ru: 'CodeIgniter, дизайн, CSS+XHTML верстка, MySQL, jQuery, обмен данными с 1C и MSSQL',
                    en: 'CodeIgniter, design, CSS+XHTML, MySQL, jQuery, data exchange w / 1C (the most common accounting software in Russia) and MSSQL'
                },
                url: ''
            },
            {
                title: {
                    ru: 'Сайт для инновационной дизайн-студии',
                    en: 'Website for an innovative motion design studio'
                },
                image: 'deeplook.jpg',
                desc: {
                    ru: 'WolfCMS, CSS3+HTML5, jQuery, SEO',
                    en: 'WolfCMS, CSS3+HTML5, jQuery, SEO'
                },
                url: 'http://deeplook.ru'
            },
            {
                title: {
                    ru: 'Сервис онлайн-образования',
                    en: 'BigfootTutors: Online tuition service'
                },
                image: 'bigfoot.jpg',
                desc: {
                    ru: 'YII, CSS3+HTML5, MySQL, jQuery, AngularJS, Websockets, Node.js',
                    en: 'YII, CSS3+HTML5, MySQL, jQuery, AngularJS, Websockets, Node.js'
                },
                url: 'http://www.bigfoottutors.com/'
            }

        ]

    };

    $scope.calculateAge = function calculateAge() { // birthday is a date
        var ageDate = new Date(Date.now() - $scope.model.birthday.getTime()); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

});