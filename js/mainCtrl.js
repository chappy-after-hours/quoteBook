angular.module("quoteBook").controller("mainCtrl", function($scope, dataService){
$scope.test = "hellowwww"

  $scope.quotations = dataService.getQuotes();

  $scope.removeQuote = function(text){
    dataService.removeData(text);
  };

  $scope.addQuote = function() {
    var newQuote = {
      text: $scope.newQuoteText,
      author: $scope.newQuoteAuthor
    }
    dataService.addData(newQuote);
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor= '';
  }

})
