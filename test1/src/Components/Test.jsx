const Test = () => {
    function display(){
        alert("This is one of the event in ReactJS")
    }
  return (
    <div>
        <button onDoubleClick={display}>Click here</button>
    </div>
  )
}
export default Test