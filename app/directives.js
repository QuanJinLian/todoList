'use strict';


angular.module('myApp').directive('todoTitle',function(){
    return {
        template: '<h1>Todo List</h1><br>'
    };
});
angular.module('myApp').directive('todoItem',function(){
    return {
        templateUrl : 'todoItem.tpl.html'
    };
});
angular.module('myApp').directive('todoFilters',function(){
    return {
        templateUrl : 'todoFilters.tpl.html'
    };
});
angular.module('myApp').directive('todoForm',function(){
    return {
        templateUrl: 'todoForm.tpl.html'
    };
});