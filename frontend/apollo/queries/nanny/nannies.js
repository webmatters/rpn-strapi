import gql from "graphql-tag";

const NANNIES_QUERY = gql`
  query {
    nannies {
      name
      _id
    }
  }
`;

export default NANNIES_QUERY;
