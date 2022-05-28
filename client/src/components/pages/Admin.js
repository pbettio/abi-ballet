import React from "react";
import axios from "axios";
import {
  BsFillCheckCircleFill,
  BsXCircleFill,
  BsExclamationTriangle,
  BsTrash,
} from "react-icons/bs";
import "./Admin.css";

class Admin extends React.Component {
  state = {
    allStudents: [],
  };

  componentDidMount() {
    axios.get("/api").then((res) => {
      const data = res.data;
      console.log(data);
      this.setState({ allStudents: data });
    });
  }

  displayStudents = (students) => {
    return (
      <table>
        <tbody>
          {console.log(students)}
          <tr>
            <th>name</th>
            <th>age</th>
            <th>responsible</th>
            <th>email</th>
            <th>Status</th>
            <th>
              Delete <BsExclamationTriangle />
            </th>
          </tr>
          {students.map((student, id) => (
            <tr key={id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.representative}</td>
              <td>{student.email}</td>
              {student.status === false ? (
                <td>
                  Inactive
                  <BsXCircleFill
                    onClick={() => {
                      this.handleStatus(student);
                    }}
                  />
                </td>
              ) : (
                <td>
                  Active
                  <BsFillCheckCircleFill
                    onClick={() => {
                      this.handleStatus(student);
                    }}
                  />
                </td>
              )}
              <td>
                <BsTrash
                  onClick={() => {
                    this.handleDelete(student._id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  handleDelete = (id) => {
    axios.delete(`/api/delete/${id}`);
    this.componentDidMount();
    // todo: update after!
    // this.displayStudents(this.state.allStudents);
  };

  handleStatus = (student) => {
    console.log(student);
    console.log(student.status);
    axios.patch(`/api/patch/${student._id}`, {
      status: student.status === false ? true : false,
    });
    this.componentDidMount();
  };

  render() {
    return (
      <>
        <div>{this.displayStudents(this.state.allStudents)}</div>
      </>
    );
  }
}

export default Admin;