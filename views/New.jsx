const React = require('react');
const Form = require('./components/Form')
const Layout = require('./Layout');
const Header = require('./Header');
const Button = require('./components/Button');
class New extends React.Component {
  render() {
    return (
      <Layout>
        <Header>

        </Header>
        <div className='showPlaqueDiv3'>
          <img className='showPlaqueImage2' src='https://i.imgur.com/5L2WhPT.png>'></img>
        </div>
        <div className='newPageText'>
          <h1>Add a New Toy</h1>
        </div>
        <div className='newForm'>
          <form action="/store" method="POST">
            Name: <input className='inputField' type="text" name="name" /><br />
                  Description: <input className='inputField' type="text" name="description" /><br />
                  Image URL: <input className='inputField' type="text" name="image" /><br />
                  Price: <input className='inputField' type="text" name="price" /><br />
                  Quantity: <input className='inputField' type="text" name="quantity" /><br />
            <input className='createToy' type="submit" name="" value="Create A New Toy"></input>

          </form>
        </div>
      </Layout>);
  }
}

module.exports = New;