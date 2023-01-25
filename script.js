'use strict'




/*Task 2*/

const stepCounter = {
    step: 0,
    increase: function () {
        this.step++;
        return this;
    },
    decrease: function () {
        this.step < 0 || this.step--;
        return this;
    },
    reset: function () {
        this.step = 0;
        return this;
    },
    read: function () {
        console.log(this.step);
        return this;
    },
}

stepCounter.increase().increase().increase().decrease().reset().read();

