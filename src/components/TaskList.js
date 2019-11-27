import React from "react";
import Task from "./Task.js";
import TaskForm from "./TaskForm";

class TaskList extends React.Component {
    state = {
        tasks: [],
        filteredTasks: "all",
        toggleAllComplete: true
    };

    addTask = (task) => {
        this.setState(state => ({
            tasks: [task, ...state.tasks]
        }));
    };

    toggleComplete = id => {
        this.setState(state => ({
            tasks: state.tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        complete: !task.complete
                    };
                } else {
                    return task;
                }
            })
        }));
    };

    updateFilteredTasks = s => {
        this.setState({
            filteredTasks: s
        });
    };

    handleDeleteTask = id => {
        this.setState(state => ({
            tasks: state.tasks.filter(task => task.id !== id)
        }));
    };

    removeAllCompletedTasks = () => {
        this.setState(state => ({
            tasks: state.tasks.filter(task => !task.complete)
        }));
    };


    render() {
        let tasks = [];

        if (this.state.filteredTasks === "all") {
            tasks = this.state.tasks;
        } else if (this.state.filteredTasks === "active") {
            tasks = this.state.tasks.filter(task => !task.complete);
        } else if (this.state.filteredTasks === "complete") {
            tasks = this.state.tasks.filter(task => task.complete);
        }
        return (
            <div>
                <TaskForm onSubmit={this.addTask} />
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        toggleComplete={() => this.toggleComplete(task.id)}
                        onDelete={() => this.handleDeleteTask(task.id)}
                        task={task}
                    />
                ))}
            <div>
                tasks left: {this.state.tasks.filter(task => !task.complete).length}
            </div>
            <div>
                <button onClick={() => this.updateFilteredTasks("all")}>All</button>
                <button onClick={() => this.updateFilteredTasks("active")}>Active</button>
                <button onClick={() => this.updateFilteredTasks("complete")}>Complete</button>
            </div>
                {
            this.state.tasks.some(task => task.complete) ? (
                <div>
                    <button onClick={this.removeAllCompletedTasks}>Remove all completed tasks</button>
                </div>
            ) : null
        }
        <div>
            <button
                onClick={() =>
                    this.setState(state => ({
                        tasks: state.tasks.map(task => ({
                            ...task,
                            complete: state.toggleAllComplete
                        })),
                        toggleAllComplete: !state.toggleAllComplete
                    }))
                }
            >
                toggle all complete: {`${this.state.toggleAllComplete}`}
            </button>
        </div>
</div >
        );
    }
}
export default TaskList;