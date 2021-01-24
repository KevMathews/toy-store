const React = require("react");
class Splash extends React.Component {
    render(){
        return (
            <html>
                <head>
                    <title>GA's Toy Store</title>
                    <link rel="stylesheet" type="text/css" href="/css/style2.css"></link> 
                </head>
                <body>
                    <section className='splashSection'>
                        <div className='splashDiv'>
                            <img className='splashImage' src="https://i.imgur.com/xbf6FqL.gif"></img>
                        </div>
                        <div className='enterButton'>
                            <a href="/store/main"><img src='https://i.imgur.com/S681GoK.gif'></img></a>
                        </div>
                    </section>
                </body>
            </html>
        )
    }
}


module.exports = Splash;