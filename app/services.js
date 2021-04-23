'use strict';

angular.module('myApp')
    .factory('todoStorage',function (){

    let TODO_DATA = 'TODO_DATA';
    let storage = {
        todos: [],
        _savToLocalStorage: function(data){

            localStorage.setItem(TODO_DATA, JSON.stringify(data));
        },
        _getFromLocalStorage: function(){
            return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
        },

        get: function () {
            angular.copy(storage._getFromLocalStorage(), storage.todos);
            return storage.todos;
        },


        remove: function(todo){
            let idx = storage.todos.indexOf(todo);
            if(idx >-1 ){
                storage.todos.splice(idx,1);
            }
            storage._savToLocalStorage(storage.todos);
        },
        add: function(newTodoTitle){
            let newTodo = {
                title: newTodoTitle,
                completed: false,
                createdAt: Date.now()
            };
            storage.todos.push(newTodo);
            storage._savToLocalStorage(storage.todos);
        },
        update: function(todo){
            let idx = storage.todos.indexOf(todo);
            storage.todos[idx] = todo;
            storage._savToLocalStorage(storage.todos);
        }
    };
    return storage;
});