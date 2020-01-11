import React from 'react'
import { useAuth0 } from "../../react-auth0-spa"
import BaseLayout from "../layouts/BaseLayout"
import BasePage from "../BasePage"
import { Container } from "reactstrap"

const namespace = 'http://localhost:3000/';

export default role => (
   Component => {
    const renderProtectedPage = (props) => {
      const { isAuthenticated, user } = useAuth0();
      const userRole = user && user[`${namespace}role`];
      let isAuthorized = false;

      if (role) {
        if (userRole && userRole === role) isAuthorized = true;
      } else {
        isAuthorized = true;
      }

      if (!isAuthenticated) {
        return (
          <BaseLayout>
            <BasePage>
              <Container>
                <h1>You are not authenticated. please login to access this page.</h1>
              </Container>
            </BasePage>
          </BaseLayout>
        )
      } else if (!isAuthorized) {
        return (
          <BaseLayout>
            <BasePage>
              <Container>
                <h1>You are not authorized. You dont have a permission to visit this page.</h1>
              </Container>
            </BasePage>
          </BaseLayout>
        )
      } else {
        return(
          <Component {...props} />
        )
      }
    };
    return function withAuth(props) {
      return renderProtectedPage(props)
    }
  }
)


