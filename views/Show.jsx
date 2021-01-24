const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');
const Button = require('./components/Button');
class Show extends React.Component {
    render(){let buyButton;
        if(this.props.item.quantity > 0){
          buyButton = <Button
                        endpoint={`/store/${this.props.item._id}/buy?_method=PUT`}value={`Buy $${this.props.item.price}`} className={'buyButton2'}></Button>
          } else { buyButton = <Button value={`Sold Out`} className={'soldOutButton2'}></Button>
      }
        return (
            <Layout>
                <Header>
                </Header>
                <section className='showSection'>
                    <div className='showPlaqueDiv'>
                        <img className='showPlaqueImage' src='https://i.imgur.com/5L2WhPT.png>'></img>
                    </div>
                    <div className='nameDiv'>
                        <h1 className='showNames'>{ this.props.item.name } </h1>
                    </div>
                    <div className='imageDiv'>
                        <img className='showImage' src={ this.props.item.image }></img>
                    </div>
                    <div className='descriptionDiv'>
                        { this.props.item.description }
                    </div>
                    <div className='quantityDiv'>
                        In-Stock:  { this.props.item.quantity }
                    </div>
                    <div className='buyDiv'>
                        {/* <Button endpoint={`/store/${this.props.item._id}/buy?_method=PUT`}value={`Buy $${this.props.item.price}`} className={'buyButton2'}>
                    </Button> */}{ buyButton}
                    </div>
                    <div className='homeDiv'>
                        <a href="/store/main"><button value={`Home Page`} className={'homeButton2'}>HOME PAGE</button></a>
                    </div>
                    <div className='editDiv'>
                        <Button endpoint={`/store/${this.props.item._id}/edit?_method=GET`} value={`Edit`} className={'editButton2'}></Button>
                    </div>
                </section>
        </Layout>
        )
    }
}
module.exports = Show;