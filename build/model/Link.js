'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Item2 = require('./Item');

var _Item3 = _interopRequireDefault(_Item2);

var _enumerableProps = require('./enumerableProps');

var _enumerableProps2 = _interopRequireDefault(_enumerableProps);

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlowViewLink = function (_Item) {
  _inherits(FlowViewLink, _Item);

  function FlowViewLink(data, id) {
    _classCallCheck(this, FlowViewLink);

    _validate2.default.Link(data);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FlowViewLink).call(this, id));

    (0, _enumerableProps2.default)(_this, data);
    return _this;
  }

  return FlowViewLink;
}(_Item3.default);

exports.default = FlowViewLink;