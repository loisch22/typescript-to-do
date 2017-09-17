var Task = /** @class */ (function () {
    //with shortcut no need for:
    // description: string;
    // priority: string;
    // constructor(descriptionParameter: string, priorityParameter: string) {
    //   this.done = false;
    //   this.description = descriptionParameter;
    //   this.priority = priorityParameter;
    // }
    //shortcut
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var tasks = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));
tasks[0].markDone();
//for(var individualThing of listOfMultipleThings)
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var task = tasks_1[_i];
    console.log(task);
}