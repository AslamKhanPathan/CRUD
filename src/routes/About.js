import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const [data, setData] = useState([]);
  const [orinaldata, setOriginaldata] = useState([]);

  const [text, setText] = useState();
  const apidata = async () => {
    const response = await axios.get("http://localhost:3000/taskdata");

    const t = new Date();
    const time1 = t.getHours() + ":" + t.getMinutes();
    console.log("time", time1, t.getTime());
    const temp = response.data?.map((it, i) => {
      return {
        ...it,
        status: it.start > time1 ? "Scedule" : "Expired",
      };
    });

    setData(temp);
    setOriginaldata(temp);
  };

  const deletdata = async (id) => {
    const response = await axios.delete("http://localhost:3000/taskdata/" + id);

    console.log(response)
    if (response.status === 200) {
      
      apidata();
      alert("task deleted succesfully")
    }
  };

  const searchtask = (e) => {
    const txt = e.target.value;
    setText(txt);
    const filtered = data.filter((Elem) =>
      Elem.taskname.toLocaleLowerCase().includes(txt.toLocaleLowerCase())
    );

    setData(txt.trim().length == 0 ? orinaldata : filtered);
  };

  useEffect(() => {
    apidata();
  }, []);

  const updateDate = () => {
    const sortdata = data
      .slice()
      .sort((current, next) => new Date(next.date1) - new Date(current.date1));
    setData(sortdata);
    console.log("sort--->", sortdata);
  };

  let navigate = useNavigate();
  const Privouspage = () => {
    navigate("/contact");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          placeholder="search taskname"
          onChange={searchtask}
        />
        <button onClick={updateDate}>update date</button>

        <button onClick={Privouspage}>Privouspage</button>
      </div>
      <Table bordered hover className="tables">
        <thead>
          <tr>
            <th>id</th>
            <th> taskname</th>
            <th> discreption</th>
            <th>date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        {data.map((item, id) => (
          <tbody key={item.id}>
            <tr>
              <td>{id + 1}</td>
              <td>
                <input value={item.taskname} disabled />
              </td>

              <td>
                <input value={item.discription} disabled />
              </td>
              <td>{item.date1}</td>
              <td
                style={{ color: item.status === "Expired" ? "red" : "green" }}
              >
                {item.status}
              </td>
              <td>
                <Button variant="danger" onClick={() => deletdata(item.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
     
    </div>
  );
};
