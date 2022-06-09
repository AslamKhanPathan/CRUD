import React, { useState, useEffect } from "react";
import {  Table } from "react-bootstrap";
import "../Project/allcssproject/contact.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Contact = () => {
  const [taskname, setTaskname] = useState("");
  const [discription, setDiscription] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState("");
  const [data, setData] = useState([]);
  const [date1, setdate1] = useState("");

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
   
  };
  const apidatapost = async () => {
    console.log(
      "lenght",
      taskname.trim().length,
      discription.trim().length,
      start.length,
      end.length
    );
    if (
      taskname.trim().length === 0 ||
      discription.trim().length === 0 ||
      start.length === 0 ||
      end.length === 0
    ) {
      alert("please fill the data");
      return;
    }
    const alldata = { taskname, discription, start, end, date1 };
    try {
      const response = await axios.post(
        "http://localhost:3000/taskdata",
        alldata
      );
      apidata();
      console.log("check data", response);
    } catch (e) {
      console.log("hyyu", e);
    }
  };
  useEffect(() => {
    apidata();
  }, []);
  let navigate = useNavigate();
  const nextpage=()=>{
    navigate("/about") 
  }

  return (
    <div>
      <input
        type="text"
        placeholder="taskname"
        onChange={(e) => setTaskname(e.target.value)}
        id="taskname"
      />
      <input
        type="text"
        placeholder="discription"
        onChange={(e) => setDiscription(e.target.value)}
        id="discription"
      />
      <input
        type="date"
        value={date1}
        placeholder="date"
        onChange={(e) => setdate1(e.target.value)}
        id="date"
      />
      <input
        type="time"
        value={start}
        placeholder="start time"
        onChange={(e) => setStart(e.target.value)}
        id="start"
      />
      <input
        type="time"
        value={end}
        placeholder="end time"
        onChange={(e) => setEnd(e.target.value)}
        id="end"
      />

      <button onClick={apidatapost}>Add Task</button>

      <button onClick={nextpage}>next page</button>

      <Table bordered hover className="tables">
        <thead>
          <tr>
            <th> taskname</th>
            <th> discreption</th>
            <th>Dates</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>
                <input value={item.taskname} disabled />
              </td>

              <td>
                <input value={item.discription} disabled />
              </td>
              <td> {item.date1}</td>
              <td
                style={{ color: item.status === "Expired" ? "red" : "green" }}
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
