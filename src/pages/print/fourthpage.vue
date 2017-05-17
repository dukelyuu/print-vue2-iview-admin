<template>
  <div style="background:#eee;padding: 20px">
    <i-form :model="formItem" :label-width="80">
      <Form-item label="输入框">
        <i-input :value.sync="formItem.input" placeholder="请输入"></i-input>
      </Form-item>
      <Form-item label="选择器">
        <i-select :model.sync="formItem.select" placeholder="请选择">
          <i-option value="beijing">北京市</i-option>
          <i-option value="shanghai">上海市</i-option>
          <i-option value="shenzhen">深圳市</i-option>
        </i-select>
      </Form-item>
      <Form-item label="日期控件">
        <Row>
          <i-col span="11">
            <Date-picker type="date" placeholder="选择日期" :value.sync="formItem.date"></Date-picker>
          </i-col>
          <i-col span="2" style="text-align: center">-</i-col>
          <i-col span="11">
            <Time-picker type="time" placeholder="选择时间" :value.sync="formItem.time"></Time-picker>
          </i-col>
        </Row>
      </Form-item>
      <Form-item label="单选框">
        <Radio-group :model.sync="formItem.radio">
          <Radio label="male">男</Radio>
          <Radio label="female">女</Radio>
        </Radio-group>
      </Form-item>
      <Form-item label="多选框">
        <Checkbox-group v-model="formItem.checkbox">
          <Checkbox label="吃饭"></Checkbox>
          <Checkbox label="睡觉"></Checkbox>
          <Checkbox label="跑步"></Checkbox>
          <Checkbox label="看电影"></Checkbox>
        </Checkbox-group>
      </Form-item>
      <Form-item label="开关">
        <Switch :checked.sync="formItem.switch" size="large">
          <span slot="open">开启</span>
          <span slot="close">关闭</span>
        </Switch>
      </Form-item>
      <Form-item label="滑块">
        <Slider :value.sync="formItem.slider" range></Slider>
      </Form-item>
      <Form-item label="文本域">
        <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
      </Form-item>
      <Form-item>
        <i-button type="primary">提交</i-button>
        <i-button type="ghost" style="margin-left: 8px">取消</i-button>
      </Form-item>
    </i-form>
    <Button @click="preview1">打印预览</Button>
    <Button @click="preview2">打印预览2</Button>
    <Button @click="design1">打印设计</Button>
    <Button @click="onSetup">打印维护</Button>
    <Button @click="onPrint">选择打印</Button>
  </div>
</template>
<script>
import Lodopfuncs from '../../lib/CLodopfuncs.js'
import LodopFunc from '../../lib/LodopFuncs.js'
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


  LODOP.PRINT_INITA(10, 10, 762, 533, "恩施农村土地确权证");
  LODOP.ADD_PRINT_SETUP_BKIMG("C:\\Users\\AnnieXiong\\Pictures\\打印\\11.png");
  LODOP.ADD_PRINT_TEXT(45, 171, 34, 20, "2017");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(44, 244, 44, 22, "0001");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(427, 117, 45, 20, "2017");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(429, 186, 25, 20, "05");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(430, 232, 25, 20, "22");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(55, 508, 170, 25, "华中科技大学出版社");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(97, 505, 170, 25, "武汉大学");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(141, 503, 170, 25, "方老师");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(188, 505, 170, 25, "412626199012251254");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(236, 504, 170, 25, "湖北省武汉市鲁磨路47号");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(284, 501, 170, 25, "18688978564");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(381, 500, 182, 20, "HB201702120014231235");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(420, 501, 182, 25, "恩施市国土管理局");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(471, 493, 35, 20, "2017");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(474, 543, 14, 20, "5");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(474, 568, 25, 20, "12");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(475, 617, 35, 20, "2033");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(477, 668, 14, 20, "55");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(481, 790, 14, 20, "5");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(476, 690, 25, 20, "12");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");


};
function CreateDataBill() {
  LODOP = getLodop();
  LODOP.PRINT_INITA(10, 10, 762, 533, "恩施农村土地确权证");
  LODOP.ADD_PRINT_SETUP_BKIMG("C:\\Users\\AnnieXiong\\Pictures\\打印\\11.png");
  LODOP.ADD_PRINT_TEXT(45, 171, 34, 20, "2017");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(44, 244, 44, 22, "0001");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(427, 117, 45, 20, "2017");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(429, 186, 25, 20, "05");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(430, 232, 25, 20, "22");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(55, 508, 170, 25, "华中科技大学出版社");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(97, 505, 170, 25, "武汉大学");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(141, 503, 170, 25, "方老师");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(188, 505, 170, 25, "412626199012251254");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(236, 504, 170, 25, "湖北省武汉市鲁磨路47号");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(284, 501, 170, 25, "18688978564");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(381, 500, 182, 20, "HB201702120014231235");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(420, 501, 182, 25, "恩施市国土管理局");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(471, 493, 35, 20, "2017");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(474, 543, 14, 20, "5");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(474, 568, 25, 20, "12");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(475, 617, 35, 20, "2033");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(477, 668, 14, 20, "55");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(481, 790, 14, 20, "5");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(476, 690, 25, 20, "12");
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
        textarea: '',
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
