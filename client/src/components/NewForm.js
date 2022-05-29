import React from "react";
import axios from "axios";
import { Button } from "./Button";
import "./NewForm.css";

class NewForm extends React.Component {
  // const { label } = props;

  state = {
    //   name
    name: "",
    representative: "",
    // [this.labelprops.]: "",
    //   age
    age: "",
    email: "",
    //   email
  };

  handleChange = ({ target }) => {
    // name and value from each input
    const { name, value } = target;
    console.log("target", target);

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit!", event);

    const newData = {
      name: this.state.name,
      representative: this.state.representative,
      age: this.state.age,
      email: this.state.email,
    };
    // console.log(this.state);
    // console.log(this.state.name);

    console.log(newData);
    // "proxy": "http://localhost:8080"
    axios({
      url: "/api/students",
      method: "POST",
      data: newData,
    })
      .then(() => {
        console.log("it worked!!data sent");
        this.resetForm();
      })
      .catch(() => {
        console.log("ops data was not sent!");
      });
  };

  resetForm = () => {
    // this.setState(this.state);
    // TODO
    // reset form
    // console.log(this.state);
    // console.log(this.state.name);
    // this.setState({
    //   [this.state.name]: "",
    // });
  };

  render() {
    console.log("Current form state:", this.state);
    // console.log("Current form state:", this.state.name);

    return (
      <>
        {/* {console.log("final state: ", this.state)} */}
        <div id="register">
          {/* <h2>New form</h2> */}
          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <label>
                Name
                <input
                  type="text"
                  placeholder="Enter full name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="form-input">
              <label>
                Age
                <input
                  type="text"
                  placeholder="Enter the student age"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="form-input">
              <label>
                Email
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="form-input">
              <label>
                Representative *if minor
                <input
                  type="text"
                  placeholder="Legal guardian's full name"
                  name="representative"
                  value={this.state.representative}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            {/* <div className="form-input">
            <textarea
              name={label1}
              placeholder="body!"
              cols="30"
              rows="10"
              vaue={state.body}
              onChange={handleChange}
            ></textarea>
          </div> */}
            <Button buttonSize="btn--wide" buttonColor="blue">
              Submit
            </Button>
          </form>
        </div>
      </>
    );
  }
}

export { NewForm };
