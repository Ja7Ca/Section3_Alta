import { useLazyQuery, useSubscription } from '@apollo/client';
import { useState } from 'react';
import { GetPassengerById, subscription } from "../config/typeDefs"

const ListPassenger = ({ hapusPengunjung, onClickEdit }) => {
    const { data, loading, error, refetch} = useSubscription(subscription);
    console.log(error)
    const [GetPassengersById, { data: passengerByIdData }] = useLazyQuery(GetPassengerById);
    const [passengerId, setPassengerId] = useState("")

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error</p>;
    }
    
    const onChangePassengerId = (e) => {
        if (e.target) {
            setPassengerId(e.target.value)
        }
    }

    const handleChangePassengerById = (e) => {
        e.preventDefault();
        GetPassengersById({
            variables: {
                id: passengerId,
            },
        });
    };

    return (
        <div>
            <form>
                <label>
                    Input Id Pelanggan
                    <input
                        type="text"
                        value={passengerId}
                        onChange={onChangePassengerId}
                        style={{ margin: 20 }}
                    />
                </label>
                <button onClick={handleChangePassengerById}>Cari</button>
                <button onClick={refetch}>Reset</button>
            </form>

            <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
                <thead>
                    <tr bgcolor="red">
                        <td>Nama</td>
                        <td>Umur</td>
                        <td>Jenis Kelamin</td>
                        <td bgcolor="white" className="removeBorder"></td>
                    </tr>
                </thead>
                <tbody>
                    {passengerByIdData ? passengerByIdData.todo.map(({ id, nama, umur, jenisKelamin }) => (
                        <tr key={id}>
                            <td>{nama}</td>
                            <td>{umur}</td>
                            <td>{jenisKelamin}</td>
                            <td className="removeBorder" onClick={() => hapusPengunjung(id)}><button>Hapus</button></td>
                            <td
                                className="removeBorder"
                                onClick={() => onClickEdit({id, nama, umur, jenisKelamin})}
                            >
                                <button>Edit</button>
                            </td>
                        </tr>
                    )
                    ) : data.todo.map(({ id, nama, umur, jenisKelamin }) => (
                        <tr key={id}>
                            <td>{nama}</td>
                            <td>{umur}</td>
                            <td>{jenisKelamin}</td>
                            <td className="removeBorder" onClick={() => hapusPengunjung(id)}><button>Hapus</button></td>
                            <td
                                className="removeBorder"
                                onClick={() => onClickEdit({id, nama, umur, jenisKelamin})}
                            >
                                <button>Edit</button>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListPassenger;