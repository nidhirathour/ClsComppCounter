import {Component} from 'react'
class Counter extends Component{ 
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
        };
      }
    
      
    render(){
        return <div style={{boxShadow:"0px 0px 10px gray",width:"400px",height:"200px",margin:"200px auto"}}>
            <h1 >Count Value : {this.state.count}</h1>
            <button style={{width:"150px",padding:"10px",borderRadius:"8px",border:"none",backgroundColor:"#1dd1a1",fontSize:"15px",color:"white"}}onClick={()=>this.setState({count:this.state.count+1})}>Increase</button> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <button style={{width:"150px",padding:"10px",borderRadius:"8px",border:"none",backgroundColor:"#1dd1a1",fontSize:"15px",color:"white"}} onClick={()=>this.setState({count:this.state.count-1})}>Decrease</button>
        </div>
    }
}
export default Counter