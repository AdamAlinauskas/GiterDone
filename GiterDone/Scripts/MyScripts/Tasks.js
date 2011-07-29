$(function () {
    function task(name, isDone) {
        this.name = ko.observable(name);
        this.isDone = isDone;
    }

    var tasksViewModel = {
        tasks: ko.observableArray([]),
        addTask: function () { this.tasks.push(new task(this.newTaskText())); },
        newTaskText: ko.observable(""),
        //save: function () { window.localStorage.setItem("tasks", JSON.stringify(ko.toJSON())); }
    };

    //var test = window.localStorage.getItem("tasks");
    
    tasksViewModel.tasks.push(new task("Drive to a farm.", true));
    tasksViewModel.tasks.push(new task("Tip a cow.", true));

    ko.applyBindings(tasksViewModel);
});