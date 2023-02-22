import { useState } from "react";
import Button from "./btn";
import Image from "./img";
import Count from "./count";
import Modify from "./ModifyPage";
import Admin from "./Admin";
export const Parties = [
  {
    id: 1,
    name: "Conservative and Unionist Party",
    img: "https://img.freepik.com/premium-photo/two-road-signs-liberal-conservative-choice_441797-8265.jpg?w=2000",
    count: 0,
  },
  {
    id: 2,
    name: "Labour Party",
    img: "https://www.politics.co.uk/wp-content/uploads/2021/03/Lab-Logo.png",
    count: 0,
  },
  {
    id: 3,
    name: "Liberal Democrats",
    img: "https://brentwoodlibdems.org.uk/logo/2014/blank/transparent/yellow/black/600.png",
    count: 0,
  },
  {
    id: 4,
    name: "Green Party",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Communist_Party_of_Vietnam_flag_logo.svg/2348px-Communist_Party_of_Vietnam_flag_logo.svg.png",
    count: 0,
  },
];

const Voting = (props) => {
  const [votes, setVotes] = useState(Parties);
   const [disabled , setDisabled] = useState(null);
  const [show,setShow] =useState(false);

  const handleVote = (id) => {
    setVotes((votes) =>
      votes.map((vote) => {
        if (vote.id === id) {
          setDisabled(true);
          return Object.assign({}, vote, {
            count: vote.count + 1,
            disabled: true,
          });
        }
        return vote;
      })
      );
      setShow(true)
  };
  // const VotedFor = votes.find((el) => {
  //   return el.count === 1;
  // });

  const Change = () => {
    setDisabled(false);
    setShow(false)
    setVotes((votes) =>
      votes.map((vote) => {
        if (vote.count === 1) {
          return Object.assign({}, vote, { count: 0 , disabled:true})
        }
        return vote
      })
      )
      setDisabled(null )
  };
  localStorage.setItem("userData", JSON.stringify(votes));

  function submitting (){
    if(props.type ==="Admin") {
      return <Admin/>
    }
    else{
      return <h1>You are All good to Go</h1>
    }
  }
  return (
    <div id="votingPage">
      <h1>{props.name} Vote for your favorite Party!</h1>
      <div id="parties">
        {votes.map((vote) => (
          <div id="party" key={vote.id}>
            <Image img={vote.img} />
            <div id="counting">
              <Button
                name={vote.name}
                onClick={() => handleVote(vote.id)}
                disabled={disabled !== null}
              />  
              <Count count={vote.count} />
            </div>
          </div>
        ))}
      </div>
    <center>      
      <div id="modify">
        {show&&<Modify onClick = {Change} submitted = {submitting}/>}
      </div>
      </center>
    </div>
  );
};

export default Voting;
