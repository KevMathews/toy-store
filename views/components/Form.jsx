const React = require('react');

class Form extends React.Component {
  render() {
    return (
      <form action={this.props.endpoint} method="POST">
        <label>Name: </label><br /><input type="text" name="name" />
        <label>Description: </label>D<input type="text" name="description" /><br />
        <label>Image URL: </label><input type="text" name="image" /><br />
        <label>Price: </label><input type="text" name="price" /><br />
        <label>Quantity: </label><input type="text" name="quantity" /><br />
        <input type="submit" name="" value="Edit Item" />
      </form>
    )
  }
}

module.exports = Form