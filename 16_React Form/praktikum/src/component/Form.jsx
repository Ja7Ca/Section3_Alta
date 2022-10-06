import { useState, useRef } from "react"
import '../css/form.css'

const Form = () => {
    const dataKosong ={
        name: "",
        email: "",
        noHandphone: "",
        pendidikan: "",
        kelas: "",
        surat: "",
        harapan: ""
    }

    const surat = useRef(null)
    const [data, setData] = useState(dataKosong)
    console.log(data)
    const nameRegex = /^[A-Za-z" "]+$/
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const noHandphoneRegex = /^[0-9]*$/
    const [errMsg, setErrMsg] = useState({
        name: "",
        email: "",
        noHandphone: ""
    })
    const handleInput = e => {
        const name = e.target.name
        const value = e.target.value

        if(name === 'name'){
            if(nameRegex.test(value)){
                setErrMsg("")
            } else {
                setErrMsg({
                    ...errMsg,
                    [name]: "Nama harus berupa huruf"
                })
            }
        }
        if(name === 'email'){
            if(emailRegex.test(value)){
                setErrMsg("")
            } else {
                setErrMsg({
                    ...errMsg,
                    [name]: "Email tidak sesuai"
                })
            }
        }
        if(name === 'noHandphone'){
            if(noHandphoneRegex.test(value)){
                setErrMsg("")
            } else {
                setErrMsg({
                    ...errMsg,
                    [name]: "No HP tidak sesuai"
                })
            }
        }

        setData(
            {
                ...data,
                [name]: value
            }
        )
    }

    const handleSubmit = (e) => {
        if(errMsg.name === '' && errMsg.email === '' && errMsg.noHandphone === ''){
            alert("Terdapat data yang tidak sesuai")
        } else {
            if(data.kelas !== '' && data.pendidikan !== ''){
                alert(`Pendaftar ${data.name} berhasil diterima`)
            } else {
                alert("Masih ada yang kosong")
            }
            
        }
        e.preventDefault()
    }

    const resetData = () => {
        setData(dataKosong)
        setErrMsg({
            name: "",
            email: "",
            noHandphone: ""
        })
    }

    return (
        <div className="container">
            <h1 style={{ "text-align": "center" }}>Pendaftaran Bootcamp</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Nama:</p>
                    <input 
                        className="form-control"
                        name="name"
                        type="text"
                        required
                        value={data.name}
                        onChange={handleInput}
                    />
                </label>
                <span style={{ "color": "red"}}>{errMsg.name}</span>
                <label>
                    <p>Email :</p>
                    <input 
                        className="form-control"
                        name="email"
                        type="text"
                        required
                        value={data.email}
                        onChange={handleInput}
                    />
                </label>
                <span style={{ "color": "red"}}>{errMsg.email}</span>
                <label>
                    <p>No Handphone :</p>
                    <input 
                        className="form-control"
                        name="noHandphone"
                        type="text"
                        value={data.noHandphone}
                        onChange={handleInput}
                        maxLength={14}
                        minLength={9}
                    />
                </label>
                <span style={{ "color": "red"}}>{errMsg.noHandphone}</span>
                <label>
                    <p>Latar Belakang Pendidikan:</p>
                    <>
                    <input 
                        className=""
                        name="pendidikan"
                        type="radio"
                        value="it"
                        onChange={handleInput}
                    />
                    <label>IT</label>
                    <input 
                        className=""
                        name="pendidikan"
                        type="radio"
                        value="nonIT"
                        onChange={handleInput}
                    />
                    <label>Non IT</label>
                    </>
                </label>
                <label>
                    <p>Kelas Coding yang dipilih:</p>
                    <select name="kelas" onChange={handleInput} className="form-control" style={{ "padding": "7px 0px", "border-radius": "4px" }}>
                        <option value="">Pilih Salah Satu Progam</option>
                        <option value="golang">Coding Backend With Golang</option>
                        <option value="reactjs">Coding Frontend With ReactJs</option>
                        <option value="fullstack">Fullstack Developer</option>
                    </select>
                </label>
                <label>
                    <p>Foto Surat Kesungguhan:</p>
                    <input 
                        className="form-control"
                        name="surat"
                        type="file"
                        refs={surat}
                        required
                    />
                </label>
                <label>
                    <p>Harapan :</p>
                    <textarea 
                        className="form-control"
                        name="harapan"
                        type="text"
                        required
                        value={data.harapan}
                        onChange={handleInput}
                    />
                </label>
                <button type="submit" className="btn-green">Submit</button>
                <button type="reset" className="btn-red" onClick={resetData}>Reset</button>
            </form>
        </div>
    )
}

export default Form