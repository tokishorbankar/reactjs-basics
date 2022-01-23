import React from "react";

export class Home extends React.Component {
  render(props) {
    const users = this.props.users;

    return (
      <div>
        {users.map((user, index) => (
          <div key={index}>
            <div>
              <h3>User Name: {user.name}</h3>
              <h4>Email: {user.email}</h4>
            </div>
            <div>
              <h4>Hobbies:</h4>
              <ul>
                {user.hobbies.map((hobbie, index) => (
                  <li key={index}> {hobbie}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
