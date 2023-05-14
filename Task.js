class Task {
    constructor(desc, status) {
        this.desc = desc
        this.status = status
    }

    html(pos) {
        return `
        <div class="tasks">
        <div class="quitTask">
            <button class="elim" onclick="Quit(${pos})">X</button>
        </div>
        <div class="task">
            <p class="text">${this.desc}</p>
            <button class="minus" onclick="downgradeTask(${pos})">-</button>
            <button class="plus" onclick="updateTask(${pos})">+</button>
        </div>
        </div>
        `
    }
}