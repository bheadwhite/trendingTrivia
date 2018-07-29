angular.module("triviaTrends").service("questionsSrvc", function($http) {
  this.getQuestions = function() {
    return $http({
      method: "GET",
      url: "https://practiceapi.devmountain.com/api/trivia/questions"
    });
  };
  this.addDifficulty = function(array) {
    array.map((question, index) => {
      switch (question.difficulty) {
        case 1:
          question.difficultyLevel = "Easy";
          break;
        case 2:
          question.difficultyLevel = "Medium";
          break;
        case 3:
          question.difficultyLevel = "Hard";
          break;
        default:
          quesiton.difficultyLevel = "Hard";
      }
    });
  };
  this.getByDifficulty = function(difficulty){
      return $http({
          method: "GET",
          url: `https://practiceapi.devmountain.com/api/trivia/questions/difficulty/${difficulty}`
      })
  }
  this.changePage = function(page){
      return $http({
          method: "GET",
          url: `https://practiceapi.devmountain.com/api/trivia/questions?page=${page}`
      }).then(resp => {
          return resp
      })
  }
  this.updateQuestion = function(update){
      return $http({
          method: "PUT",
          url: `https://practiceapi.devmountain.com/api/trivia/questions/${update._id}`,
          data: update
      }).then(response => {
          console.log(response);
          return response.data
      })
  }
  this.deleteQuestion = function(id){
      return $http({
          method: "DELETE",
          url: `https://practiceapi.devmountain.com/api/trivia/questions/${id}`
      }).then(response => {
          return response
      })
  }
  this.postQuestion = function(question){
      return $http({
          method: "POST",
          url: `https://practiceapi.devmountain.com/api/trivia/questions`,
          data: question
      }).then(response => {
          return response.data
      })
  }
});
