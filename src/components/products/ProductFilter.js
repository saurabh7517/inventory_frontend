import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as filterConstants from './FilterConstants';
import * as productActions from '../../redux/actions/ProductAction';
class ProductFilter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            classic_cars: false,
            motor_cycles: false,
            planes: false,
            ships: false,
            trains: false,
            trucks_and_buses: false,
            vintage_cars: false,

            asd: false,
            cmc: false,
            hmc: false,
            mcac: false,
            rsd: false,
            sgd: false,
            sam: false,
            uag: false,
            wdp: false
        }

        this.applyFilter = this.applyFilter.bind(this);
        this.filterSubmit = this.filterSubmit.bind(this);
    }

    applyFilter(event) {
        switch (event.target.value) {
            case filterConstants.asd: this.state.asd === true ? this.setState({ asd: false }) : this.setState({ asd: true });
                break;
            case filterConstants.cmc: this.state.cmc === true ? this.setState({ cmc: false }) : this.setState({ cmc: true })
                break;
            case filterConstants.hmc: this.state.hmc === true ? this.setState({ hmc: false }) : this.setState({ hmc: true })
                break;
            case filterConstants.mld: this.state.mld === true ? this.setState({ mld: false }) : this.setState({ mld: true })
                break;
            case filterConstants.mcac: this.state.mcac === true ? this.setState({ mcac: false }) : this.setState({ mcac: true })
                break;
            case filterConstants.rsd: this.state.rsd === true ? this.setState({ rsd: false }) : this.setState({ rsd: true })
                break;
            case filterConstants.sgd: this.state.sgd === true ? this.setState({ sgd: false }) : this.setState({ sgd: true })
                break;
            case filterConstants.sam: this.state.sam === true ? this.setState({ sam: false }) : this.setState({ sam: true })
                break;
            case filterConstants.uag: this.state.uag === true ? this.setState({ uag: false }) : this.setState({ uag: true })
                break;
            case filterConstants.wdp: this.state.wdp === true ? this.setState({ wdp: false }) : this.setState({ wdp: true })
                break;
            case filterConstants.classic_cars: this.state.classic_cars === true ? this.setState({ classic_cars: false }) : this.setState({ classic_cars: true })
                break;
            case filterConstants.motor_cycles: this.state.motor_cycles === true ? this.setState({ motor_cycles: false }) : this.setState({ motor_cycles: true })
                break;
            case filterConstants.planes: this.state.planes === true ? this.setState({ planes: false }) : this.setState({ planes: true })
                break;
            case filterConstants.ships: this.state.ships === true ? this.setState({ ships: false }) : this.setState({ ships: true })
                break;
            case filterConstants.trains: this.state.trains === true ? this.setState({ trains: false }) : this.setState({ trains: true })
                break;
            case filterConstants.trucks_and_buses: this.state.trucks_and_buses === true ? this.setState({ trucks_and_buses: false }) : this.setState({ trucks_and_buses: true })
                break;
            case filterConstants.vintage_cars: this.state.vintage_cars === true ? this.setState({ vintage_cars: false }) : this.setState({ vintage_cars: true })
                break;
            default: console.log('selected item : ' + event.target.value);
        }
    }

    filterSubmit(event) {
        event.preventDefault();
        let filteredList = [];
        for (let index = 0; index < this.props.products.length; index++) {
            // const element = array[index];
            let product = this.props.products[index];
            if (product.productVendor === filterConstants.asd && this.state.asd) {
                filteredList.push(product);
            }
            if (product.productVendor === filterConstants.cmc && this.state.cmc) {
                filteredList.push(product);
            }
            if (product.productVendor === filterConstants.mld && this.state.mld) {
                filteredList.push(product);
            }
            if (product.productVendor === filterConstants.hmc && this.state.hmc) {
                filteredList.push(product);
            }
            if (product.productVendor === filterConstants.mcac && this.state.mcac) {
                filteredList.push(product);
            }
            if (product.productVendor === filterConstants.rsd && this.state.rsd) {
                filteredList.push(product);
            }
            if (product.productVendor === filterConstants.sgd && this.state.sgd) {
                filteredList.push(product);
            }
            if (product.productVendor === filterConstants.sam && this.state.sam) {
                filteredList.push(product);
            }
            if (product.productVendor === filterConstants.uag && this.state.uag) {
                filteredList.push(product);
            }
            if (product.productVendor === filterConstants.wdp && this.state.wdp) {
                filteredList.push(product);
            }
            if (product.productLine === filterConstants.classic_cars && this.state.classic_cars) {
                filteredList.push(product);
            }
            if (product.productLine === filterConstants.motor_cycles && this.state.motor_cycles) {
                filteredList.push(product);
            }
            if (product.productLine === filterConstants.planes && this.state.planes) {
                filteredList.push(product);
            }
            if (product.productLine === filterConstants.trains && this.state.trains) {
                filteredList.push(product);
            }
            if (product.productLine === filterConstants.ships && this.state.ships) {
                filteredList.push(product);
            }
            if (product.productLine === filterConstants.trucks_and_buses && this.state.trucks_and_buses) {
                filteredList.push(product);
            }
            if (product.productLine === filterConstants.vintage_cars && this.state.vintage_cars) {
                filteredList.push(product);
            }            
        }
        if(!this.state.asd && !this.state.cmc && !this.state.mld && !this.state.hmc && !this.state.mcac && !this.state.rsd && !this.state.sgd && !this.state.sam && !this.state.uag && !this.state.wdp && !this.state.classic_cars && !this.state.motor_cycles && !this.state.planes && !this.state.trains && !this.state.ships && !this.state.trucks_and_buses && !this.state.vintage_cars){
            filteredList = this.props.products;
        }

        this.props.actions.filterAction.addFilteredProducts(filteredList);
    }

    render(){
        return(
            <div id='sidebar'>
            <h3>Filters</h3>
            <h4>Product Line</h4>
            <form onSubmit={this.filterSubmit}>

                <input type='checkbox' name='' value='Classic Cars' checked={this.state.classic_cars} onChange={this.applyFilter} />Classic Cars<br />
                <input type='checkbox' name='' value='Motorcycles' checked={this.state.motor_cycles} onChange={this.applyFilter} />Motorcycles<br />
                <input type='checkbox' name='' value='Planes' checked={this.state.planes} onChange={this.applyFilter} />Planes<br />
                <input type='checkbox' name='' value='Ships' checked={this.state.ships} onChange={this.applyFilter} />Ships<br />
                <input type='checkbox' name='' value='Trains' checked={this.state.trains} onChange={this.applyFilter} />Trains<br />
                <input type='checkbox' name='' value='Trucks and Buses' checked={this.state.trucks_and_buses} onChange={this.applyFilter} />Trucks and Buses<br />
                <input type='checkbox' name='' value='Vintage Cars' checked={this.state.vintage_cars} onChange={this.applyFilter} />Vintage Cars<br />


                <h4>Product Vendor</h4>
                <input type='checkbox' name='' value='Autoart Studio Design' checked={this.state.asd} onChange={this.applyFilter} /> Autoart Studio Design<br />
                <input type='checkbox' name='' value='Classic Metal Creations' checked={this.state.cmc} onChange={this.applyFilter} /> Classic Metal Creations<br />
                <input type='checkbox' name='' value='Min Lin Diecast' checked={this.state.mld} onChange={this.applyFilter} /> Min Lin Diecast<br />
                <input type='checkbox' name='' value='Motor City Art Classics' checked={this.state.mcac} onChange={this.applyFilter} /> Motor City Art Classics<br />
                <input type='checkbox' name='' value='Red Start Diecast' checked={this.state.rsd} onChange={this.applyFilter} />Red Start Diecast<br />
                <input type='checkbox' name='' value='Second Gear Diecast' checked={this.state.sgd} onChange={this.applyFilter} /> Second Gear Diecast<br />
                <input type='checkbox' name='' value='Studio M Art Models' checked={this.state.sam} onChange={this.applyFilter} /> Studio M Art Models<br />
                <input type='checkbox' name='' value='Unimax Art Galleries' checked={this.state.uag} onChange={this.applyFilter} /> Unimax Art Galleries<br />
                <input type='checkbox' name='' value='Welly Diecast Productions' checked={this.state.wdp} onChange={this.applyFilter} /> Welly Diecast Productions<br />

                <input type='submit' value='Submit' />
            </form>
        </div>
        )
    }
}

function mapStateToProps(state){
    return {
        products: state.LoginReducer.products,
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions:{
            filterAction: bindActionCreators(productActions, dispatch)
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductFilter);
