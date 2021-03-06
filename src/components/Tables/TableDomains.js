import React from 'react';
import CardBox from 'components/CardBox/index';
import IntlMessages from 'util/IntlMessages';
import { Table, Button } from 'reactstrap';


const DomainsTable = (props) => {
  return (
    <div>
      <Table hover className="table-domains">
        <thead>
          <tr className="gray-color">
            {/* {
                props.data.headers.map((tableHeader) => {
                  return (
                    <th className="border-top-0">{tableHeader}</th>
                  )
                })
              } */}
            <th className="display-none-small-devices">Provider</th>
            <th className="display-none-small-devices">Domain</th>
            <th className="display-none-small-devices">Price</th>
            <th className="display-none-small-devices">Add to cart</th>
          </tr>
        </thead>
        <tbody>
          <tr className="display-none-small-devices">
            <td>BlueHost</td>
            <td>www.launchrocket.com</td>
            <td>$10</td>
            <td><Button className="button-secondary">
              <i className="flaticon-cart" />
            </Button>
            </td>
          </tr>
          <tr className="display-none-small-devices">
            <td>Go daddy</td>
            <td>www.test.com</td>
            <td>$12</td>
            <td><Button className="button-secondary">
              <i className="flaticon-cart" />
            </Button>
            </td>
          </tr>
          <tr className="display-none-big-devices">
            <td colSpan="2">
              <div className="display-grid domains-grid">
                <span className="color-main-span">
                  Domain:
              </span>
                <span>
                  www.test.com
              </span>
                <div className="divider-domain-table"></div>
                <span className="color-main-span">
                  Provider:
              </span>
                <span>
                  Go Daddy
              </span>
              </div>
            </td>
            <td colSpan="1" className="vertical-centered">
              <div className="display-grid">
                <Button className="button-secondary">
                  <i className="flaticon-cart" />
                </Button>
                <span>
                  Price: 12$
              </span>
              </div>
            </td>
          </tr>
          <tr className="display-none-big-devices">
            <td colSpan="2">
              <div className="display-grid domains-grid">
                <span className="color-main-span">
                  Domain:
              </span>
                <span>
                  www.launchrocket.com
              </span>
                <div className="divider-domain-table"></div>
                <span className="color-main-span">
                  Provider:
              </span>
                <span>
                  Google
              </span>
              </div>
            </td>
            <td colSpan="1" className="vertical-centered">
              <div className="display-grid">
                <Button className="button-secondary">
                  <i className="flaticon-cart" />
                </Button>
                <span>
                  Price: 11$
              </span>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}


export default DomainsTable;
