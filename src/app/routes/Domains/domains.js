import OrderTable from '../../../components/dashboard/eCommerce/OrderTable';
import SearchBox from '../../../components/SearchBox/index';
import React from 'react';
import Card from '../../../components/Cards/Sample/index';
import DomainsTable from '../../../components/Tables/TableDomains';

let counter = 0;
function createData(domainName, host, price) {
    counter += 1;
    return { id: counter, domainName, host, price };
}

const data = [
    createData('ucr.ac.cr', 'goDaddy', '$12'),
    createData('test.ac.cr', 'blueHost', '$10'),
    createData('world.ac.cr', 'blueHost', '$10'),
    createData('therocketlauncher.com', 'iPage', '$6'),
];


class SamplePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            domain: '',
            dataState: data,
        }
    }
    setDomain = (e) => {
        this.setState({
            domain: e.target.value
        })
    }
    // fetchDomain = (domain) => {
    //     this.setState({
    //         dataState: data.filter((item) => {
    //             return item.domainName.toLowerCase().indexOf(this.state.domain.toLowerCase()) !== -1
    //         })
    //     })
    // }
    render() {

        return (
            // <div className="app-wrapper">
            //     <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.Domains" />} />
            <Card className="table-domains">
                <SearchBox className="padding-search-bar" styleName="d-lg-block margin-bottom"
                    placeholder="Search for a domain here"
                    onChange={(e) => this.setDomain(e)}
                    value={this.state.domain}
                    clickEvent={() => this.fetchDomain(this.state.domain)}
                />
                <DomainsTable data={this.state.dataState} />
            </Card>

            // </div>
        );
    }
}

export default SamplePage;
