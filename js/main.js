class Graph {
    constructor(abcissa, ordinate, pointColor, plotBtn, center, points) {
        this.abcissa = abcissa;
        this.ordinate = ordinate;
        this.plotBtn = plotBtn;
        this.pointColor = pointColor;
        this.center = center;

        // Focus on center 0, 0
        center.scrollIntoView();

        // plotBtn.addEventListener("click", this.onPlot);
        plotBtn.addEventListener("click", this.onPlot);
    }

    // -> Plot point
    // Create rect element
    // set position properties
    // set x and y coordinates
    // append to svg
    onPlot = () => {

        const valX = this.IsPositive(this.abcissa.value);
        const valY = this.IsPositive(this.ordinate.value);

        // Putting points in quadrant

        if (valX["prop"] && valY["prop"]) {

            this.plot(valX["val"] + 2000, 2000 - valY["val"]);
            console.log("Point is in 1st Quadrant.");
        } else if (valX["prop"] && valY["prop"] == false) {

            this.plot(valX["val"] + 2000, 2000 + valY["val"]);
            console.log("Point is in 4th Quadrant.");
        } else if (valX["prop"] == false && valY["prop"] == false) {

            this.plot(2000 - valX["val"], 2000 + valY["val"]);
            console.log("Point is in 3rd Quadrant.");
        } else if (valX["prop"] == false && valY["prop"]) {

            this.plot(2000 - valX["val"], 2000 - valY["val"]);
            console.log("Point is in 2nd Quadrant.");
        }

    }

    plot = (x, y, toAdd) => {
        const ns = 'http://www.w3.org/2000/svg';
        const point = document.createElementNS(ns, "rect");
        point.classList.add("point");
        point.setAttributeNS(null, "height", "5px");
        point.setAttributeNS(null, "width", "5px");
        point.setAttributeNS(null, "fill", this.pointColor.value);
        point.setAttributeNS(null, "x", x - 2.5);
        point.setAttributeNS(null, "y", y - 2.5);
        document.querySelector("svg").append(point);
    }



    IsPositive = (value) => {
        if (value.slice(0, 1) != "-") {
            return {
                val: parseFloat(value) * 5,
                prop: true
            };
        } else {
            return {
                val: parseFloat(value.slice(1)) * 5,
                prop: false
            };
        }
    }

    // Called Whenever any point is clicked
    // PointOnClick = (point) => {
    //     if(point.classList.contains("start")){
    //         console.log("first po1`int");
    //     }
    // }


}


// Values

const abcissa = document.querySelector("#abcissa");
const ordinate = document.querySelector("#ordinate");
const plotBtn = document.querySelector("#btn");
const pointColor = document.querySelector("#color");
const center = document.querySelector("#center");
// const points = document.querySelector(".point");

const graph = new Graph(abcissa, ordinate, pointColor, plotBtn, center);