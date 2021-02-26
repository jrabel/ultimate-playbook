import paper, { view } from "paper";

class PaperManager {
  constructor() {
    console.log("Creating PaperManager");

    this.id = "paper-canvas";

    window.onload = () => {
      paper.install(window);
      paper.setup(this.id);

      let myPath;
      paper.view.onMouseDown = function (event) {
        myPath = new paper.Path();
        myPath.strokeColor = 'red';
      }

      paper.view.onMouseDrag = function (event) {
        myPath.add(event.point);
      }

      paper.view.onMouseUp = function (event) {
        var myCircle = new paper.Path.Circle({
          center: event.point,
          radius: 10
        });
        myCircle.strokeColor = 'white';
        myCircle.fillColor = 'white';
      }

      paper.view.draw();

    }
  }

}

let paperManager = new PaperManager();

export default paperManager;
