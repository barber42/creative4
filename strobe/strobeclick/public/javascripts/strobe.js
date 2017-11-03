//strobe Game Script
var app = window.angular.module('app',[])

app.controller('mainCtrl', mainCtrl)

function mainCtrl($scope, $http) {
	
	var count = 0;

	$scope.scores = []

	$scope.addScore = function() {
		var formData = {userName:$scope.Name,scr:count};
		count = 0;
		console.log(formData);
	
		var scoreURL = '/scores';
		$http({
			url: scoreURL,
			method: "POST",
			data: formData
		}).success(function(data, status, headers, config) {
			console.log('Post Worked');$scope.getscores();
		}).error(function(data, status, headers, config) {
			console.log('Post Failed');
		});

	}

	$scope.getscores = function(){
		$http
       		.get('/scores')
        	.then(function (resp) {
         	$scope.scores = resp.data;
        });
	}

	$scope.getscores();	

	$scope.incCount = function(){
		count++;
	}	
}