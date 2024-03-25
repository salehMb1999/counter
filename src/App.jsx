import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  addCounter() {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
    
  }
  reduceCounter() {
    this.setState((prevState) => {
      return { counter: prevState.counter - 1 };
    });
  }
  render() {
    return (
      <div className="h-screen bg-slate-200">
        <div className="container mx-auto px-5 bg-slate-400 relative top-1/2 -translate-y-1/2 h-screen flex justify-center items-center">
          <div className="flex flex-col justify-center bg-green-500 items-center shadow-md shadow-white gap-5 text-white p-10 rounded-lg">
            <h1 className=" p-5 flex justify-center items-center rounded-lg text-xl font-bold ">
              {this.state.counter}
            </h1>
            <div className="flex justify-center items-center gap-5">
              <button
                onClick={this.addCounter.bind(this)}
                className="border-2 hover:bg-white hover:text-slate-800 duration-300 ease-in-out px-4 py-2 rounded-lg text-lg"
              >
                بزن روم زیاد بشه
              </button>
              <button
                onClick={this.reduceCounter.bind(this)}
                className="border-2 hover:bg-white hover:text-slate-800 duration-300 ease-in-out px-4 py-2 rounded-lg text-lg"
              >
                بزن روم کم بشه
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
