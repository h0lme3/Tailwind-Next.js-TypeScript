import React from "react";

import Layout from "layouts";
import { Container } from "./styled";
import { Text } from "components/Text";

const ProView = () => {
  return (
    <Container>
      <Layout>
        <Text align="left" color="#4c9b34" size={40} weight={600}>
          TypeScript + Next.js
        </Text>
        <Text align="center" color="#b47017" size={90} weight={600}>
          TNTs
        </Text>
        <Text align="right" color="#4626b9" size={40} weight={600}>
          Tailwind CSS + styled-components
        </Text>
      </Layout>
    </Container>
  );
};

export default ProView;
