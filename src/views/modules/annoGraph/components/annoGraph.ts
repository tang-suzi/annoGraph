import { Stage } from '@createjs/easeljs'

class AnnoGraph {
  private options: Object;
  constructor(options: Object) {
    this.options = options;
    this._el = null;
  }

  c = new Stage()
  init() {
    console.log(this.options)
    if (!this.options.el) {
      console.error('The host element needs to be passed in')
      return
    }
    const el = document.querySelector(this.options.el)
    if (el.nodeName === 'DIV') {
      const cvs = document.createElement('canvas')
      cvs.id = 'anno-graph-cvs'
      cvs.style.width = '100%';
      cvs.style.height = '100%';
      el.appendChild(cvs)
      this._el = cvs
    }
    if (el.nodeName === 'CANVAS') {
      this._el = el
    }

    console.log(this)
  }
}

// function AnnoGraph() {

// }
// AnnoGraph.init = () => {
//   console.log(123)
// }

export default AnnoGraph;
