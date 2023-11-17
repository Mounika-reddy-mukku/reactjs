import React from 'react';
class Product extends React.Component{
    state={ product:{
        name:"Iphone 15 pro max",
        image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTpKrxMU6giHyoKqlIyKSPVuf8cofZbpk_RwitDLQg2PlpKRKBs58abG5N8Zi2YqxRQ5qOBEDVItcm4YZKGAVQL12Hh3KCHQcA_fT9A0FT5xtEpK9JL72DRQv2rlLqezc0K4kpMVg&usqp=CAc",
        price:159990,
        qty:1
    }}
    decHandler=()=>{
        this.setState({Product:{...this.state.product, qty:this.state.product.qty-1}})
    }
    incHandler=()=>{
        this.setState({Product:{...this.state.product, qty:this.state.product.qty-1}})
    }
    render(){
        return <>
            <h2>Product component</h2>
            <nav className='navbar navbar-dark bg-dark'>
                <a className="navbar-brand" href="#">CART</a>
            </nav>
            <pre>{JSON.stringify(this.state)}</pre>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-9'>
                        <div className='table'>
                            <table>
                                <thead>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </thead>
                                <tbody>
                                    <td>
                                        <tr>{this.state.product.name}</tr>                                                                               
                                   </td>
                                    <td>
                                        <tr><img width="70%" src={this.state.product.image}/></tr>
                                    </td>
                                    <td>
                                        <tr>{this.state.product.price}</tr>
                                    </td>
                                    <td>
                                        <tr><i className="fa-solid fa-circle-minus" onClick={this.decHandler}></i>{this.state.product.qty}<i className="fa-solid fa-circle-plus" onClick={this.incHandler}></i></tr>
                                    </td>
                                    <td>
                                        <tr>{this.state.product.price * this.state.product.qty}</tr>
                                    </td>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    }

}
export default Product