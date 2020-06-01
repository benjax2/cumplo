import React, { Component } from 'react';
import Chart from './Chart';
import Grafico from './Grafico';
import swal from 'sweetalert';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {fecha1: null,fecha2:null,data:[],labels:[]};
      }
      onFetch = ({data,labels}) =>{
        const sum = data.reduce((a, b) => a + b, 0);
        const avg = (sum / data.length) || 0;
        swal(
            'El promedio es: '+Math.round(avg),
            '',
            'success'
        )
          this.setState({data,labels})
      }
      handleChange1 = (event) =>  {
        const date = new Date(event.target.value);
        this.setState({fecha1: date});
        console.log({date});
    }
      handleChange2 = (event) =>  {
        const date = new Date(event.target.value);
        this.setState({fecha2: date});
        console.log(date);
      }
    render() {

        return (

            <div className="home">
                <div className="container mt-5">
                <h1>Precio del dolar </h1>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>
                                Fecha1:  
                                <br/><input type="date" id="fecha1" onChange={this.handleChange1} />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Fecha2:
                                <br/> <input type="date" id="fecha2" onChange={this.handleChange2} />
                            </label>
                        </div>
                        <div className="clearfix"></div>
                        <Grafico fecha1={this.state.fecha1}
                        fecha2={this.state.fecha2} onFetch={this.onFetch} />
                    </form>
                    {this.state.data.length > 0 &&
                        <Chart data={this.state.data} labels={this.state.labels} />
                    }

                </div>
            </div>
        );
    }
}
export default Home;