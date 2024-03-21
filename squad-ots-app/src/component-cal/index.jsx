import { Component } from "react";
import Result from "./Result";
import Keypad from "./Keypad";

class MainCal extends Component{
    state = {
        result: ""
      }
     
      onClick = button => {
        if(button === "=") {
          this.calculate();
        }
    
        else if(button === "C") {
          this.reset();
        }
    
        else if(button === "CE") {
          this.backspace();
        }
    
        else {
          this.setState({
            result: this.state.result + button
          })
        }
      };
    
      calculate = () => {
        let { result } = this.state;
        const calculatedResult = eval(result);
        this.setState({
            result: calculatedResult.toString()
        });
    };
    
      reset = () => {
        this.setState({
          result: ""
        })
      };
    
      backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
      };

      render() {
        return (
          <div>
            <div className="calculator-body">
              <Result result={this.state.result} />
              <Keypad onClick={this.onClick} />
            </div>
          </div>
        )
      }
    
}

export default MainCal;