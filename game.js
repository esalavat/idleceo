(() => {
    function Observable(initialVal) {
        this.val = initialVal;
        this.onUpdates = [];
    };
    Observable.prototype.subscribe = function(onUpdate) {
        this.onUpdates.push(onUpdate);
    };
    Observable.prototype.update = function(newVal) {
        this.val = newVal;
        this.onUpdates.forEach((onUpdate) => {
            onUpdate(newVal);
        });
    }
    
    function ProgressBar(el) {
        let val = parseInt(el.dataset["progress"]);
        this.progress = new Observable(val);
        this.progress.subscribe(((val) => {
            el.dataset["progress"] = val;
        }));
        this.el = el;
        el.appendChild(document.createElement("div"));
        el.appendChild(document.createElement("span"));
        this.updateUi();
    }
    ProgressBar.prototype.update = function(progress) {
        this.progress.update(progress);
        this.updateUi();
    }
    ProgressBar.prototype.updateUi = function() {
        let max = parseInt(this.el.dataset["max"]);
        let percent = this.progress.val / max * 100;
        let bar = this.el.getElementsByTagName('div')[0];
    
        bar.style.width = percent + "%";
        this.el.getElementsByTagName('span')[0].innerHTML = this.progress.val + " / " + max + " (" + percent.toFixed(2) + "%)";
    }

    let progressBars = {};
    function bindProgressBars() {
        const els = document.getElementsByClassName("progress-bar");
        for(let i=0; i<els.length; i++) {
            let el = els[i];
            progressBars[el.id] = bindProgressBar(el);
        }
    }

    function bindProgressBar(el) {
        return new ProgressBar(el);
    }

    function updateProgressBar(elId, progress) {
        progressBars[elId].update(progress);
    }

    function Employee(el) {
        this.el = el;
        this.code = parseInt(el.dataset["code"]);
        this.quantity= parseInt(el.dataset["quantity"]);
        this.name = el.dataset["name"];

        game.currentCodeAmount += this.code;

        el.appendChild(document.createElement("span"));

        this.updateUi();
    }
    Employee.prototype.updateUi = function() {
        this.el.getElementsByTagName('span')[0].innerHTML = this.name + "(x" + this.quantity + "): " + this.code + " lines/sec"; 
    }

    let employees = [];
    function bindEmployees() {
        const els = document.getElementById("employees").getElementsByTagName("li");
        for(let i=0; i<els.length; i++) {
            let el = els[i];
            employees[i] = bindEmployee(el);
        }
    }

    function bindEmployee(el) {
        return new Employee(el);
    }


    let game = {};

    game.init = () => {
        game.money = new Observable(0);
        game.money.subscribe((val) => {
            document.getElementById("counter").innerHTML = game.money.val;
        });

        game.currentCodeAmount = 0;
        game.product = 0;
        game.dollarPerProduct = .5;

        game.bindComponents();
        game.bindInputs();

        game.currentTask = progressBars["task-1-progress"];
        console.log(game.money);
    }

    game.bindComponents = () => {
        bindProgressBars();
        bindEmployees();
    }

    game.bindInputs = () => {
        window.addEventListener("click", game.handleClick);
    }

    game.code = () => {
        game.currentTask.update(game.currentTask.progress.val + game.currentCodeAmount);
        game.updateCodeUi(game.currentCodeAmount);
    }

    game.updateCodeUi = (val) => {

    }

    game.handleClick = (e) => {
        game.code();
    }

    game.start = () => {
        game.gameTimer = setInterval(game.gameloop, 1000);
    }
    game.gameloop = () => {
        game.money.update(game.money.val + (game.product * game.dollarPerProduct));
        game.code();
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        game.init();
        game.start();
    });
    
    window.game = game; //TODO: remove this.
})();