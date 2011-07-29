$(function () {
    function task(name, isDone) {
        this.name = ko.observable(name);
        this.isDone = isDone;
    }

    var tasksViewModel = {
        tasks: ko.observableArray([]),
        addTask: function () { this.tasks.push(new task(this.newTaskText())); },
        newTaskText: ko.observable(".....")
    };

    tasksViewModel.tasks().push(new task("Get knockout working with templates"));

    ko.applyBindings(tasksViewModel);
});