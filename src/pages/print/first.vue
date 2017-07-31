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
    
            <Form-item>
                <i-button type="primary">保存</i-button>
                <i-button type="ghost" style="margin-left: 8px">取消</i-button>
                <i-button style="margin-left: 8px" @click="previewPrintFull">打印预览</i-button>
    
                <i-button style="margin-left: 8px" @click="printDesign">打印设计</i-button>
                <!--<i-button style="margin-left: 8px" @click="onSetup">打印维护</i-button>-->
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
        onPrintFirstPage() { },
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

            LODOP.PRINT_INITA(10, 10, 1054, 715, "恩施农村土地确权证");
            LODOP.ADD_PRINT_SETUP_BKIMG("C:\\Users\\AnnieXiong\\Pictures\\打印\\首页.png");
            LODOP.ADD_PRINT_TEXT(411, 107, 100, 25, "农地经营权");
            LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
            LODOP.ADD_PRINT_TEXT(266, 104, 100, 25, "第xxxx号");
            LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
            LODOP.ADD_PRINT_TEXT(471, 870, 74, 20, "2017");
            LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
            LODOP.ADD_PRINT_TEXT(350, 870, 59, 20, "06");
            LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
            LODOP.ADD_PRINT_TEXT(276, 870, 59, 20, "04");
            LODOP.SET_PRINT_STYLEA(0, "Angle", 90);





        },
        createDataBill() {
            LODOP = getLodop();


            LODOP.PRINT_INITA(10, 10, 1054, 715, "恩施农村土地确权证");
            LODOP.ADD_PRINT_SETUP_BKIMG("C:\\Users\\AnnieXiong\\Pictures\\打印\\首页.png");
            LODOP.ADD_PRINT_TEXT(411, 107, 100, 25, this.formItem.control);
            LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
            LODOP.ADD_PRINT_TEXT(266, 104, 100, 25, this.formItem.controlNO);
            LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
            LODOP.ADD_PRINT_TEXT(471, 870, 74, 20, this.formItem.issuingDate.getFullYear());
            LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
            LODOP.ADD_PRINT_TEXT(350, 870, 59, 20, this.formItem.issuingDate.getMonth() + 1);
            LODOP.SET_PRINT_STYLEA(0, "Angle", 90);
            LODOP.ADD_PRINT_TEXT(276, 870, 59, 20, this.formItem.issuingDate.getDate());
            LODOP.SET_PRINT_STYLEA(0, "Angle", 90);


        }

    }
}
</script>
