export default class SimpleComponent {
  constructor(container, props, events) {
    this.container = container;
    this.props = props;
    this.events = events;
  }

  render() {
    if (typeof this.template === 'function') {
      this.container.innerHTML = this.template();
    } else {
      throw new Error("Component does not have a valid template");
    }
    if (typeof this.bindEventListeners === 'function') {
      this.bindEventListeners();
    }
    if (typeof this.afterRender === 'function') {
      this.afterRender();
    }
    this.container.style.display = 'block';
  }

  hide() {
    this.container.style.display = 'none';
  }
}