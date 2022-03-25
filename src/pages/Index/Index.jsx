import React, { Component, createRef } from 'react'
import '../../App.css'
import Nav from '../../components/Nav/Nav'
import S1 from '../../components/S1/S1'
// import Table from '../../components/Table/Table'
// import Bar from '../../components/Bar/Bar'
// import Pie from '../../components/Pie/Pie'
import Footer from '../../components/Footer/Footer'
import sun from '../../Img/sun.png'
import moon from '../../Img/moon.png'


class Home extends Component {
    state = {
        open: false,
        mode: 'dark',
        mode2: 'darkNoText',
        icon: moon,
    }

    // Function Toggle Dark/Light Mode: Changes CSS classes and icon when called.
    toggleMode = () => {
        if (this.state.mode == 'light') {
            this.setState({
                mode: 'dark',
                mode2: 'darkNoText',
                icon: moon,
            })
        } else if (this.state.mode == 'dark') {
            this.setState({
                mode: 'light',
                mode2: 'lightNoText',
                icon: sun,
            })
        }
    }

    refreshPage = () => {
        setTimeout(function () { window.location.reload(); }, 10)
    }

    render() {
        return (
            <div className={this.state.mode} ref={this.contextRef}>
                <Nav 
                    open={this.state.false}
                    mode={this.state.mode}
                    icon={this.state.icon}
                    toggleMode={this.toggleMode}
                />
                <S1 />
                {/* <Table /> */}
                <Footer />
            </div>
        )
    }
}

export default Home;

