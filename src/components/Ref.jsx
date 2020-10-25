import React from "react";

// ref — это свойство компонента, значением которого должна быть функция.
// Она будет вызвана сразу после того, как Реакт вставит элемент в реальный DOM.
// Единственный параметр функции - реальный DOM элемент.
// Дальше можно установить элемент в свойство класса и использовать его либо в
//  componentDidMount, либо в componentDidUpdate.

class Ref extends React.Component {
  focusTextInput = () => {
    this.textInput.focus();
  };

  render() {
    return (
      <div>
        <hr />
        <span>Ref mechanism demo: </span>
        <input
          type="text"
          ref={input => {
            this.textInput = input;
          }}
        />
        <input
          type="button"
          value="focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default Ref;
