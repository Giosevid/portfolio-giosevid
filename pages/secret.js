import React, { useEffect, useState } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Container } from 'reactstrap'
import withAuth from '../components/hoc/withAuth'
import { getSecretData } from "../actions";

const Secret = () => {
  const [secretData, setSecretData] = useState([]);
  useEffect( () => {
    const result = getSecretData();
    result.then(data => setSecretData(data));
  }, []);

  const displaySecretData = () => {
    if (secretData && secretData.length >0){
      return secretData.map((data, index) => {
        const { title, description } = data;
        return (
          <div key={index}>
            <p>{ title }</p>
            <p>{ description }</p>
          </div>
        )
      })
    }
    return null
  };

  return(
    <BaseLayout>
      <BasePage>
        <Container>
          <h1>Im secret page</h1>
          { displaySecretData() }
        </Container>
      </BasePage>
    </BaseLayout>
  )
};

export default withAuth()(Secret);

