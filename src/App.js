import { useState, useEffect } from "react";
import "./App.css";
import { Button, Spinner, Image, Skeleton, Input } from "@chakra-ui/react";
import Card from "./components/Card";
import axios from "axios";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SugnUp";
import HouseList from "./components/HouseList";
import Detalle from "./components/Detalle";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [dataCp, setDataCp] = useState([]);
  const [search, setSearch] = useState("");

  {
    /*
  const [url, setUrl] = useState("")
  */
  }
  useEffect(() => {
    //    fetch("https://ironbnb-m3.herokuapp.com/apartments")
    //    .then(datos => {
    //      datos.json()
    //      .then(casas => {
    //        console.log("Aqui van las casas: ", casas)
    //        setData(casas)
    //        setShow(false)
    //      })
    //    })
    //    .catch(console.log)
    axios
      .get("https://ironbnb-m3.herokuapp.com/apartments")
      .then((datos) => {
        setData(datos.data);
        setDataCp(datos.data)
      })
      .catch(console.log);
  }, []);

  const toggleShow = () => {
    setShow(!show);
  };

  const actualizarInput = (e) => {
    setSearch(e.target.value)
  }

  //UseEffect checks the update of the input state
  useEffect(() => {
    console.log("Se esta actualizando")
    const dataFilter = dataCp.filter((casa) => {
      return casa.title.toLowerCase().includes(search.toLocaleLowerCase())
    })
    setData(dataFilter)
  }, [search])

  return (

      <Router>
      <Navbar />
      <Input placeholder="Buscar" value={search} onChange={actualizarInput}/>
      <Routes>

        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/casas/:id" element={<Detalle/>}/>
        <Route path="/" element={<HouseList data={data}/>}/>
      </Routes>

      </Router>

  );
}

export default App;
