angular.module('score', []);

angular.module('score').controller('scoreController', function ($scope){
  $scope.default_score = 301;
  $scope.users = [];

  $scope.reset_game = function (){
    $scope.users = [];
  };
  $scope.add_user = function (){
    $scope.users.push({
      name: 'user_' + ($scope.users.length + 1),
      score: $scope.default_score,
      scores: []
    });
  };
});

angular.module('score').controller('addScoreController', function ($scope){
  $scope.add_score = function (user){
    var score = ~~$scope.score;
    if ($scope.score.indexOf(' ') != -1) {
      score = 0;
      angular.forEach($scope.score.split(' '), function (val){
        score += ~~val;
      });
    }

    var new_score = user.score - score;
    if (new_score == 1 || new_score < 0) {
      alert('error');
    } else {
      user.score = new_score;
    }
    $scope.score = '';

  }
});
