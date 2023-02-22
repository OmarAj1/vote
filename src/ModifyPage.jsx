export default Modify;
function Modify(props) {
  const data = localStorage.getItem("userData");
  const found = JSON.parse(data);
  const founded = found.find((el) => {
    return el.count === 1;
  });
  return (
        <div id="party">
          <h1>You Voted for : {founded.name}</h1>
          <button onClick={props.onClick} >Change Your Vote</button>
          <button onClick={props.submitted} >Approve Your Vote To {founded.name}</button>
        </div>
)
}
