//strobe Game Script
var app = window.angular.module('app',[])

app.factory('scoreFetcher', scoreFetcher)
app.controller('mainCtrl', mainCtrl)

function scoreFetcher ($http) {
	var API_ROOT = 'scores'
	return{
		get: function () {
			return $http
			.get(API_ROOT)
			.then(function (resp) {
				return resp.data
			});
		}
	}
}

function mainCtrl($scope, scoreFetcher, $http) {
	
	$scope.score = []	

	scoreFetcher.get()
		.then(function (data) {
			$scope.score = data
		});
	

	$scope.addScore = function() {
		var formData = {name:$scope.Name,score:$scope.Score};
		console.log(formData);
	
		var scoreURL = 'scores';
		$http({
			url: scoreURL,
			method: "POST",
			data: formData
		}).success(function(data, status, headers, config) {
			console.log('Post Worked');
		}).error(function(data, status, headers, config) {
			console.log('Post Failed');
		});

	}

}