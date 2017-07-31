//====页面动态加载C-Lodop云打印必须的文件CLodopfuncs.js====

var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;

//让其它电脑的浏览器通过本机打印（仅适用C-Lodop自带的例子）：
var oscript = document.createElement("script");
oscript.src = "http://localhost:8000/CLodopfuncs.js";
head.insertBefore(oscript, head.firstChild);

//让本机的浏览器打印(更优先一点)：
oscript = document.createElement("script");
oscript.src = "http://localhost:8000/CLodopfuncs.js?priority=2";
head.insertBefore(oscript, head.firstChild);

//加载双端口(8000和18000）避免其中某个端口被占用：
oscript = document.createElement("script");
oscript.src = "http://localhost:18000/CLodopfuncs.js?priority=1";
head.insertBefore(oscript, head.firstChild);


//====获取LODOP对象的主过程：====
function getLodop(oOBJECT, oEMBED) {
    var LODOP;
    try {
            LODOP.SET_LICENSES("","647464550565952565559561289003","688858710010010811411756128900","");
        try {
            LODOP = getCLodop();
        } catch (err) {};

        if (!LODOP && document.readyState !== "complete") {
            alert("C-Lodop没准备好，请稍后再试！");
            return;
        };

        //清理原例子内的object或embed元素，避免乱提示：
        if (oEMBED && oEMBED.parentNode) oEMBED.parentNode.removeChild(oEMBED);
        if (oOBJECT && oOBJECT.parentNode) oOBJECT.parentNode.removeChild(oOBJECT);
        LODOP.SET_LICENSES("","647464550565952565559561289003","688858710010010811411756128900","");
        return LODOP;
    } catch (err) { alert("getLodop出错:" + err); };
};


function needCLodop() {
    return true;
};
export default {
    getLodop,
    needCLodop
}
