import React, { Component } from "react"
import PropTypes from "prop-types"
import { map } from "lodash"
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"
import classnames from "classnames"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

//Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import "/src/assets/scss/datatables.scss"

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb"
import cryptoOrderColumn from "./cryptoOrderColumn"
import { getCryptoOrders } from "/src/store/crypto/actions"

class CryptoOrders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
      activeTab: "1",
    }
  }

  componentDidMount() {
    const { onGetOrders } = this.props
    onGetOrders()
  }

  handleChange = date => {
    this.setState({
      startDate: date,
    })
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  render() {

    const columns = [{
      dataField: 'pdate',
      text: 'Date'
    }, {
      dataField: 'type',
      text: 'Type'
    }, {
      dataField: 'coin',
      text: 'Coin'
    }, {
      dataField: 'value',
      text: 'Value'
    }, {
      dataField: 'valueInUsd',
      text: 'value in USD'
    }, {
      dataField: 'status',
      text: 'Status',
      formatter: (cellContent, row) => (
        <span className={"badge font-size-10 bg-" + row.badgeclass}>
          {row.status}
        </span>
      ),
    }];

    // Table Data
    const productData = [
      {
        id: 1,
        pdate: "03 Mar, 2020",
        type: "Buy",
        coin: "Bitcoin",
        value: "1.00952 BTC",
        valueInUsd: "$ 9067.62",
        status: "Completed",
        badgeclass: "success",
      },
      {
        id: 2,
        pdate: "04 Mar, 2020",
        type: "Sell",
        coin: "Ethereum",
        value: "0.00413 ETH",
        valueInUsd: "$ 2123.01",
        status: "Completed",
        badgeclass: "success",
      },
      {
        id: 3,
        pdate: "04 Mar, 2020",
        type: "Buy",
        coin: "Bitcoin",
        value: "0.00321 BTC",
        valueInUsd: "$ 1802.62",
        status: "Pending",
        badgeclass: "warning",
      },
      {
        id: 4,
        pdate: "05 Mar, 2020",
        type: "Buy",
        coin: "Litecoin",
        value: "0.00224 LTC",
        valueInUsd: "$ 1773.01",
        status: "Completed",
        badgeclass: "success",
      },
      {
        id: 5,
        pdate: "06 Mar, 2020",
        type: "Buy",
        coin: "Ethereum",
        value: "1.04321 ETH",
        valueInUsd: "$ 9423.73",
        status: "Failed",
        badgeclass: "danger",
      },
      {
        id: 6,
        pdate: "07 Mar, 2020",
        type: "Sell",
        coin: "Bitcoin",
        value: "0.00413 ETH",
        valueInUsd: "$ 2123.01",
        status: "Completed",
        badgeclass: "success",
      },
      {
        id: 7,
        pdate: "07 Mar, 2020",
        type: "Buy",
        coin: "Bitcoin",
        value: "1.00952 BTC",
        valueInUsd: "$ 9067.62",
        status: "Pending",
        badgeclass: "warning",
      },
      {
        id: 8,
        pdate: "08 Mar, 2020",
        type: "Sell",
        coin: "Ethereum",
        value: "0.00413 ETH",
        valueInUsd: "$ 2123.01",
        status: "Completed",
        badgeclass: "success",
      },
      {
        id: 9,
        pdate: "09 Mar, 2020",
        type: "Sell",
        coin: "Litecoin",
        value: "1.00952 LTC",
        valueInUsd: "$ 9067.62",
        status: "Completed",
        badgeclass: "success",
      },
      {
        id: 10,
        pdate: "10 Mar, 2020",
        type: "Buy",
        coin: "Ethereum",
        value: "0.00413 ETH",
        valueInUsd: "$ 2123.01",
        status: "Pending",
        badgeclass: "warning",
      },
      {
        id: 11,
        pdate: "11 Mar, 2020",
        type: "Buy",
        coin: "Ethereum",
        value: "1.04321 ETH",
        valueInUsd: "$ 9423.73",
        status: "Completed",
        badgeclass: "success",
      },
      {
        id: 12,
        pdate: "12 Mar, 2020",
        type: "Sell",
        coin: "Bitcoin",
        value: "0.00413 ETH",
        valueInUsd: "$ 2123.01",
        status: "Completed",
        badgeclass: "success",
      },
      {
        id: 13,
        pdate: "03 Mar, 2020",
        type: "Buy",
        coin: "Bitcoin",
        value: "1.00952 BTC",
        valueInUsd: "$ 9067.62",
        status: "Completed",
        badgeclass: "success",
      },
      {
        id: 14,
        pdate: "04 Mar, 2020",
        type: "Sell",
        coin: "Ethereum",
        value: "0.00413 ETH",
        valueInUsd: "$ 2123.01",
        status: "Completed",
        badgeclass: "success",
      },
      {
        id: 15,
        pdate: "04 Mar, 2020",
        type: "Buy",
        coin: "Bitcoin",
        value: "0.00321 BTC",
        valueInUsd: "$ 1802.62",
        status: "Pending",
        badgeclass: "warning",
      },
      {
        id: 16,
        pdate: "05 Mar, 2020",
        type: "Buy",
        coin: "Litecoin",
        value: "0.00224 LTC",
        valueInUsd: "$ 1773.01",
        status: "Completed",
        badgeclass: "success",
      },
      {
        id: 17,
        pdate: "06 Mar, 2020",
        type: "Buy",
        coin: "Ethereum",
        value: "1.04321 ETH",
        valueInUsd: "$ 9423.73",
        status: "Failed",
        badgeclass: "danger",
      },
      {
        id: 18,
        pdate: "07 Mar, 2020",
        type: "Sell",
        coin: "Bitcoin",
        value: "0.00413 ETH",
        valueInUsd: "$ 2123.01",
        status: "Completed",
        badgeclass: "success",
      },
      {
        id: 19,
        pdate: "07 Mar, 2020",
        type: "Buy",
        coin: "Bitcoin",
        value: "1.00952 BTC",
        valueInUsd: "$ 9067.62",
        status: "Pending",
        badgeclass: "warning",
      },
      {
        id: 20,
        pdate: "08 Mar, 2020",
        type: "Sell",
        coin: "Ethereum",
        value: "0.00413 ETH",
        valueInUsd: "$ 2123.01",
        status: "Completed",
        badgeclass: "success",
      },
      {
        id: 21,
        pdate: "09 Mar, 2020",
        type: "Sell",
        coin: "Litecoin",
        value: "1.00952 LTC",
        valueInUsd: "$ 9067.62",
        status: "Completed",
        badgeclass: "success",
      },
      {
        id: 22,
        pdate: "10 Mar, 2020",
        type: "Buy",
        coin: "Ethereum",
        value: "0.00413 ETH",
        valueInUsd: "$ 2123.01",
        status: "Pending",
        badgeclass: "warning",        
      },
      {
        id: 23,
        pdate: "11 Mar, 2020",
        type: "Buy",
        coin: "Ethereum",
        value: "1.04321 ETH",
        valueInUsd: "$ 9423.73",
        status: "Completed",
        badgeclass: "success",
      },
      {
        id: 24,
        pdate: "12 Mar, 2020",
        type: "Sell",
        coin: "Bitcoin",
        value: "0.00413 ETH",
        valueInUsd: "$ 2123.01",
        status: "Completed",
        badgeclass: "success",
      },
    ];



    const { orders } = this.props
    const status = {
      completed: (
        <span className="badge bg-success font-size-10">Completed</span>
      ),
      pending: (
        <span className="badge bg-warning font-size-10">Pending</span>
      ),
      failed: <span className="badge bg-danger font-size-10">Failed</span>,
    }
    const data = {
      columns: cryptoOrderColumn,
      rows: map(orders, order => ({ ...order, status: status[order.status] })),
    }

    //meta title
    document.title = "Orders | Skote - Vite React Admin & Dashboard Template";

    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs title="Crypto" breadcrumbItem="Orders" />

            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <h4 className="card-title mb-3">Orders</h4>

                    <ul className="nav nav-tabs nav-tabs-custom" role="tablist">
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === "1",
                          })}
                          onClick={() => {
                            this.toggleTab("1")
                          }}
                        >
                          All Orders
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === "2",
                          })}
                          onClick={() => {
                            this.toggleTab("2")
                          }}
                        >
                          Processing
                        </NavLink>
                      </NavItem>
                    </ul>

                    <TabContent
                      activeTab={this.state.activeTab}
                      className="p-3"
                    >
                      <TabPane tabId="1" id="all-order">
                        <Form>
                          <Row>
                            <Col sm="6" className="col-xl">
                              <FormGroup className="mt-3 mb-0">
                                <Label>Date :</Label>
                                <DatePicker
                                  selected={this.state.startDate}
                                  onChange={this.handleChange}
                                  className="form-control"
                                  placeholderText="Select date"
                                />
                              </FormGroup>
                            </Col>

                            <Col sm="6" className="col-xl">
                              <FormGroup className="mt-3 mb-0">
                                <Label>Coin</Label>
                                <select className="form-control select2-search-disable">
                                  <option value="BTC" defaultValue>
                                    Bitcoin
                                  </option>
                                  <option value="ETH">Ethereum</option>
                                  <option value="LTC">litecoin</option>
                                </select>
                              </FormGroup>
                            </Col>

                            <Col sm="6" className="col-xl">
                              <FormGroup className="mt-3 mb-0">
                                <Label>Type</Label>
                                <select className="form-control select2-search-disable">
                                  <option value="BU" defaultValue>
                                    Buy
                                  </option>
                                  <option value="SE">Sell</option>
                                </select>
                              </FormGroup>
                            </Col>

                            <Col sm="6" className="col-xl">
                              <FormGroup className="mt-3 mb-0">
                                <Label>Status</Label>
                                <select className="form-control select2-search-disable">
                                  <option value="CO" defaultValue>
                                    Completed
                                  </option>
                                  <option value="PE">Pending</option>
                                </select>
                              </FormGroup>
                            </Col>

                            <Col sm="6" className="col-xl align-self-end">
                              <div className="mb-3">
                                <Button
                                  type="button"
                                  color="primary"
                                  className="w-md">
                                  Add Order
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </Form>

                        <div className="mt-3">
                          <BootstrapTable responsive keyField='id' data={productData} columns={columns} pagination={paginationFactory()} />
                        </div>

                      </TabPane>
                      <TabPane tabId="2" id="processing">
                        <div className="mt-3">
                          <BootstrapTable responsive keyField='id' data={productData} columns={columns} pagination={paginationFactory()} />
                        </div>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

CryptoOrders.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
}

const mapStateToProps = ({ crypto }) => ({
  orders: crypto.orders,
})

const mapDispatchToProps = dispatch => ({
  onGetOrders: () => dispatch(getCryptoOrders()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CryptoOrders))
