import React from "react";
import { TableRow, TableCell } from "@mui/material";
class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile" /></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
            // <div>
            //     <CustomerProfile id={this.props.id} name={this.props.name} image={this.props.image} />
            //     <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />
            // </div>
        );
    }
}

// class CustomerProfile extends React.Component {
//     render() {
//         return (
//             <div>
//                 <img src={this.props.image} alt="profile" />
//                 <h2>{this.props.name} ({this.props.id})</h2>
//             </div>
//         );
//     }
// }

// class CustomerInfo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.birthday}</p>
//                 <p>{this.props.gender}</p>
//                 <p>{this.props.job}</p>
//             </div>
//         );
//     }
// }

export default Customer;