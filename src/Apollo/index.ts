import { gql } from "apollo-boost";

export const RICKY_QUERY = gql`
  query Characters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        created
      }
    }
    character(id: 1) {
      id
    }
  }
`;
