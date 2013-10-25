angular.module('score', []);

angular.module('score').controller('scoreController', function ($scope){
  $scope.default_score = 301;
  $scope.users = [];

  $scope.reset_game = function (){
    $scope.users = [];
  };

  $scope.sum = function (arr){
    var val = 0;
    angular.forEach(arr, function (v){
      val += ~~v;
    });
    return val;
  };

  $scope.revert = function (user, index){
    user.score.splice(index, 1);
  };

  $scope.add_user = function (){
    $scope.users.push({
      name: 'user_' + ($scope.users.length + 1),
      score: []
    });
  };

  $scope.add_score = function (user){
    var score = [~~this.score];

    if (this.score.indexOf(' ') != -1) {
      score = [];
      angular.forEach(this.score.split(' '), function (val){
        score.push(~~val);
      });
    }

    var new_score = $scope.default_score - ($scope.sum(user.score) + $scope.sum(score));
    if (new_score == 1 || new_score < 0) {
      alert('error');
    } else {
      user.score = user.score.concat(score);
    }

    this.score = '';
  }
});
