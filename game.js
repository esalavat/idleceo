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
        console.log(val);
        this.progress = new Observable(val);
        this.progress.subscribe(((val) => {
            el.dataset["progress"] = val;
        }));
        this.el = el;
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
    let bindProgressBars = () => {
        const els = document.getElementsByClassName("progress-bar");
        for(let i=0; i<els.length; i++) {
            let el = els[i];
            progressBars[el.id] = bindProgressBar(el);
        }
    }

    bindProgressBar = (el) => {
        return new ProgressBar(el);
    }

    let updateProgressBar = (elId, progress) => {
        progressBars[elId].update(progress);
    }

    let game = {};

    game.init = () => {
        game.counter = new Observable(0);
        game.counter.subscribe((val) => {
            document.getElementById("counter").innerHTML = game.counter.val;
            updateProgressBar("task-1-progress", val);
            updateProgressBar("task-2-progress", val);
        });

        game.bindComponents();

        console.log(game.counter);
    }

    game.bindComponents = () => {
        bindProgressBars();
    }

    game.start = () => {
        game.gameTimer = setInterval(game.gameloop, 1000);
    }
    game.gameloop = () => {
        game.counter.update(game.counter.val + 1);
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        game.init();
        game.start();
    });
    
    window.game = game; //TODO: remove this.
})();