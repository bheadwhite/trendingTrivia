angular
  .module("triviaTrends", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("questions", {
      templateUrl: "question.html",
      url: "/"
    });
    $urlRouterProvider.otherwise("/");
  });
