import React from 'react';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      status: false
    };
  }

  render() {
    return (
      <form className="input-group mb-4 shadow-sm" onSubmit={this.handleSubmit}>
        <input
          required
          autoFocus
          type="text"
          item={this.state.item}
          className="form-control"
          placeholder="Add a new item."
          onChange={this.handleChange}/>
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
    );
  }
}

export default ItemForm;
