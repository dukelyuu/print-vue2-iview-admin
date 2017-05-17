<template>
  <div style="background:#eee;padding: 20px">
    <i-form :model="formItem" :label-width="80">
      <Row>
        <i-col span="11">
          <Form-item label="农地经营权*:">
            <i-input v-model="formItem.control" placeholder="请输入农地经营权"></i-input>
          </Form-item>
        </i-col>
        <i-col span="2" style="text-align: center">-</i-col>
        <i-col span="11">
          <Form-item label="第X号*:">
            <i-input v-model="formItem.controlNO" placeholder="请输入经营权号"></i-input>
          </Form-item>
        </i-col>
      </Row>
      <Form-item label="发证日期*:">
        <Row>
          <i-col span="10.5">
            <Date-picker type="date" placeholder="请选择发证日期" v-model="formItem.issuingDate"></Date-picker>
          </i-col>
          <!--<i-col span="2" style="text-align: center">-</i-col>
                                              <i-col span="11">
                                                 
                                              </i-col>-->
        </Row>
      </Form-item>
      <Form-item label="发包方全称*:">
        <i-input v-model="formItem.ownerName" placeholder="请输入发包方全称"></i-input>
      </Form-item>
      <Form-item label="承包方代表姓名*:">
        <i-input v-model="formItem.contractorName" placeholder="请输入承包方代表姓名"></i-input>
      </Form-item>
      <Form-item label="经营方代表姓名*:">
        <i-input v-model="formItem.operatorName" placeholder="请输入经营方代表姓名"></i-input>
      </Form-item>
      <Form-item label="经营方代表身份证号码*:">
        <i-input v-model="formItem.operatorIDNumber" placeholder="请输入经营方代表身份证号码"></i-input>
      </Form-item>
      <Form-item label="经营方代表住址*:">
        <i-input v-model="formItem.operatorAddress" placeholder="请输入经营方代表住址"></i-input>
      </Form-item>
      <Form-item label="联系电话*:">
        <i-input v-model="formItem.contactPhoneNo" placeholder="请输入联系电话"></i-input>
      </Form-item>
      <Form-item label="经营方式">
        <Radio-group :model.sync="formItem.operatorType">
          <Radio label="homeOperation">家庭经营</Radio>
          <Radio label="collectiveOperation">集体经营</Radio>
          <Radio label="cooperOperation">合作经营</Radio>
          <Radio label="otherOperation">其他经营</Radio>
        </Radio-group>
      </Form-item>
      <Form-item label="合同编号*:">
        <i-input v-model="formItem.contractNo" placeholder="请输入合同编号"></i-input>
      </Form-item>
      <Form-item label="合同鉴证单位*:">
        <i-input v-model="formItem.contractVerifyUnit" placeholder="请输入合同鉴证单位"></i-input>
      </Form-item>
      <Form-item label="经营期限*:">
        <Row>
          <i-col span="11">
            <Date-picker type="date" placeholder="请选择起始日期" v-model="formItem.beginDate"></Date-picker>
          </i-col>
          <i-col span="2" style="text-align: center">至</i-col>
          <i-col span="11">
            <Date-picker type="date" placeholder="请选择失效日期" v-model="formItem.invalidDate"></Date-picker>
          </i-col>
        </Row>
      </Form-item>
      <Form-item>
        <i-button type="primary">保存</i-button>
        <i-button type="ghost" style="margin-left: 8px">取消</i-button>
        <i-button style="margin-left: 8px" @click="previewPrintFull">打印预览</i-button>
        <i-button style="margin-left: 8px" @click="previewPrint">打印预览2</i-button>
        <i-button style="margin-left: 8px" @click="printDesign">打印设计</i-button>
        <i-button style="margin-left: 8px" @click="onSetup">打印维护</i-button>
        <i-button style="margin-left: 8px" @click="onPrint">选择打印</i-button>
  
        <i-button style="margin-left: 8px" type="primary" @click="prev">上一页</i-button>
        <i-button style="margin-left: 8px" type="primary" @click="next">下一页</i-button>
        <i-button style="margin-left: 8px" type="primary" @click="home">首页</i-button>
  
      </Form-item>
    </i-form>
  
  </div>
</template>
<script>
import Lodopfuncs from '../../lib/CLodopfuncs.js'
import LodopFunc from '../../lib/LodopFuncs.js'

var LODOP; //声明为全局变量
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



export default {
  data() {
    return {
      formItem: {
        control: '',
        controlNO: '',
        operatorType: 'homeOperation',
        issuingDate: '',
        ownerName: '',
        contractorName: '',
        operatorName: '',
        operatorIDNumber: '',
        operatorAddress: '',
        contactPhoneNo: '',
        contractNo: '',
        contractVerifyUnit: '',
        beginDate: '',
        invalidDate: '',
        formItem: {
          control: '',
          controlNO: '',
          operatorType: 'homeOperation',
          issuingDate: '',
          ownerName: '',
          contractorName: '',
          operatorName: '',
          operatorIDNumber: '',
          operatorAddress: '',
          contactPhoneNo: '',
          contractNo: '',
          contractVerifyUnit: '',
          beginDate: '',
          invalidDate: '',
        }
      }
    }
  },
  methods: {
    //打印预览
    previewPrintFull() {
      this.createDataBill();
      LODOP.PREVIEW();
    },
    //打印预览2
    previewPrint() {
      this.createDataBill();
      LODOP.PREVIEW();
    },


    //打印维护
    onSetup() {
      this.printerMaintenance()
    },
    //选择打印
    onPrint() {
      this.realPrint()
    },
    prev() {
      if (this.$parent.$data.current > 0) {
        this.$parent.$data.current -= 1;
      }
    },
    next() {

      if (this.$parent.$data.current < 4) {
        this.$parent.$data.current += 1;
      }
    },
    home() {
      this.$parent.$data.current = 0
    },
    //打印设计
    printDesign() {
      this.createFullBill();
      //		LODOP.SET_SHOW_MODE("HIDE_ITEM_LIST",true);//设置对象列表默认处于关闭状态
      //		LODOP.SET_SHOW_MODE("TEXT_SHOW_BORDER",1); //设置字符编辑框默认为single
      LODOP.PRINT_DESIGN();
    },
    printerMaintenance() {
      LODOP.PRINT_DESIGN();
    },
    realPrint() {
      this.createDataBill();
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
    },
    createFullBill() {
      LODOP = getLodop();



      LODOP.PRINT_INITA(10, 10, 762, 533, "恩施农村土地确权证");
      LODOP.ADD_PRINT_SETUP_BKIMG("C:\\Users\\AnnieXiong\\Pictures\\打印\\2 (2).jpg");
      LODOP.ADD_PRINT_TEXT(97, 67, 44, 55, "xxxxxx");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(94, 115, 44, 57, "xxxxxx");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(402, 117, 45, 55, "xxxxx");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(402, 164, 47, 55, "xxx");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(401, 216, 44, 56, "xx");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(481, 790, 14, 20, "5");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(93, 165, 44, 57, "xxxxxx");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(92, 214, 44, 57, "xxxxxx");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(92, 279, 74, 57, "xxxxxx");
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(156, 66, 45, 56, "");

      LODOP.ADD_PRINT_TEXT(156, 114, 45, 56, "");
      LODOP.ADD_PRINT_TEXT(156, 165, 45, 56, "");
      LODOP.ADD_PRINT_TEXT(156, 215, 45, 56, "");
      LODOP.ADD_PRINT_TEXT(195, 286, 70, 16, "444");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);
      LODOP.ADD_PRINT_TEXT(180, 286, 70, 16, "xxxxxx");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 7);




    },
    createDataBill() {
      LODOP = getLodop();
      debugger
      LODOP.PRINT_INITA(10, 10, 762, 533, "恩施农村土地确权证");
      LODOP.ADD_PRINT_SETUP_BKIMG("C:\\Users\\AnnieXiong\\Pictures\\打印\\11.png");
      LODOP.ADD_PRINT_TEXT(45, 171, 34, 20, this.formItem.control);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(44, 244, 44, 22, this.formItem.controlNO);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(427, 117, 45, 20, this.formItem.issuingDate);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(429, 186, 25, 20, this.formItem.issuingDate);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(430, 232, 25, 20, this.formItem.issuingDate);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(55, 508, 170, 25, this.formItem.ownerName);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(97, 505, 170, 25, this.formItem.contractorName);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(141, 503, 170, 25, this.formItem.operatorName);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(188, 505, 170, 25, this.formItem.operatorIDNumber);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(236, 504, 170, 25, this.formItem.operatorAddress);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(284, 501, 170, 25, this.formItem.contactPhoneNo);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(381, 500, 182, 20, this.formItem.contractNo);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#0000FF");
      LODOP.ADD_PRINT_TEXT(420, 501, 182, 25, this.formItem.contractVerifyUnit);
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
  }
}
</script>
