var BaseClass = function () {


}


var StaticPrivate = (function () {
    var base = function () {

    }
    base.a = "a params";
    base.show = function () {
        alert(base.a);
    }
    base.prototype.reShow = function () {
        //alert(base.a);
    }
    return base;
})();

(function () {
    if (!window.Common) {
        window.Common = {};
    }
    window.Common = {
        show: function () {

        },
        reShow: function () {

        }
    }
})();


var Win = function () {
    this.init = {
        width: '300px',
        height:'500px'
    },
    this.WinObj = function () {
        var Window = {
            width: this.init.width,
            height:this.init.height
        };
        return Window;
    }
}

var GO = {};
(function (o) {
    o.add = function(){
        return "Add Method";
    }
})(GO);

