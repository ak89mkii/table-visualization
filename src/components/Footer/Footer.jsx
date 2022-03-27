import React, { Component } from 'react'
import '../../App.css'

class Footer extends Component {
    state = {

    }

    render() {
        return (
            <div className='footer'>
                <div class="container">
                    <div class='row'>
                        <div class="col">
                            © 2022 Table Visualization App | Ponder Code
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;