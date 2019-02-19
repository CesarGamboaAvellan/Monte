import React, {Component} from 'react';
import OrderTableCell from './OrderTableCell';


let counter = 0;

function createData(orderId, orderDate, deliveryDate, status) {
    counter += 1;
    return {id: counter, orderId, orderDate, deliveryDate, status};
}

class OrderTable extends Component {
    state = {
        data: [
            createData('1', 'www.launcherrocket.net', 'goDaddy', 'Completed'),
            createData('2', 'www.launch_rocket.ac.cr', 'blueHost', 'On Hold'),
            createData('3', 'www.rocket.org',  '5 Nov', 'enum', 'Delayed'),
            createData('4', 'www.therocketlauncher.com', 'iPage', 'Cancelled'),
        ],
    };

    render() {
        const {data} = this.state;
        return (
            <div className="table-responsive-material">
                <table className="default-table table-unbordered table table-sm table-hover">
                    <thead className="th-border-b">
                    <tr>
                        <th>#</th>
                        <th>Domain Name</th>
                        <th>Provider</th>
                        <th className="status-cell text-right">Price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(data => {
                        return (
                            <OrderTableCell key={data.id} data={data}/>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default OrderTable;
