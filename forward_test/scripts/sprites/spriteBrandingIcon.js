"use strict";

function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
    }
    return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived),
            result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}

function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}

define(['config', 'pixi'], function(config, PIXI) {
    //*******************************************************************************************************************
    // ** An Icon
    //*******************************************************************************************************************
    var SpriteBrandingIcon = /*#__PURE__*/ function(_PIXI$Sprite) {
        _inherits(SpriteBrandingIcon, _PIXI$Sprite);

        var _super = _createSuper(SpriteBrandingIcon);

        function SpriteBrandingIcon(index) {
            var _this;

            _classCallCheck(this, SpriteBrandingIcon);

            _this = _super.call(this, config.armorMode ? PIXI.Loader.shared.resources['assets/agLogoIcon.png'].texture : null);
            _this.interactive = config.armorMode;
            _this.tooltip = config.armorMode ? 'ArmorGames.com' : '';
            _this.link = config.armorMode ? 'https://armorgames.com' : '';

            _this.on('click', function(e) {
                var win = window.open(_this.link, '_blank');

                if (win) {
                    win.focus();
                }
            });

            return _this;
        }

        _createClass(SpriteBrandingIcon, [{
            key: "getMyRect",
            value: function getMyRect() {
                var x = this.x;
                var y = this.y;
                var w = this.x + this.width;
                var h = this.y + this.height;
                return {
                    x: x,
                    y: y,
                    w: w,
                    h: h
                };
            }
        }]);

        return SpriteBrandingIcon;
    }(PIXI.Sprite);

    return SpriteBrandingIcon;
});