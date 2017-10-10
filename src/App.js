import 'babel-polyfill';
import React,{Component,PropTypes} from 'react';
import fetch from 'isomorphic-fetch';
// Note: this is the entry point for the entire application

// step 1: you will need to load the pizza data. it is available at /pizza.json. what-wg fetch is pre-installed.
// remember that fetch uses promises.

// step 2: implement the view and required behaviors

export default class App extends Component{
    constructor(props){
    super(props);
    this.state={
            loading:true,
            pizzaList:[],
            filterText:'',
            filterRecords:[],
        };

       this.handleChange= this.handleChange.bind(this);
       this.handleClick= this.handleClick.bind(this);
       this.onClick= this.onClick.bind(this);
    }

   handleChange(e){
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value});
    }

   handleClick(e){
        e.preventDefault();
        const data = this.state.pizzaList.map((pizza)=>pizza.toLowerCase());
        this.setState({pizzaList:data.sort()});
        // this.setState({pizzaList:this.state.pizzaList.sort()});
    }
// following line will convert all data in uppercase first and then perform sorting which gives macroni before Sausage


    onClick(e){
        e.preventDefault();
        this.setState({pizzaList:this.state.pizzaList.reverse()});
}

   componentDidMount() {
        fetch('./pizza.json')
        .then((response)=>{
            return response.json();
        }).then((body)=>{
            setTimeout(()=> this.setState({loading:false}),1500);
            setTimeout(() => this.setState({pizzaList: body.pizzas}),2000)
        });
   }

       render() {
           console.log("in render");
            const {
                filterText,
                pizzaList,
                loading,
                } = this.state;

           return(
                <div>
                    {loading ? 'Loading....' : ''}
                    <br/>
                    <input
                        type='text'
                        name='filterText'
                        value={filterText}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleClick} style={{marginLeft:30}}>Sort</button>
                    <button onClick={this.onClick} style={{marginLeft:30}}>Sort By Reverse</button>
                    <br/>
                    {pizzaList
                        .filter((pizza) => pizza.toLowerCase().indexOf(filterText.toLowerCase())>=0)
                        .map((pizza) =>{
                            return (<li key={pizza}> {pizza} </li>);
                        })
                    }
              </div>
            );
        }
}

App.propTypes={
    pizzaList:React.PropTypes.object,
};

// App.defaultprops = {
//     pizzaList:[],
// };
