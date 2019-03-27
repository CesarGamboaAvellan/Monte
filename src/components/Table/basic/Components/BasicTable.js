import React from 'react';
import { Table } from 'reactstrap';


const BasicTable = (props) => {

    return (
        <div className="table-responsive-material">
            <Table>
                <thead>
                    <tr className="gray-color">
                        {
                            props.data.headers.map((tableHeader) => {
                                return (
                                    <th className="border-top-0">{tableHeader}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.rows.map((row) => createColumns(row))
                    }
                </tbody>
            </Table>
        </div>
    );
}


export default BasicTable;
