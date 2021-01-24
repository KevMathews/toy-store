const React = require("react");
class Layout extends React.Component {
    render(){
        return (
            <html>
                <head>
                    <title>GA's Toy Store</title>
                    <link rel="stylesheet" type="text/css" href="/css/style.css"></link> 
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout;