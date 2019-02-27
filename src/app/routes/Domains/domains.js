import OrderTable from '../../../components/dashboard/eCommerce/OrderTable';
import SearchBox from '../../../components/SearchBox/index';
import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import Card from '../../../components/Cards/Sample/index';

let counter = 0;
function createData(domainName, host, price) {
    counter += 1;
    return {id: counter, domainName, host, price};
}

const data = [
    createData('ucr.ac.cr', 'goDaddy', '$12'),
    createData('test.ac.cr', 'blueHost', '$10'),
    createData('world.ac.cr', 'blueHost',  '$10'),
    createData('therocketlauncher.com', 'iPage', '$6'),
];

       
class SamplePage extends React.Component {
    constructor(props){
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
    fetchDomain = (domain) => {
        console.log('Calling the Api with: ', domain);
        this.setState({
            dataState: data.filter((item)=> {
                console.log(item)
                return item.domainName.toLowerCase().indexOf(this.state.domain.toLowerCase())!== -1
            })
        })
    }
    render() {

        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.Domains"/>}/>
                <Card>
                <SearchBox styleName="d-lg-block"
                placeholder="Search for a domain here"
                            onChange={(e)=> this.setDomain(e)}
                               value={this.state.domain}
                            clickEvent={() => this.fetchDomain(this.state.domain)}
                               />
                </Card>
                <Card>
                <OrderTable data={this.state.dataState} />
                </Card>
            </div>
        );
    }
}

export default SamplePage;
