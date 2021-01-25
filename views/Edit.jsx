const React = require('react');
const Form = require('./components/Form')
const Layout = require('./Layout');
const Header = require('./Header');
const Button = require('./components/Button');
class Edit extends React.Component {
    render() {
        return (
            <Layout>
                <Header>

                </Header>
                <div className='showPlaqueDiv3'>
                    <img className='showPlaqueImage2' src='https://i.imgur.com/5L2WhPT.png>'></img>
                </div>
                <div className='editPageText'>
                    <h1>Edit <a className='productN' href={`/store/${this.props.item._id}`}>{this.props.item.name}</a></h1>
                </div>
                <div className='newForm'>
                    <form action={`/store/${this.props.item._id}?_method=PUT`} method="POST">
                        Name: <input className='inputField' type="text" name="name" value={this.props.item.name} /><br />
                Description: <input className='inputField' type="text" name="description" value={this.props.item.description} /><br />
                Image URL: <input className='inputField' type="text" name="image" value={this.props.item.image} /><br />
                Price: <input className='inputField' type="text" name="price" value={this.props.item.price} /><br />
                Quantity: <input className='inputField' type="text" name="quantity" value={this.props.item.quantity} /><br />
                        <input className='editButton3' type="submit" name="" value={`Edit ${this.props.item.name}`} />
                    </form>
                </div>

            </Layout>);
    }
}

module.exports = Edit;