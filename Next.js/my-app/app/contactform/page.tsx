function Contacts (){
  return (
  <div>
    <h1 style={{ fontSize: "40px" , fontWeight: "bold"}}> Contact Me</h1>
    <br></br>
   <form>
    <div>
          <label>Name:</label>
          
          <input type="text" placeholder="Enter your name"   style={{ border: "2px solid black" }}/>
        </div>
        <br></br>
        <div>
          <label>
            Email:
          </label>
          <input type="email" placeholder="Enter email "  style={{ border: "2px solid black" }}>
          </input >
          </div>
          <br></br>
          <div>
            <label>
              Messgae:
            </label>
            <input type="message" placeholder="Enter your message"  style={{   width: "300px",
    height: "40px", border: "2px solid black",
    padding: "10px"}}>
            </input>
          </div>
   </form>
  
   </div>
  );
}
export default Contacts;