import React, { Component } from 'react';
import axios from 'axios';



class Grafico extends Component {
    componentDidUpdate(prevProps) {
        const {fecha1, fecha2} = this.props;
        if(fecha1 && fecha2 && ((prevProps.fecha1 !== fecha1) || (prevProps.fecha2 !== fecha2))  ){
            axios.get(`https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/${fecha1.getFullYear()}/${(fecha1.getMonth()+1).toString().padStart(2,0)}/dias_i/${fecha1.getDate()}/${fecha2.getFullYear()}/${(fecha2.getMonth()+1).toString().padStart(2,0)}/dias_f/${fecha2.getDate()}?apikey=9c84db4d447c80c74961a72245371245cb7ac15f&formato=JSON`)
            .then(result => {
                const data = result.data.Dolares.map(d => parseFloat(d.Valor))
                const labels = result.data.Dolares.map(d => d.Fecha)
                console.log(result.data)
                this.props.onFetch({data,labels})
            }).catch(console.log)
        }
    }

    render() {
        var fecha1=this.props.fecha1;
        var fecha2=this.props.fecha2;
        console.log('fecha -->',fecha1);
        console.log('fecha -->',fecha2);
        return (
            <div className="main">

            </div>
        );
    }

}
export default Grafico;