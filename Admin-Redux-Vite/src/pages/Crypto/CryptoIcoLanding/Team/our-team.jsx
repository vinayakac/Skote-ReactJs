import React, { Component } from "react"
import { Container, Row, Col, Card, CardBody, CardFooter, UncontrolledTooltip } from "reactstrap"
import { Link } from "react-router-dom"

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "../../../../../node_modules/swiper/swiper.scss";

//Import Images
import avatar2 from "../../../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../../../assets/images/users/avatar-3.jpg"
import avatar8 from "../../../../assets/images/users/avatar-8.jpg"
import avatar5 from "../../../../assets/images/users/avatar-5.jpg"
import avatar1 from "../../../../assets/images/users/avatar-1.jpg"

class OurTeam extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step1: true,
      step2: false,
      candidates: [
        {
          imgUrl: avatar2,
          name: "Mark Hurley",
          designation: "CEO & Lead",
          socials: [
            { id: 1, icon: "mdi mdi-facebook", title: "Facebook", url: "#" },
            { id: 2, icon: "mdi mdi-linkedin", title: "Linkedin", url: "#" },
            { id: 3, icon: "mdi mdi-google", title: "Google", url: "#" },
          ],
        },
        {
          imgUrl: avatar3,
          name: "Calvin Smith",
          designation: "Blockchain developer",
          socials: [
            { id: 4, icon: "mdi mdi-facebook", title: "Facebook", url: "#" },
            { id: 5, icon: "mdi mdi-linkedin", title: "Linkedin", url: "#" },
            { id: 6, icon: "mdi mdi-google", title: "Google", url: "#" },
          ],
        },
        {
          imgUrl: avatar8,
          name: "Vickie Sample",
          designation: "Designer",
          socials: [
            { id: 7, icon: "mdi mdi-facebook", title: "Facebook", url: "#" },
            { id: 8, icon: "mdi mdi-linkedin", title: "Linkedin", url: "#" },
            { id: 9, icon: "mdi mdi-google", title: "Google", url: "#" },
          ],
        },
        {
          imgUrl: avatar5,
          name: "Vickie Sample",
          designation: "Designer",
          socials: [
            { id: 10, icon: "mdi mdi-facebook", title: "Facebook", url: "#" },
            { id: 11, icon: "mdi mdi-linkedin", title: "Linkedin", url: "#" },
            { id: 12, icon: "mdi mdi-google", title: "Google", url: "#" },
          ],
        },
        {
          imgUrl: avatar1,
          name: "Alma Farley",
          designation: "App developer",
          socials: [
            { id: 13, icon: "mdi mdi-facebook", title: "Facebook", url: "#" },
            { id: 14, icon: "mdi mdi-linkedin", title: "Linkedin", url: "#" },
            { id: 15, icon: "mdi mdi-google", title: "Google", url: "#" },
          ],
        },
      ],
      responsive: {
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    }
  }
  render() {
    return (
      <React.Fragment>
        <section className="section" id="team">
          <Container>
            <Row>
              <Col lg="12">
                <div className="text-center mb-5">
                  <div className="small-title">Team</div>
                  <h4>Meet our team</h4>
                </div>
              </Col>
            </Row>

            <Col lg="12"> 
              {/* <div className="hori-timeline"> */}
              <Swiper
              slidesPerView={1}
              spaceBetween={25}
              navigation
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                678: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 4,
                }
              }}             
              loop={true}
              modules={[Pagination, Navigation]}
              className="owl-carousel owl-theme events navs-carousel" id="team-carousel" dir="ltr">
              {this.state.candidates.map((item, key) => (
                <SwiperSlide key={key} className="item">
                <Card className="text-center team-box">
                  <CardBody>
                    <div>
                      <img src={item.imgUrl} alt="" className="rounded w-100" />
                    </div>

                    <div className="mt-3">
                      <h5>{item.name}</h5>
                      <p className="text-muted mb-0">{item.designation}</p>
                    </div>
                  </CardBody>
                  <CardFooter className="bg-transparent border-top">
                    <div className="d-flex mb-0 team-social-links">
                      <div className="flex-fill">
                        <Link to="#" id="facebook">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </div>
                      <UncontrolledTooltip placement="top" target="facebook">
                        Facebook
                      </UncontrolledTooltip>

                      <div className="flex-fill">
                        <Link to="#" id="linkedin">
                          <i className="mdi mdi-linkedin"></i>
                        </Link>
                      </div>
                      <UncontrolledTooltip placement="top" target="linkedin">
                        Linkedin
                      </UncontrolledTooltip>

                      <div className="flex-fill">
                        <Link to="#" id="google">
                          <i className="mdi mdi-google"></i>
                        </Link>
                      </div>
                      <UncontrolledTooltip placement="top" target="google">
                        Google
                      </UncontrolledTooltip>

                    </div>
                  </CardFooter>
                </Card>
              </SwiperSlide>
              ))}              
            </Swiper>
              {/* </div> */}
            </Col>
          </Container>
        </section>
      </React.Fragment>
    )
  }
}

export default OurTeam
