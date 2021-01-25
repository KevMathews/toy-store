const React = require("react");
class Header extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>GA's Toy Store</title>
                    <link rel="stylesheet" type="text/css" href="/css/style.css"></link>
                </head>
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <a href="/store/main"><li>Home</li></a>
                            <a href="/store/new">Create</a>
                            <a href="/store/about"><li>About</li></a>
                        </ul>
                    </div>
                </nav>
                <header>
                    <a href="/store/main"><img id="headerGraphic" src='https://i.imgur.com/EacIU7g.gif' /></a>
                </header>
            </html>
        )
    }
}
module.exports = Header;