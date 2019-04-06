class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {receipts: []}
    }
    componentDidMount() {
        let req = new XMLHttpRequest();
        req.open('get', '/receipts');
        let stateHandler = function() {
            if (req.readyState == XMLHttpRequest.DONE) {
                this.setState({receipts: JSON.parse(req.responseText)})
            }
        }
        req.onreadystatechange = stateHandler.bind(this);
        req.send();
    }
    render() {
        const receipts = this.state.receipts;
        return (
            <div>
                <ReceiptList receipts={receipts} />
                <Stats />
            </div>
        );
    }
}

function ReceiptList(props) {
    const elements = props.receipts.map(r =>
        <div>
            <h4>{ r.shop } { r.total } { r.date }</h4>
            <div>
                { r.products.map(p => 
                    <div>{ p.name } { p.price }</div>  
                ) }
            </div>
        </div>
    )
    return (
        <div>{ elements }</div>
    );
}

class Stats extends React.Component {
    render() {
        return (
            <div>Here shall be stats</div>
        );
    }
}
  
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

