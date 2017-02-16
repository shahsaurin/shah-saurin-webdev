(function () {
    angular
        .module("WebAppMaker")
        .factory('WebsiteService', WebsiteService);
    
    function WebsiteService() {

        var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];


        var api = {

            "findAllWebsitesForUser": findAllWebsitesForUser

        };
        return api;

        function findAllWebsitesForUser(userId) {
            var sites = [];
            for (var w in websites){
                if(websites[w].developerId === userId){
                    sites.push(websites[w]);
                }
            }
            return sites;

        }
        
    }
    
})();