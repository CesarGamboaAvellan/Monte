import React from 'react';

class OrderTableCell extends React.Component {

    render() {
        const {id, orderId, orderDate, deliveryDate, status} = this.props.data;
        const statusStyle = "text-white bg-success";
        return (
            <tr
                tabIndex={-1}
                key={id}
            >
                <td>{orderId}</td>
                <td>{orderDate}</td>
                <td>{deliveryDate}</td>
                <td className="text-right">
                    <span>
                        $12</span>
                </td>
                <td className="status-cell text-right">
                    <div className={` badge text-uppercase ${statusStyle}`}>Buy</div>
                </td>
            </tr>

        );
    }
}

export default OrderTableCell;
