import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Card,
  CardBody,
  CardTitle,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

class UiOffCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isTop: false,
      isRight: false,
      isBottom: false,
      isEnableScroll: false,
      isBackdrop: false,
      isScrollBackDrop: false,
    };
    this.toggleLeftCanvas = this.toggleLeftCanvas.bind(this);
    this.toggleTopCanvas = this.toggleTopCanvas.bind(this);
    this.toggleRightCanvas = this.toggleRightCanvas.bind(this);
    this.toggleBottomCanvas = this.toggleBottomCanvas.bind(this);
    this.toggleEnableScroll = this.toggleEnableScroll.bind(this);
    this.toggleBackdrop = this.toggleBackdrop.bind(this);
    this.toggleScrollBackDrop = this.toggleScrollBackDrop.bind(this);
  }

  toggleTopCanvas() {
    this.setState({ isTop: !this.state.isTop });
  }
  toggleBottomCanvas() {
    this.setState({ isBottom: !this.state.isBottom });
  }
  toggleLeftCanvas() {
    this.setState({ open: !this.state.open });
  }
  toggleRightCanvas() {
    this.setState({ isRight: !this.state.isRight });
  }
  toggleEnableScroll() {
    this.setState({ isEnableScroll: !this.state.isEnableScroll });
  }
  toggleBackdrop() {
    this.setState({ isBackdrop: !this.state.isBackdrop });
  }
  toggleScrollBackDrop() {
    this.setState({ isScrollBackDrop: !this.state.isScrollBackDrop });
  }

  

  render() {
    //meta title
    document.title = "OffCanvas | Skote - React Admin & Dashboard Template";
    return (
      <React.Fragment>
        <div className="page-content">
          <div className="container-fluid">
            <Breadcrumbs title="Ui Elements" breadcrumbItem="OffCanvas" />
            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Demo</CardTitle>
                    <p className="card-title-desc">
                      Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the <code>.show</code>
                      class on an element with the <code>.offcanvas</code> class.
                    </p>
                    <div>
                      <Button
                        color="primary"
                        onClick={this.toggleLeftCanvas}
                        className="me-2"
                      >
                        Link with href
                      </Button>
                      <Button
                        color="primary"
                        type="button"
                        onClick={this.toggleLeftCanvas}
                      >
                        Button with data-bs-target
                      </Button>
                      <Offcanvas
                        isOpen={this.state.open}
                        toggle={this.toggleLeftCanvas}
                      >
                        <OffcanvasHeader toggle={this.toggleLeftCanvas}>
                          Offcanvas
                        </OffcanvasHeader>
                        <OffcanvasBody>
                          <div>
                            Some text as placeholder. In real life you can have
                            the elements you have chosen. Like, text, images,
                            lists, etc.
                          </div>
                          <UncontrolledDropdown className="mt-3">
                            <DropdownToggle
                              type="button"
                              color="primary"
                            >
                              Dropdown button{" "}
                              <i className="mdi mdi-chevron-down"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                              <li>
                                <DropdownItem>Action</DropdownItem>
                              </li>
                              <li>
                                <DropdownItem>Another action</DropdownItem>
                              </li>
                              <li>
                                <DropdownItem>Something else here</DropdownItem>
                              </li>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </OffcanvasBody>
                      </Offcanvas>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Placement</CardTitle>
                    <p className="card-title-desc">
                      Offcanvas Diffrent Placement Example: Top, End & Bottom
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <Button color="primary" onClick={this.toggleTopCanvas}>
                        Toggle top offcanvas
                      </Button>
                      <Button color="primary" onClick={this.toggleRightCanvas}>
                        Toggle right offcanvas
                      </Button>
                      <Button color="primary" onClick={this.toggleBottomCanvas}>
                        Toggle bottom offcanvas
                      </Button>
                    </div>
                    {/* Top offcanvas */}
                    <Offcanvas
                      isOpen={this.state.isTop}
                      direction="top"
                      toggle={this.toggleTopCanvas}
                    >
                      <OffcanvasHeader toggle={this.toggleTopCanvas}>
                        Offcanvas Top
                      </OffcanvasHeader>
                      <OffcanvasBody>...</OffcanvasBody>
                    </Offcanvas>
                    {/* Right offcanvas */}
                    <Offcanvas
                      isOpen={this.state.isRight}
                      direction="end"
                      toggle={this.toggleRightCanvas}
                    >
                      <OffcanvasHeader toggle={this.toggleRightCanvas}>
                        Offcanvas Right
                      </OffcanvasHeader>
                      <OffcanvasBody>...</OffcanvasBody>
                    </Offcanvas>
                    {/* Bottom offcanvas */}
                    <Offcanvas
                      isOpen={this.state.isBottom}
                      direction="bottom"
                      toggle={this.toggleBottomCanvas}
                    >
                      <OffcanvasHeader toggle={this.toggleBottomCanvas}>
                        Offcanvas Bottom
                      </OffcanvasHeader>
                      <OffcanvasBody>...</OffcanvasBody>
                    </Offcanvas>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="h5">Responsive</CardTitle>
                    <p className="card-title-desc">Responsive offcanvas classes are available across for each breakpoint.</p>

                    <div className="d-flex flex-wrap gap-2">
                      <button className="btn btn-primary d-lg-none" type="button">Toggle offcanvas</button>
                    </div>
                    <div className="alert alert-info d-none d-lg-block">Resize your browser to show the responsive offcanvas toggle.</div>

                    <div className="offcanvas-lg offcanvas-end" id="offcanvasResponsive">
                      <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
                        <button type="button" className="btn-close"></button>
                      </div>
                      <div className="offcanvas-body">
                        <p className="mb-0">This is content within an <code>.offcanvas-lg</code>.</p>
                      </div>
                    </div>

                    <p className="card-title-desc mt-3 mb-2">Responsive offcanvas classes are available across for each breakpoint.</p>
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item"><code>.offcanvas</code>,</li> {" "}
                      <li className="list-inline-item"><code>.offcanvas-sm</code>,</li> {" "}
                      <li className="list-inline-item"><code>.offcanvas-md</code>,</li> {" "}
                      <li className="list-inline-item"><code>.offcanvas-lg</code>,</li> {" "}
                      <li className="list-inline-item"><code>.offcanvas-xl</code>,</li> {" "}
                      <li className="list-inline-item"><code>.offcanvas-xxl</code></li> {" "}
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Backdrop</CardTitle>
                    <p className="card-title-desc">
                      Scrolling the <code>&lt;body&gt;</code> element is disabled when an offcanvas and its backdrop are visible.
                      Use the <code>data-bs-scroll</code> attribute to toggle <code>&lt;body&gt;</code> scrolling and <code>backdrop</code> to toggle the backdrop.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <Button color="primary" onClick={this.toggleEnableScroll}>
                        Enable body scrolling
                      </Button>
                      <Button color="primary" onClick={this.toggleBackdrop}>
                        Enable backdrop (default)
                      </Button>
                      <Button
                        color="primary"
                        onClick={this.toggleScrollBackDrop}
                      >
                        Enable both scrolling & backdrop
                      </Button>
                    </div>
                    <Offcanvas
                      isOpen={this.state.isEnableScroll}
                      scrollable
                      backdrop={false}
                      toggle={this.toggleEnableScroll}
                    >
                      <OffcanvasHeader toggle={this.toggleEnableScroll}>
                        Colored with scrolling
                      </OffcanvasHeader>
                      <OffcanvasBody>
                        <div>
                          Try scrolling the rest of the page to see this option
                          in action.
                        </div>
                      </OffcanvasBody>
                    </Offcanvas>

                    <Offcanvas
                      isOpen={this.state.isBackdrop}
                      toggle={this.toggleBackdrop}>
                      <OffcanvasHeader toggle={this.toggleBackdrop}>
                        Offcanvas with backdrop
                      </OffcanvasHeader>
                      <OffcanvasBody>
                        <p>.....</p>
                      </OffcanvasBody>
                    </Offcanvas>                   

                    <Offcanvas
                      isOpen={this.state.isScrollBackDrop}
                      scrollable
                      toggle={this.toggleScrollBackDrop}
                    >
                      <OffcanvasHeader toggle={this.toggleScrollBackDrop}>
                        Backdroped with scrolling
                      </OffcanvasHeader>
                      <OffcanvasBody>
                        <div>
                          Try scrolling the rest of the page to see this option
                          in action.
                        </div>
                      </OffcanvasBody>
                    </Offcanvas>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UiOffCanvas;
