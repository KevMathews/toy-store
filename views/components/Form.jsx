const React = require('react');

class  Form extends React.Component {
    render() {
        return (
            <form action={this.props.endpoint} method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Description: <input type="text" name="description" /><br/>
                  Image URL: <input type="text" name="image" /><br/>
                  Price: <input type="text" name="price" /><br/>
                  Quantity: <input type="text" name="quantity" /><br/>
                  <input type="submit" name="" value="Edit Item"/>
            </form>
          )       
      }
    }

    module.exports = Form