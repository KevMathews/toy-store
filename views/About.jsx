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
                        <span className='aboutTitle'>Full Stack Software Engineer:</span>
                        <span className='aboutDescription'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am a web developer with a background in sales and entrepreneurship. As a business owner I learned how to handle and resolve a wide range of issues which now enables me to approach projects with confidence and creativity. I bring my passion for a clean and organized work product into each project, and I love nothing more then working as a team to find the most efficient and elegant solutions to complex problems.</span>


                    </div>
                    <div className='contactDiv'>
                        <a href="mailto: KevinMathews.cs@gmail.com" className='emailText'>Email: KevinMathews.cs@gmail.com</a>
                    </div>
                </section>
            </Layout>);
    }
}

module.exports = About;