const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');
const Button = require('./components/Button');
class Index extends React.Component {
  
    render() {
        return (
          <Layout>
            <Header>
            </Header>
            <section className='productSection'>
              { this.props.items.map((item, i) => {
                  let buyButton;
                  if(item.quantity > 0){
                    buyButton = <Button
                                  endpoint={`/store/${item._id}/buy?_method=PUT`}value={`Buy $${item.price}`} className={'buyButton'}></Button>
                    } else { buyButton = <Button value={`Sold Out`} className={'soldOutButton'}></Button>
                }
                    return (
                        <div className='productCards' key={i}>
                          <div className='productPlaque'><img className='plaqueImage' src='https://i.imgur.com/5L2WhPT.png'/>
                          </div>
                          <div className='productName'><a className='productN' href={`/store/${item._id}`}>{ item.name }</a>
                          </div>
                          <div className='productImage'>
                            <a href={`/store/${item._id}`}><img className='productImages' src={ item.image }></img> </a>  
                          </div>
                          <div className='inStock'>In-Stock:  { item.quantity }
                          </div>
                          <div className='productBuy'>
                            { buyButton }
                          </div>
                          <div className='productEdit'>
                            <Button endpoint={`/store/${item._id}/edit?_method=GET`} value={`Edit`} className={'editButton'}></Button>
                          </div>
                          <div className='productDelete'>
                            <Button endpoint={`/store/${item._id}?_method=DELETE`} value={`Delete`} className={'deleteButton'}></Button>
                          </div>
                          <div className='productShelf'>
                            <img className='shelfImage' src='https://i.imgur.com/EYlUkRR.png'></img>
                          </div>
                        </div>
                      )
                    })
                }
              </section>
          </Layout>
        );
    }
  }
  
module.exports = Index;