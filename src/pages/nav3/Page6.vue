<template>
  <div style="background:#eee;padding: 20px">
    <Card :bordered="false">
      <p slot="title">打印设计和定位套打票据</p>
      <p>演示打印设计和定位套打票据</p>

    </Card>
    <Button @click="preview1">打印预览</Button>
    <Button @click="preview2">打印预览2</Button>
    <Button @click="design1">打印设计</Button>
    <Button @click="onSetup">打印维护</Button>
    <Button @click="onPrint">选择打印</Button>
  </div>
</template>
<script>
import Lodopfuncs from '../../lib/CLodopfuncs.js'

//====获取LODOP对象的主过程：====
function getLodop(oOBJECT, oEMBED) {
  var LODOP;
  try {
    try {
      LODOP = getCLodop();
    } catch (err) { };

    if (!LODOP && document.readyState !== "complete") {
      alert("C-Lodop没准备好，请稍后再试！");
      return;
    };

    //清理原例子内的object或embed元素，避免乱提示：
    if (oEMBED && oEMBED.parentNode) oEMBED.parentNode.removeChild(oEMBED);
    if (oOBJECT && oOBJECT.parentNode) oOBJECT.parentNode.removeChild(oOBJECT);

    return LODOP;
  } catch (err) { alert("getLodop出错:" + err); };
};


function needCLodop() {
  return true;
};
var LODOP; //声明为全局变量
function Preview1() {
  CreateFullBill();
  LODOP.PREVIEW();
};
function Design1() {
  CreateFullBill();
  //		LODOP.SET_SHOW_MODE("HIDE_ITEM_LIST",true);//设置对象列表默认处于关闭状态
  //		LODOP.SET_SHOW_MODE("TEXT_SHOW_BORDER",1); //设置字符编辑框默认为single
  LODOP.PRINT_DESIGN();
};
function Preview2() {
  CreateDataBill();
  LODOP.PREVIEW();
};
function Setup2() {
  CreateDataBill();
  LODOP.PRINT_SETUP();
};
function Design2() {
  LODOP.PRINT_DESIGN();
};
function RealPrint() {
  CreateDataBill();
  //云打印C-Lodop返回结果用回调函数:
  if (LODOP.CVERSION) {
    CLODOP.On_Return = function (TaskID, Value) { if (Value) alert("已发出实际打印命令！"); else alert("放弃打印！"); };
    LODOP.PRINTA();
    return;
  };
  //控件返回结果用语句本身：
  if (LODOP.PRINTA())
    alert("已发出实际打印命令！");
  else
    alert("放弃打印！");
};
function CreateFullBill() {
  LODOP = getLodop();
  LODOP.PRINT_INITA(10, 10, 762, 533, "恩施农村土地确权证");
  LODOP.SET_PRINT_STYLE("FontColor", "#0000FF");
  LODOP.ADD_PRINT_SETUP_BKIMG("C:\\Users\\Administrator\\Pictures\\test\\395963698350335537.jpg");
  LODOP.ADD_PRINT_TEXT(37, 142, 34, 20, "2017");
  LODOP.ADD_PRINT_TEXT(36, 203, 44, 22, "0001");
  LODOP.ADD_PRINT_TEXT(357, 115, 45, 20, "2017");
  LODOP.ADD_PRINT_TEXT(354, 173, 25, 20, "05");
  LODOP.ADD_PRINT_TEXT(355, 205, 25, 20, "22");
  LODOP.ADD_PRINT_TEXT(37, 397, 170, 25, "恩施市国土管理局");
  LODOP.ADD_PRINT_TEXT(73, 396, 170, 25, "武汉科技学院");
  LODOP.ADD_PRINT_TEXT(110, 399, 170, 25, "易发能");
  LODOP.ADD_PRINT_TEXT(147, 401, 170, 25, "412626199012251254");
  LODOP.ADD_PRINT_TEXT(186, 401, 170, 25, "武汉市珞瑜路41号");
  LODOP.ADD_PRINT_TEXT(225, 399, 170, 25, "18688978564");
  LODOP.ADD_PRINT_TEXT(303, 402, 182, 20, "H201702120014212545");
  LODOP.ADD_PRINT_TEXT(337, 400, 182, 25, "恩施市国土管理局");
  LODOP.ADD_PRINT_TEXT(376, 401, 35, 20, "2017");
  LODOP.ADD_PRINT_TEXT(376, 444, 14, 20, "5");
  LODOP.ADD_PRINT_TEXT(375, 466, 15, 20, "12");

};
function CreateDataBill() {
  LODOP = getLodop();


  LODOP.PRINT_INITA(10, 10, 762, 533, "恩施农村土地确权证");
  LODOP.ADD_PRINT_SETUP_BKIMG("C:\\Users\\Administrator\\Pictures\\test\\395963698350335537.jpg");

  LODOP.ADD_PRINT_TEXT(37, 142, 34, 20, "2017");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(36, 203, 44, 22, "0001");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(357, 115, 45, 20, "2017");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(354, 173, 25, 20, "05");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(355, 205, 25, 20, "22");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(37, 397, 170, 25, "华中科技大学出版社");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(73, 396, 170, 25, "武汉大学");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(110, 399, 170, 25, "方老师");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(147, 401, 170, 25, "412626199012251254");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(186, 401, 170, 25, "湖北省武汉市鲁磨路47号");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(223, 404, 170, 25, "18688978564");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(303, 402, 182, 20, "HB201702120014231235");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(337, 400, 182, 25, "恩施市国土管理局");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(376, 401, 35, 20, "2017");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(376, 444, 14, 20, "5");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(375, 466, 20, 20, "12");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
}
export default {
  data() {
    return {
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      }
    }
  },
  methods: {
    preview1() {
      Preview1()
    },
    preview2() {
      Preview2()
    },
    design1() {
      Design1()
    },
    Design2() {
      Design2()
    },
    onSetup() {
      Setup2()
    },
    onPrint() {
      RealPrint()
    }
  }
}
</script>
