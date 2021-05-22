const React = require("react");
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core';
class Splash extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>GA's Toy Store</title>
                    <link rel="stylesheet" type="text/css" href="/css/style2.css"></link>
                </head>
                <body>
                    {/* <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: '100vh' }}
                    > */}
                    <section className='splashSection'>
                        <div className='splashDiv'>
                            {/* <Grid item xs={3}> */}
                            <img className='splashImage' src="https://i.imgur.com/xbf6FqL.gif"></img>
                            {/* </Grid> */}
                        </div>
                        <div className='enterButton'>
                            {/* <Grid item xs={3}> */}
                            <a href="/store/main"><img src='https://i.imgur.com/S681GoK.gif'></img></a>
                            {/* </Grid> */}
                        </div>
                    </section>
                    {/* </Grid> */}
                </body>
            </html>
        )
    }
}


module.exports = Splash;