import { useState } from "react";
import Button from "./btn";
import Image from "./img";
import Count from "./count";
import Modify from "./ModifyPage";
export const Parties = [
  {
    id: 1,
    name: "Conservative and Unionist Party",
    img: "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/272629363_482623133220970_1270741799012011870_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LQp4-8dwiSwAX9UQYlY&_nc_ht=scontent.fsdv1-2.fna&oh=00_AfAfoC1RTkMf6E7VZIeXJ70sjDLvs1TwAnaZ0Uf3soem8Q&oe=63F3D691",
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
  const [disabled, setDisabled] = useState(null);

  const handleVote = (id) => {
    setVotes((votes) =>
      votes.map((vote) => {
        if (vote.id === id) {
          setDisabled();
          return Object.assign({}, vote, {
            count: vote.count + 1,
            disabled: true,
          });
        }
        return vote;
      })
    );
  };
  const VotedFor = votes.find((el) => {
    localStorage.setItem("userData", JSON.stringify(votes));
    return el.count === 1;
  });
  if (VotedFor) {
    return ToModify();
  }
  function ToModify() {
    return <Modify />;
  }
  // console.log(votes[0].count);
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
    </div>
  );
};

export default Voting;
