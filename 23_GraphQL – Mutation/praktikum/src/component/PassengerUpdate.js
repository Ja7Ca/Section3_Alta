import { useEffect, useState } from "react";
import "./Home.css";

function PassengerUpdate(props) {
  const [state, setState] = useState({
    ...props.edit,
    editing: true,
  });

  useEffect(() => {
    if (props.edit.nama !== "") {
      setState({
        ...props.edit,
        editing: false,
      });
    }
  }, [props.edit]);

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.nama.trim() && state.umur && state.jenisKelamin) {
      const umur = state.umur;
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai");
      } else {
        const editData = {
          id: state.id,
          nama: state.nama,
          umur: state.umur,
          jenisKelamin: state.jenisKelamin,
        };
        props.editPassenger(editData);
        console.log(state.nama)
        setState({
          editing: true
        });
        alert("Data berhasil diubah!")
      }
    } else {
      alert("Data masih ada yang kosong");
    }
  };
  
  const handleTutupInput = () => {
    setState({
      ...state,
      editing: true,
    });
  };

  let viewMode = {};
  let editMode = {};

  if (state.editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Edit Nama</p>
        <input
          type="text"
          className="input-text"
          placeholder="Nama ..."
          defaultValue={state.nama}
          name="nama"
          onChange={onChange}
        />
        <p>Edit Umur</p>
        <input
          type="number"
          className="input-text"
          placeholder="Umur ..."
          defaultValue={state.umur}
          name="umur"
          onChange={onChange}
        />
        <p>Edit Jenis Kelamin</p>
        <select onChange={onChange} name="jenisKelamin" value={state.jenisKelamin}>
          <option value="Pria">
            Pria
          </option>
          <option value="Wanita">
            Wanita
          </option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Update</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
    </div>
  );
}

export default PassengerUpdate;