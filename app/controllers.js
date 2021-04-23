'use strict';


angular.module('myApp').controller('TodoCtrl',function ($scope,todoStorage) {
    $scope.name = "jinlian.quan";
    $scope.todos = todoStorage.get();

    $scope.remove = function (todo){
        todoStorage.remove(todo);
    };
    $scope.add = function(newTodoTitle){
        todoStorage.add(newTodoTitle);
        $scope.newTodoTitle ="";
    };
    $scope.update = function(todo,what){
        if(what === 'completed'){
            if(todo.completed == false){
                todo.completed = true;
            }else {
                todo.completed = false;
            }
        }else if(what === 'title'){
            todo.title = todo.title;
        }
        todoStorage.update(todo);
    };

});