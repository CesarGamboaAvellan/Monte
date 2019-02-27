import React, {Component} from 'react';
import OrderTableCell from './OrderTableCell';



class OrderTable extends Component {
    render() {
        const {data} = this.props;
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
