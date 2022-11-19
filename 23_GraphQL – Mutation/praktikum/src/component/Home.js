import { useMutation } from "@apollo/client"
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { createPassenger, deletePassengerById, GetPassengers, updatePassengerById } from "../config/typeDefs";
import PassengerUpdate from "./PassengerUpdate";
import { useState } from "react";

const Home = () => {

    const [insertPassenger] = useMutation(createPassenger, { refetchQueries: [{ query: GetPassengers }] })
    const [deletePassenger] = useMutation(deletePassengerById, { refetchQueries: [{ query: GetPassengers }] })
    const [updatePassenger] = useMutation(updatePassengerById, { refetchQueries: [{ query: GetPassengers }] })

    const removePassenger = ids => {
        deletePassenger({
            variables: {
                id: ids,
            },
        });
    };

    const tambahPengunjung = newUser => {
        const newData = {
            ...newUser,
        };
        insertPassenger({
            variables: {
                nama: newData.nama,
                umur: newData.umur,
                jenisKelamin: newData.jenisKelamin,
            },
        });
    };

    const [edit, setEdit] = useState({
        id: "",
        nama: "",
        jenisKelamin: "",
        umur: "",
    });

    const onClickEdit = (data) => {
        setEdit({
            id: data.id,
            nama: data.nama,
            jenisKelamin: data.jenisKelamin,
            umur: data.umur
        });
    };

    const editPassenger = updateUser => {
        const editData = {
            ...updateUser,
        };
        updatePassenger({
            variables: {
                id: editData.id,
                nama: editData.nama,
                umur: editData.umur,
                jenisKelamin: editData.jenisKelamin,
            },
        });
    }

    return (
        <div>
            <Header />
            <ListPassenger
                hapusPengunjung={removePassenger}
                editPassenger={editPassenger}
                onClickEdit={onClickEdit}
            />
            <PassengerInput
                tambahPengunjung={tambahPengunjung}
            />
            <PassengerUpdate edit={edit} editPassenger={editPassenger} />
        </div>
    )
}
export default Home;