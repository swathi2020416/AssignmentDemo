import React, { Component } from 'react'

 class ListofEmployees extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Job</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mac</td>
                            <td>Bouncer</td>
                        </tr>
                        <tr>
                            <td>Dee</td>
                            <td>Actress</td>
                        </tr>
                        <tr>
                            <td>Dennis</td>
                            <td>Badminton</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListofEmployees

