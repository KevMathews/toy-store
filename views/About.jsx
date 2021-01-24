const React = require('react');
const Form = require('./components/Form')
const Layout = require('./Layout');
const Header = require('./Header');
const Button = require('./components/Button');
class About extends React.Component {
    render() {
        return(
        <Layout>
            <Header>
            </Header>
            <div className='showPlaqueDiv2'>
                <img className='showPlaqueImage2' src='https://i.imgur.com/5L2WhPT.png>'></img>
            </div>
            <div className='newPageText3'>
                <h1>About</h1>
            </div>
        </Layout>);
}}

module.exports = About;