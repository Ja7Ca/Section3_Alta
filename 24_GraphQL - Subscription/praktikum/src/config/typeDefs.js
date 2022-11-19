import { gql } from "@apollo/client";

export const GetPassengerById = gql`
query MyQuery($id: Int) {
  todo(where: { id: { _eq: $id } }) {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;
export const GetPassengers = gql`
query GetPassengers {
  todo {
    id
    jenisKelamin
    nama
    umur
  }
}
`;
export const createPassenger = gql`
mutation MyMutation($jenisKelamin: String, $nama: String, $umur: Int) {
  insert_todo(objects: {nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin}) {
    returning {
      id
      jenisKelamin
      nama
      umur
    }
  }
}
`

export const deletePassengerById = gql`
mutation MyMutation($id: Int) {
  delete_todo(where: {id: {_eq: $id}}) {
    returning {
      id
      jenisKelamin
      nama
      umur
    }
  }
}
`
export const updatePassengerById = gql`
mutation MyMutation($id: Int, $nama: String, $umur: Int, $jenisKelamin: String) {
  update_todo(
    where: { id: { _eq: $id } }
    _set: { nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin}
  ) {
    returning {
      id
      nama
      umur
      jenisKelamin
    }
  }
}
`

export const subscription = gql`
subscription MySubscription {
  todo {
    id
    jenisKelamin
    nama
    umur
  }
}
`;