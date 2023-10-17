const app = Vue.createApp({
    data() {
        return {
            newTask: "",
            tasks: [],
            editingTask: null,
            editedTask: {
                title: "",
                content: "",
            },
        };
    },
    computed: {
        incompleteTasksCount() {
            return this.tasks.filter((task) => !task.completed).length;
        },
    },
    methods: {
        addTask() {
            if (this.newTask.trim() === "") return;
            this.tasks.push({
                title: this.newTask,
                content: "",
                completed: false,
            });
            this.newTask = "";
        },
        editTask(index) {
            this.editingTask = index;
            this.editedTask = { ...this.tasks[index] };
        },
        saveTask() {
            this.tasks[this.editingTask] = { ...this.editedTask };
            this.cancelEdit();
        },
        cancelEdit() {
            this.editingTask = null;
            this.editedTask = { title: "", content: "" };
        },
        toggleCompletion(index) {
            this.tasks[index].completed = !this.tasks[index].completed;
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
    },
});

app.mount("#app");