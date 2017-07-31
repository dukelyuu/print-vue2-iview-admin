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
	    LODOP.SET_LICENSES("","647464550565952565559561289003","688858710010010811411756128900","");
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
  LODOP.ADD_PRINT_SETUP_BKIMG("C:\\Users\\AnnieXiong\\Pictures\\打印\\2 (2).jpg");
  LODOP.ADD_PRINT_TEXT(96, 68, 44, 55, "11");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(96, 115, 44, 57, "12");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(402, 112, 50, 55, "62");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(402, 164, 47, 55, "63");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(401, 214, 49, 57, "6是");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.SET_PRINT_STYLEA(0, "Horient", 2);
  LODOP.ADD_PRINT_TEXT(481, 790, 14, 20, "5");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(95, 165, 44, 57, "13");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(94, 214, 44, 57, "1是");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(156, 66, 45, 56, "21");
  LODOP.ADD_PRINT_TEXT(156, 115, 45, 56, "22");
  LODOP.ADD_PRINT_TEXT(156, 165, 45, 56, "23");
  LODOP.ADD_PRINT_TEXT(155, 215, 45, 56, "2是");
  LODOP.ADD_PRINT_TEXT(197, 285, 70, 15, "2n");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(181, 285, 70, 16, "2s");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(136, 284, 70, 15, "1n");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(121, 284, 70, 15, "1s");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(91, 284, 70, 15, "1e");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(106, 284, 70, 15, "1w");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(153, 285, 70, 15, "2e");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(168, 285, 70, 14, "2w");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(402, 65, 45, 55, "61");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(462, 64, 48, 57, "71");
  LODOP.ADD_PRINT_TEXT(463, 116, 47, 55, "72");
  LODOP.ADD_PRINT_TEXT(463, 166, 47, 55, "73");
  LODOP.ADD_PRINT_TEXT(463, 216, 47, 55, "7是");
  LODOP.ADD_PRINT_TEXT(277, 215, 47, 55, "4是");
  LODOP.ADD_PRINT_TEXT(277, 165, 47, 55, "43");
  LODOP.ADD_PRINT_TEXT(277, 115, 47, 55, "42");
  LODOP.ADD_PRINT_TEXT(276, 63, 48, 57, "41");
  LODOP.ADD_PRINT_TEXT(217, 214, 47, 55, "3是");
  LODOP.ADD_PRINT_TEXT(216, 166, 47, 55, "33");
  LODOP.ADD_PRINT_TEXT(216, 116, 47, 55, "32");
  LODOP.ADD_PRINT_TEXT(215, 64, 48, 57, "31");
  LODOP.ADD_PRINT_TEXT(339, 214, 47, 55, "5是");
  LODOP.ADD_PRINT_TEXT(339, 164, 47, 55, "53");
  LODOP.ADD_PRINT_TEXT(339, 114, 47, 55, "52");
  LODOP.ADD_PRINT_TEXT(338, 64, 48, 57, "51");
  LODOP.ADD_PRINT_TEXT(501, 285, 70, 15, "7n");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(485, 285, 70, 16, "7s");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(472, 285, 70, 14, "7w");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(457, 285, 70, 15, "7e");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(395, 285, 70, 15, "6e");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(410, 285, 70, 14, "6w");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(423, 285, 70, 16, "6s");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(439, 285, 70, 15, "6n");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(378, 286, 70, 15, "5n");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(362, 286, 70, 16, "5s");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(349, 286, 70, 14, "5w");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(334, 286, 70, 15, "5e");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(317, 286, 70, 15, "4n");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(301, 286, 70, 16, "4s");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(288, 286, 70, 14, "4w");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(273, 286, 70, 15, "4e");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(258, 286, 70, 15, "3n");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(242, 286, 70, 16, "3s");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(229, 286, 70, 14, "3w");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(214, 286, 70, 15, "3e");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);



};
function CreateDataBill() {
  LODOP = getLodop();

  LODOP.PRINT_INITA(10, 10, 762, 533, "恩施农村土地确权证");
  LODOP.ADD_PRINT_SETUP_BKIMG("C:\\Users\\AnnieXiong\\Pictures\\打印\\2 (2).jpg");
  LODOP.ADD_PRINT_TEXT(96, 68, 44, 55, "11");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(96, 115, 44, 57, "12");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(402, 112, 50, 55, "62");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(402, 164, 47, 55, "63");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(401, 214, 49, 57, "6是");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.SET_PRINT_STYLEA(0, "Horient", 2);
  LODOP.ADD_PRINT_TEXT(481, 790, 14, 20, "5");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(95, 165, 44, 57, "13");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(94, 214, 44, 57, "1是");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(156, 66, 45, 56, "21");
  LODOP.ADD_PRINT_TEXT(156, 115, 45, 56, "22");
  LODOP.ADD_PRINT_TEXT(156, 165, 45, 56, "23");
  LODOP.ADD_PRINT_TEXT(155, 215, 45, 56, "2是");
  LODOP.ADD_PRINT_TEXT(197, 285, 70, 15, "2n");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(181, 285, 70, 16, "2s");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(136, 284, 70, 15, "1n");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(121, 284, 70, 15, "1s");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(91, 284, 70, 15, "1e");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(106, 284, 70, 15, "1w");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(153, 285, 70, 15, "2e");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(168, 285, 70, 14, "2w");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(402, 65, 45, 55, "61");
  LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
  LODOP.ADD_PRINT_TEXT(462, 64, 48, 57, "71");
  LODOP.ADD_PRINT_TEXT(463, 116, 47, 55, "72");
  LODOP.ADD_PRINT_TEXT(463, 166, 47, 55, "73");
  LODOP.ADD_PRINT_TEXT(463, 216, 47, 55, "7是");
  LODOP.ADD_PRINT_TEXT(277, 215, 47, 55, "4是");
  LODOP.ADD_PRINT_TEXT(277, 165, 47, 55, "43");
  LODOP.ADD_PRINT_TEXT(277, 115, 47, 55, "42");
  LODOP.ADD_PRINT_TEXT(276, 63, 48, 57, "41");
  LODOP.ADD_PRINT_TEXT(217, 214, 47, 55, "3是");
  LODOP.ADD_PRINT_TEXT(216, 166, 47, 55, "33");
  LODOP.ADD_PRINT_TEXT(216, 116, 47, 55, "32");
  LODOP.ADD_PRINT_TEXT(215, 64, 48, 57, "31");
  LODOP.ADD_PRINT_TEXT(339, 214, 47, 55, "5是");
  LODOP.ADD_PRINT_TEXT(339, 164, 47, 55, "53");
  LODOP.ADD_PRINT_TEXT(339, 114, 47, 55, "52");
  LODOP.ADD_PRINT_TEXT(338, 64, 48, 57, "51");
  LODOP.ADD_PRINT_TEXT(501, 285, 70, 15, "7n");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(485, 285, 70, 16, "7s");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(472, 285, 70, 14, "7w");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(457, 285, 70, 15, "7e");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(395, 285, 70, 15, "6e");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(410, 285, 70, 14, "6w");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(423, 285, 70, 16, "6s");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(439, 285, 70, 15, "6n");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(378, 286, 70, 15, "5n");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(362, 286, 70, 16, "5s");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(349, 286, 70, 14, "5w");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(334, 286, 70, 15, "5e");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(317, 286, 70, 15, "4n");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(301, 286, 70, 16, "4s");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(288, 286, 70, 14, "4w");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(273, 286, 70, 15, "4e");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(258, 286, 70, 15, "3n");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(242, 286, 70, 16, "3s");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(229, 286, 70, 14, "3w");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
  LODOP.ADD_PRINT_TEXT(214, 286, 70, 15, "3e");
  LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);


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
  },
  mounted(){
    LODOP = getLodop();
  }
}
</script>
