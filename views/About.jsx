const React = require('react');
const Form = require('./components/Form')
const Layout = require('./Layout');
const Header = require('./Header');
const Button = require('./components/Button');
class About extends React.Component {
    render() {
        return (
            <Layout>
                <Header>
                </Header>
                <div className='showPlaqueDiv2'>
                    <img className='showPlaqueImage2' src='https://i.imgur.com/5L2WhPT.png>'></img>
                </div>
                <div className='newPageText3'>
                    <h1>About</h1>
                </div>
                <section className='fade-in'>
                    <div className='aboutImageDiv'><img src='https://i.imgur.com/RT1SnJh.gif' className='aboutImage'></img></div>'
            <div className='descriptionDiv2'>
                        Full Stack Software Engineer:
                        <ul>
                            <li>I Need</li>
                            <li>To Write</li>
                            <li>Something</li>
                            <li>Here :)</li>
                        </ul>
                        <hr className='hrClass' />

                    </div>
                    <div className='contactDiv'>
                        <a href="mailto: KevinMathews.cs@gmail.com" className='emailText'>Email: KevinMathews.cs@gmail.com</a>
                    </div>
                </section>
            </Layout>);
    }
}

module.exports = About;