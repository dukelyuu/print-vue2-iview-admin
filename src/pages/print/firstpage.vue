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
        <Radio-group v-model="formItem.operatorType">
          <Radio label="3">
            <span>家庭经营</span>
          </Radio>
          <Radio label="1">
            <span>集体经营</span>
          </Radio>
          <Radio label="4">
            <span>合作经营</span>
          </Radio>
          <Radio label="2">
            <span>其他经营</span>
          </Radio>
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
  
        <!--<i-button style="margin-left: 8px" @click="printDesign">打印设计</i-button>
        <i-button style="margin-left: 8px" @click="onPrintFirstPage">打印首页</i-button>-->
        
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



export default {
  data() {
    return {
      formItem: {
        control: '',
        controlNO: '',
        operatorType: '家庭经营',
        issuingDate: new Date(),
        ownerName: '',
        contractorName: '',
        operatorName: '',
        operatorIDNumber: '',
        operatorAddress: '',
        contactPhoneNo: '',
        contractNo: '',
        contractVerifyUnit: '',
        beginDate: new Date(),
        invalidDate: new Date(),
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
    //打印首页
     onPrintFirstPage(){},
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


LODOP.PRINT_INITA(10,10,900,1200,"恩施农村土地确权证");
LODOP.ADD_PRINT_TEXT(795,794,254,29,"发包方全称");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(795,718,97,29,"承包方姓名");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(793,647,118,28,"经营方姓名");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(794,566,233,27,"经营方身份证号");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(792,485,338,29,"经营方住址");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(793,406,186,29,"联系电话");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(792,238,233,29,"合同编号");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(794,158,240,24,"合同鉴证单位");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(828,86,60,30,"2017");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(902,85,44,30,"5");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(947,84,40,30,"12");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(1039,85,55,25,"2033");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(1152,86,51,25,"12");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(1109,86,49,30,"5");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(1093,340,21,20,"√");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(1094,304,23,20,"√");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(931,339,22,20,"√");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(931,303,19,20,"√");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(248,796,100,20,"ES2017");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(372,795,100,20,"201700325");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(231,148,55,20,"2017");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(327,147,54,20,"2");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(394,148,60,20,"23");
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);

    },
    createDataBill() {
      LODOP = getLodop();
var opType = this.formItem.operatorType;



LODOP.PRINT_INITA(10,10,900,1200,"恩施农村土地确权证");
LODOP.ADD_PRINT_TEXT(795,794,254,29,this.formItem.ownerName);
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(795,718,97,29,this.formItem.contractorName);
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(793,647,118,28,this.formItem.operatorName);
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(794,566,233,27,this.formItem.operatorIDNumber);
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(792,485,338,29,this.formItem.operatorAddress);
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(793,406,186,29,this.formItem.contactPhoneNo);
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(792,238,233,29,this.formItem.contractNo);
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(794,158,240,24,this.formItem.contractVerifyUnit);
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(828,86,60,30,this.formItem.beginDate.getFullYear());
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(902,85,44,30,this.formItem.beginDate.getMonth() + 1);
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(947,84,40,30,this.formItem.beginDate.getDate());
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(1039,85,55,25,this.formItem.invalidDate.getFullYear());
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(1152,86,51,25,this.formItem.invalidDate.getDate());
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(1109,86,49,30,this.formItem.invalidDate.getMonth() + 1);
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#0000FF");
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
if(opType == "1"){
  LODOP.ADD_PRINT_TEXT(1093,340,21,20,"√");
  LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
}
else if(opType == "2"){  
  LODOP.ADD_PRINT_TEXT(1094,304,23,20,"√");
  LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
}
else if(opType == "3"){
  LODOP.ADD_PRINT_TEXT(931,339,22,20,"√");
  LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
}
else if(opType == "4")
{
  LODOP.ADD_PRINT_TEXT(931,303,19,20,"√");
  LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
}

LODOP.ADD_PRINT_TEXT(248,796,100,20,this.formItem.control);
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(372,795,100,20,this.formItem.controlNO);
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(231,148,55,20,this.formItem.issuingDate.getFullYear());
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(327,147,54,20,this.formItem.issuingDate.getMonth() + 1);
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
LODOP.ADD_PRINT_TEXT(394,148,60,20,this.formItem.issuingDate.getDate());
LODOP.SET_PRINT_STYLEA(0,"FontSize",13);
LODOP.SET_PRINT_STYLEA(0,"Angle",-90);
    },
    createFirstFullBill(){},
    createFirstDataBill(){}
  }
}
</script>
