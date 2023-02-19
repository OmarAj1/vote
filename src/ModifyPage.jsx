// import { Parties } from "./voting";
// import { Voting } from "./voting";
export default Modify;
function Modify() {
  const data = localStorage.getItem("userData");
  const found = JSON.parse(data);
  const founded = found.find((el) => {
    return el.count === 1;
  });
  // if (!VotedFor) {
  return <h1>You Voted for : {founded.name}</h1>;
  // }
  // return <>{/* <h1>voted for {VotedFor}</h1> */}</>;
  //
}
