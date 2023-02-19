import React, { useState } from "react";
import Voting from "./voting";
export default LoginPage;

function LoginPage() {
  const users = [
    {
      name: "Tyler-James",
      password: "AiHU39s",
      type: "admin",
      email: "Tyler-James46@walla.co.il",
    },
    {
      name: "Kevan",
      password: "q4KoTQQ",
      type: "user",
      email: "Kevan18@aol.com",
    },
    {
      name: "Aarez",
      password: "jlesOhE",
      type: "user",
      email: "Aarez49@hotmail.com",
    },
    {
      name: "Salahudin",
      password: "0LEv11L",
      type: "user",
      email: "Salahudin28@yahoo.com",
    },
    {
      name: "Ceejay",
      password: "Cr6vsXG",
      type: "user",
      email: "Ceejay34@walla.co.il",
    },
    {
      name: "Maisum",
      password: "IpOODG6",
      type: "user",
      email: "Maisum13@yahoo.com",
    },
    {
      name: "Pawel",
      password: "BsY5Xfg",
      type: "user",
      email: "Pawel31@walla.co.il",
    },
    {
      name: "Robi",
      password: "Tf1Xqyt",
      type: "user",
      email: "Robi31@gmail.com",
    },
    {
      name: "Eli",
      password: "y1JVQus",
      type: "user",
      email: "Eli29@gmail.com",
    },
    {
      name: "Sulayman",
      password: "2IdBBTu",
      type: "user",
      email: "Sulayman24@gmail.com",
    },
    {
      name: "Antoni",
      password: "zGPE3lk",
      type: "user",
      email: "Antoni23@walla.co.il",
    },
    {
      name: "Derren",
      password: "uu0s548",
      type: "user",
      email: "Derren28@yahoo.com",
    },
    {
      name: "Derryn",
      password: "ti9rh6c",
      type: "user",
      email: "Derryn5@yahoo.com",
    },
    {
      name: "Ryan",
      password: "MakBOAM",
      type: "user",
      email: "Ryan39@walla.co.il",
    },
    {
      name: "Darn",
      password: "R0eVIHe",
      type: "user",
      email: "Darn14@gmail.com",
    },
    {
      name: "Liam-Stephen",
      password: "DikwxAF",
      type: "admin",
      email: "Liam-Stephen2@walla.co.il",
    },
    {
      name: "Jordy",
      password: "CYJDYqI",
      type: "admin",
      email: "Jordy29@gmail.com",
    },
    {
      name: "Raheem",
      password: "k4pBUX0",
      type: "user",
      email: "Raheem21@yahoo.com",
    },
    {
      name: "Lewis",
      password: "K7qWpYf",
      type: "user",
      email: "Lewis3@aol.com",
    },
    {
      name: "Aref",
      password: "VrfIwjP",
      type: "user",
      email: "Aref27@aol.com",
    },
    {
      name: "Brayden",
      password: "2lAWtQl",
      type: "user",
      email: "Brayden38@hotmail.com",
    },
    {
      name: "Arjuna",
      password: "fx97ne9",
      type: "user",
      email: "Arjuna7@aol.com",
    },
    {
      name: "Warren",
      password: "67sh1uP",
      type: "admin",
      email: "Warren17@gmail.com",
    },
    {
      name: "Konrad",
      password: "xJMEfkp",
      type: "user",
      email: "Konrad6@hotmail.com",
    },
    {
      name: "Rihards",
      password: "Re7tqR5",
      type: "user",
      email: "Rihards21@yahoo.com",
    },
    {
      name: "Alisdair",
      password: "fY6w77o",
      type: "user",
      email: "Alisdair46@walla.co.il",
    },
    {
      name: "Sam",
      password: "sOkEksI",
      type: "user",
      email: "Sam30@yahoo.com",
    },
    {
      name: "Maciej",
      password: "wJL3RJj",
      type: "user",
      email: "Maciej24@hotmail.com",
    },
    {
      name: "Umut",
      password: "VJk2u5F",
      type: "user",
      email: "Umut9@aol.com",
    },
    {
      name: "Tomas",
      password: "9YSLDWL",
      type: "admin",
      email: "Tomas19@aol.com",
    },
    {
      name: "omar",
      password: " ",
      type: "admin",
      email: "o@o.com",
    },
  ];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setLogged] = useState(false);
  const [User, SetUser] = useState(null);

  function HandleSubmit(event) {
    event.preventDefault();
    // when submitting checks if the value exists in the array
    const UserPerson = users.find(
      (element) => element.email === email && element.password === password
    );
    if (UserPerson) {
      // If the user Exists Set the logged to true and set the entered user
      // into the (User-param-value) so then we can use it later
      setLogged(true);
      SetUser(UserPerson);
      //   console.log(User.name);
      //   console.log(isLogged);
    } else {
      // return <p style={{ display: "block" }}>User Not Found</p>;
      alert("your name is not in our systems");
    }
  }
  if (isLogged) {
    return <Voting name={User.name} />;
    //
  }
  return (
    // declaring form and its elements and targeting its values to email and password values
    // by setEmail,setPassword
    <div>
      <form id="LoginCard" onSubmit={HandleSubmit}>
        <div>
          {" "}
          <label>email</label>
          <input
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <button id="submit" type="submit">
            submit
          </button>
        </div>
        {/* <p style={{ display: "none" }}>User Not Found</p> */}
      </form>
    </div>
  );
}
