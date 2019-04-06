var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = { receipts: [] };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var req = new XMLHttpRequest();
            req.open('get', '/receipts');
            var stateHandler = function stateHandler() {
                if (req.readyState == XMLHttpRequest.DONE) {
                    this.setState({ receipts: JSON.parse(req.responseText) });
                }
            };
            req.onreadystatechange = stateHandler.bind(this);
            req.send();
        }
    }, {
        key: 'render',
        value: function render() {
            var receipts = this.state.receipts;
            return React.createElement(
                'div',
                null,
                React.createElement(ReceiptList, { receipts: receipts }),
                React.createElement(Stats, null)
            );
        }
    }]);

    return App;
}(React.Component);

function ReceiptList(props) {
    var elements = props.receipts.map(function (r) {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h4',
                null,
                r.shop,
                ' ',
                r.total,
                ' ',
                r.date
            ),
            React.createElement(
                'div',
                null,
                r.products.map(function (p) {
                    return React.createElement(
                        'div',
                        null,
                        p.name,
                        ' ',
                        p.price
                    );
                })
            )
        );
    });
    return React.createElement(
        'div',
        null,
        elements
    );
}

var Stats = function (_React$Component2) {
    _inherits(Stats, _React$Component2);

    function Stats() {
        _classCallCheck(this, Stats);

        return _possibleConstructorReturn(this, (Stats.__proto__ || Object.getPrototypeOf(Stats)).apply(this, arguments));
    }

    _createClass(Stats, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'Here shall be stats'
            );
        }
    }]);

    return Stats;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));