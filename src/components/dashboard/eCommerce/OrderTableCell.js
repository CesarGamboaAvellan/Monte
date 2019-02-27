import React from 'react';

class OrderTableCell extends React.Component {

    render() {
        const {id, domainName, host, purchase, price} = this.props.data;
        const statusStyle = "text-white bg-success";
        return (
            <tr
                tabIndex={-1}
                key={id}
            >
                <td>{id}</td>
                <td>{domainName}</td>
                <td>{host}</td>
                <td className="text-right">
                    <span>
                        {price}</span>
                </td>
                <td className="status-cell text-right">
                    <div className={` badge text-uppercase ${statusStyle}`}>Buy</div>
                </td>
            </tr>

        );
    }
}

export default OrderTableCell;
