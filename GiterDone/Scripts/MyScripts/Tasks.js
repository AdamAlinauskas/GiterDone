$(function () {
    function task(name, isDone) {
        this.name = ko.observable(name);
        this.isDone = isDone;
    }

    var tasksViewModel = {
        tasks: ko.observableArray([]),

        newTaskText: ko.observable(".....")
    };

    tasksViewModel.tasks().push(new task("blah"));

    ko.applyBindings(tasksViewModel);


});