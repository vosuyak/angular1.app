angular.module("hrApp",[])
.controller('mainCtrl', function($scope, dataService){

    // $scope.helloWorld = function(){
    //     // console.log('this is a controller');
    // };
    $scope.addContact = function(){
        var fName = $scope.contact.fullName;
        var jTitle = $scope.contact.jobTitle;
        var emailArr = $scope.contact.email;
        var bdayArr = $scope.contact.birthday;        
        
        var contact = {
                    "fullName":fName,
                    "jobTitle":jTitle,
                    "email":emailArr,
                     "birthday":bdayArr
                    };
        $scope.contacts.push(contact);
        console.log('added'+contact.fullName+' '+contact.email);
    };
    // $scope.learningNgChange = function(){
    //     // console.log('an input changed');
    // };
    $scope.helloConsole = dataService.helloConsole;    

    dataService.getContact(function(response){
    //    console.log(response.data);
       $scope.contacts = response.data; 
    });
    $scope.deleteContact = function(contact, $index){
        dataService.deleteContact(contact);
        $scope.contact.splice($index, 1);
    };
    $scope.saveContact = function(contact){
        dataService.saveContact(todo);
    }
})
.service('dataService', function($http){
    this.helloConsole = function(){
        // console.log('this is a hello console service');
    };
    this.getContact = function(callback){
        $http.get('mock/contact.json')
        .then(callback)
    };
    this.deleteContact = function(contact){
        console.log('the'+contact.name+'has been deleted');
    };
    this.saveContact = function(contact){
        console.log('the'+contact.name+'has been saved');        
    };
});
var submitBtn = document.getElementById("add-contact-btn");
var inputOne =  document.getElementsById("inputOne");
inputOne.addEventListener("click", function(){
    console.log('btn click');
    alert();
});
submitBtn.addEventListener("click", function(){
    console.log('btn click');
    alert();
    inputOne.value = " ";
});