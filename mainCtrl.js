angular
  .module("triviaTrends")
  .controller("mainCtrl", function($scope, questionsSrvc) {
    $scope.search = {};
    $scope.animalToBeSearched = "";
    $scope.modal = false;
    $scope.questions = [];
    $scope.modalEdit = false;
    $scope.modalNewQuestion = false;
    $scope.page = 0

    $scope.getQuestions = function() {
      questionsSrvc.getQuestions().then(response => {
        questionsSrvc.addDifficulty(response.data);
        $scope.questions = response.data;
        $scope.page = 0
      });
    };
    $scope.getQuestions();
    $scope.toggleSearch = function() {
      $scope.searchOpen = !$scope.searchOpen;
      $scope.search = {};
    };
    $scope.toggleModal = function(toggle, id, question) {
      if (question == "edit") {
        $scope.modalEdit = true;
      } else if (question == "newQuestion") {
        $scope.modalNewQuestion = true;
      }
      if (toggle == "close") {
        $scope.modal = false;
        $scope.modalEdit = false;
        $scope.modalNewQuestion = false;
      } else {
        $scope.modal = true;
        $scope.modalQuestion = $scope.questions[id];
      }
    };
    $scope.questionCheck = function(id, userAnswer) {
      $scope.questions[id].chosenAnswer = userAnswer;
    };

    $scope.getByDifficulty = function(difficulty) {
      questionsSrvc.getByDifficulty(difficulty).then(response => {
        questionsSrvc.addDifficulty(response.data);
        $scope.questions = response.data;
      });
    };
    $scope.changePage = function(page, key){
        questionsSrvc.changePage(page + key).then(resp => {
            questionsSrvc.addDifficulty(resp.data)
            $scope.questions = resp.data
        })
        $scope.page = page + key
    }
    $scope.updateQuestion = function(update) {
      questionsSrvc.updateQuestion(update).then(response => {
        $scope.getQuestions();
        $scope.toggleModal("close");
      });
    };
    $scope.deleteQuestion = function(id) {
      questionsSrvc.deleteQuestion(id).then(response => {
        $scope.getQuestions();
        $scope.toggleModal("close");
      });
    };
    $scope.postQuestion = function(question) {
      questionsSrvc.postQuestion(question).then(response => {
        $scope.toggleModal("close");
        $scope.getQuestions();
      });
    };
  });
