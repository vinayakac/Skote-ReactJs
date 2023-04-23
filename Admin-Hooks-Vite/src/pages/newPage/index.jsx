import React from 'react';
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

    const newPage = () => {
        //meta title
        document.title="New Page | Skote - React Admin & Dashboard Template";
        return (
            <>
                <div className="page-content">
                    <Container fluid={true}>
                        <Breadcrumbs title="Hi" breadcrumbItem="New Page" />
                        Hello this is new page
                    </Container>
                </div>
            </>
        );
    }

export default newPage;