var toDoModule = angular.module("ToDoApplication",[]);

toDoModule.controller("ToDoController",toDoCtrl);

function toDoCtrl(){
    this.toDoList = [];
    this.edit = false;
    this.addItem = function(){
        this.toDoList.push(this.input);
        this.input = "";
    }

    this.deleteItem = function(index){
        this.toDoList.splice(index,1);
    }

    this.editItems = function(){
        this.edit = true;
    }

    this.updateItems = function(){
        this.edit = false;
    }
}