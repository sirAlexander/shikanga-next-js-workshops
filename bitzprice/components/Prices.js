class Prices extends React.Component {

    state = {
        currency: 'USD'
    }

    render(){
        return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    Bitcoin rate for {this.props.bpi.USD.description}: &nbsp; 
                    <span className="badge badge-primary">
                        {this.props.bpi.USD.code}
                    </span>
                    <strong>&nbsp; {this.props.bpi.USD.rate}</strong>
                </li>
            </ul>
        </div>
        );
    }
}

export default Prices;