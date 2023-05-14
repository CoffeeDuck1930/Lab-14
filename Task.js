class Task {
    constructor(desc, status) {
        this.desc = desc
        this.status = status
    }

    html(pos) {
        return `
        <div class="tasks">
        <div class="quitTask">
            <button class="elim" onclick="Quit(${pos})"><i class="fa-solid fa-circle-xmark"></i></button>
        </div>
        <div class="task">
            <p class="text">${this.desc}</p>
            <button class="minus" onclick="downgradeTask(${pos})"><i class="fa-sharp fa-solid fa-circle-minus"></i></button>
            <button class="plus" onclick="updateTask(${pos})"><i class="fa-solid fa-circle-plus"></i></button>
        </div>
        </div>
        `
    }
}