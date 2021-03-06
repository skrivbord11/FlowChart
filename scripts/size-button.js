
import elementString from '../static/views/size_button.html'
import styleClasses from 'Styles/size_button.css'
import Button from 'Base/button.js'
import eventEmitter from 'Singletons/event-emitter.js'


class SizeButton extends Button
{
  constructor() {
    super(elementString);
    console.log("Element",this.element)
    console.log(styleClasses)
    this.render = this.render.bind(this)
    this.name = "JI"
    this.onClick = this.onClick.bind(this);
  }


  didAttach(parent) {
    super.didAttach(parent);
  }

  render() {
    this.child_views.forEach(c => c.render());
    this.element.classList.add(styleClasses.size_button)  
    //this.element.setAttribute('style', `position: fixed; width:100px; height: 100px;`);
    return this.element;
  }

  onClick(e) {
    console.log("I AM CLICKED" + this.name)
    eventEmitter.emit("increase_size")
  }



}

export default SizeButton;
