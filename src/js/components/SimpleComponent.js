export default class SimpleComponent {
    constructor(container, props) {
      this.container = container;
      this.props = props;
    }
  
    render() {
      if(typeof this.template === 'function') {
        this.container.innerHTML = this.template();
      } else {
        throw new Error("Component does not have a valid template");
      }
      if(typeof this.bindEventListeners === 'function') {
        this.bindEventListeners();
      } 
    }
  }