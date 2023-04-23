import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { Col, Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb";

import { getProjectDetail } from "/src/store/projects/actions";
import ProjectDetail from "./projectDetail";
import TeamMembers from "./teamMembers";
import OverviewChart from "./overviewChart";
import { options, series } from "../../../common/data/projects";
import AttachedFiles from "./attachedFiles";
import Comments from "./comments";

class ProjectsOverview extends Component {
  componentDidMount() {
    const {
      match: { params },
      onGetProjectDetail,
    } = this.props;
    if (params && params.id) {
      onGetProjectDetail(params.id);
    } else {
      onGetProjectDetail(0); //remove this after full integration
    }
  }

  render() {
    //meta title
    document.title =
      "Project Overview | Skote - Vite React Admin & Dashboard Template";

    const { projectDetail } = this.props;

    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="Projects" breadcrumbItem="Project Overview" />

            {!isEmpty(projectDetail) && (
              <>
                <Row>
                  <Col lg="8">
                    <ProjectDetail project={projectDetail} />
                  </Col>

                  <Col lg="4">
                    <TeamMembers team={projectDetail.team} />
                  </Col>
                </Row>

                <Row>
                  <Col lg="4">
                    <OverviewChart dataColors='["--bs-primary"]' />
                  </Col>

                  <Col lg="4">
                    <AttachedFiles files={projectDetail.files} />
                  </Col>

                  <Col lg="4">
                    <Comments comments={projectDetail.comments} />
                  </Col>
                </Row>
              </>
            )}
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

ProjectsOverview.propTypes = {
  projectDetail: PropTypes.any,
  match: PropTypes.object,
  onGetProjectDetail: PropTypes.func,
};

const mapStateToProps = ({ projects }) => ({
  projectDetail: projects.projectDetail,
});

const mapDispatchToProps = (dispatch) => ({
  onGetProjectDetail: (id) => dispatch(getProjectDetail(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProjectsOverview));
