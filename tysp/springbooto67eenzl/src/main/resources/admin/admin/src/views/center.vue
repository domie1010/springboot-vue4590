<template>
  <div :style='{"color":"#666","padding":"20px 30px 30px","fontSize":"14px"}'>
    <el-form
	  :style='{"border":"1px solid #bababa","padding":"40px 30px 20px","borderRadius":"8px","alignItems":"flex-start","flexWrap":"wrap","background":"rgba(255,255,255,1)","display":"flex","fontSize":"inherit"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      label-width="150px"
    >  
     <el-row>
        <el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}'   v-if="flag=='yonghu'"  label="用户账号" prop="yonghuzhanghao">
          <el-input v-model="ruleForm.yonghuzhanghao" readonly              placeholder="用户账号" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}'   v-if="flag=='yonghu'"  label="用户姓名" prop="yonghuxingming">
          <el-input v-model="ruleForm.yonghuxingming"               placeholder="用户姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-if="flag=='yonghu'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
            <el-option
                v-for="(item,index) in yonghuxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}'   v-if="flag=='yonghu'"  label="电话" prop="dianhua">
          <el-input v-model="ruleForm.dianhua"               placeholder="电话" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-if="flag=='yonghu'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="yonghutouxiangUploadChange"
          ></file-upload>
        </el-form-item>
        <el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}'   v-if="flag=='shangjia'"  label="店铺名称" prop="dianpumingcheng">
          <el-input v-model="ruleForm.dianpumingcheng" readonly              placeholder="店铺名称" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}'   v-if="flag=='shangjia'"  label="店铺地址" prop="dianpudizhi">
          <el-input v-model="ruleForm.dianpudizhi"               placeholder="店铺地址" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}'   v-if="flag=='shangjia'"  label="经营范围" prop="jingyingfanwei">
          <el-input v-model="ruleForm.jingyingfanwei"               placeholder="经营范围" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}'   v-if="flag=='shangjia'"  label="营业时间" prop="yingyeshijian">
          <el-input v-model="ruleForm.yingyeshijian"               placeholder="营业时间" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}'   v-if="flag=='shangjia'"  label="联系电话" prop="lianxidianhua">
          <el-input v-model="ruleForm.lianxidianhua"               placeholder="联系电话" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-if="flag=='shangjia'" label="营业执照" prop="yingyezhizhao">
          <file-upload
          tip="点击上传营业执照"
          action="file/upload"
          :limit="3"
		  :type="3"
          :multiple="true"
          :fileUrls="ruleForm.yingyezhizhao?ruleForm.yingyezhizhao:''"
          @change="shangjiayingyezhizhaoUploadChange"
          ></file-upload>
        </el-form-item>
        <el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-if="flag=='shangjia'" label="店铺照片" prop="dianpuzhaopian">
          <file-upload
          tip="点击上传店铺照片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.dianpuzhaopian?ruleForm.dianpuzhaopian:''"
          @change="shangjiadianpuzhaopianUploadChange"
          ></file-upload>
        </el-form-item>
		<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-if="flag=='shangjia'" label="店铺简介" prop="dianpujianjie">
		  <editor
		  	style="min-width: 200px; max-width: 600px;"
			 :style='{"minHeight":"150px","border":"0px solid #f1f2f7","width":"96%","background":"none","height":"auto"}'
		  	v-model="ruleForm.dianpujianjie" 
		  	class="editor" 
		  	action="file/upload">
		  </editor>
		</el-form-item>
		<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-if="flag=='users'" label="用户名" prop="username">
			<el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
		</el-form-item>
		<el-form-item :style='{"border":"1px solid #eee","padding":"20px 0","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","width":"100%","fontSize":"inherit"}' v-if="flag=='users'" label="头像" prop="image">
		  <file-upload
		  tip="点击上传头像"
		  action="file/upload"
		  :limit="1"
		  :multiple="false"
		  :fileUrls="ruleForm.image?ruleForm.image:''"
		  @change="usersimageUploadChange"
		  ></file-upload>
		</el-form-item>
		<el-form-item :style='{"padding":"0","margin":"30px 0","alignItems":"center","textAlign":"center","display":"flex","width":"100%","perspective":"320px","-webkitPerspective":"320px","fontSize":"48px","justifyContent":"flex-start"}'>
			<el-button class="btn3" :style='{"border":"1px solid #0260ad","cursor":"pointer","padding":"0 20px","margin":"0px 4px","outline":"none","color":"#0260ad","borderRadius":"4px","background":"none","width":"auto","fontSize":"14px","lineHeight":"24px","height":"36px"}' type="primary" @click="onUpdateHandler">
				<span class="icon iconfont icon-tijiao16" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
				保存
			</el-button>
		</el-form-item>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      yonghuxingbieOptions: [],
    };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.yonghuxingbieOptions = "男,女".split(',')
  },
  methods: {
    yonghutouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
    shangjiayingyezhizhaoUploadChange(fileUrls) {
        this.ruleForm.yingyezhizhao = fileUrls;
    },
    shangjiadianpuzhaopianUploadChange(fileUrls) {
        this.ruleForm.dianpuzhaopian = fileUrls;
    },
	usersimageUploadChange(fileUrls) {
		this.ruleForm.image = fileUrls;
	},
    onUpdateHandler() {
      if((!this.ruleForm.yonghuzhanghao)&& 'yonghu'==this.flag){
        this.$message.error('用户账号不能为空');
        return
      }


      if((!this.ruleForm.mima)&& 'yonghu'==this.flag){
        this.$message.error('密码不能为空');
        return
      }


      if((!this.ruleForm.yonghuxingming)&& 'yonghu'==this.flag){
        this.$message.error('用户姓名不能为空');
        return
      }






      if( 'yonghu' ==this.flag && this.ruleForm.dianhua&&(!isMobile(this.ruleForm.dianhua))){
        this.$message.error(`电话应输入手机格式`);
        return
      }


        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }


      if( 'yonghu' ==this.flag && this.ruleForm.money&&(!isNumber(this.ruleForm.money))){
        this.$message.error(`余额应输入数字`);
        return
      }
      if((!this.ruleForm.dianpumingcheng)&& 'shangjia'==this.flag){
        this.$message.error('店铺名称不能为空');
        return
      }


      if((!this.ruleForm.mima)&& 'shangjia'==this.flag){
        this.$message.error('密码不能为空');
        return
      }


      if((!this.ruleForm.dianpudizhi)&& 'shangjia'==this.flag){
        this.$message.error('店铺地址不能为空');
        return
      }








      if( 'shangjia' ==this.flag && this.ruleForm.lianxidianhua&&(!isMobile(this.ruleForm.lianxidianhua))){
        this.$message.error(`联系电话应输入手机格式`);
        return
      }


        if(this.ruleForm.yingyezhizhao!=null) {
                this.ruleForm.yingyezhizhao = this.ruleForm.yingyezhizhao.replace(new RegExp(this.$base.url,"g"),"");
        }




        if(this.ruleForm.dianpuzhaopian!=null) {
                this.ruleForm.dianpuzhaopian = this.ruleForm.dianpuzhaopian.replace(new RegExp(this.$base.url,"g"),"");
        }






      if( 'shangjia' ==this.flag && this.ruleForm.storeupnum&&(!isIntNumer(this.ruleForm.storeupnum))){
       this.$message.error(`收藏数应输入整数`);
        return
      }


      if( 'shangjia' ==this.flag && this.ruleForm.money&&(!isNumber(this.ruleForm.money))){
        this.$message.error(`余额应输入数字`);
        return
      }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
	this.$message.error(`用户名不能为空`);
        return	
      }
	  if(this.flag=='users'){
	  	this.ruleForm.image = this.ruleForm.image.replace(new RegExp(this.$base.url,"g"),"")
	  }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
				if(this.flag=='users'){
					this.$storage.set('headportrait',this.ruleForm.image)
				}
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #333;
	  	  font-weight: 500;
	  	  display: inline-block;
	  	  width: 150px;
	  	  font-size: inherit;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 150px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  padding: 0 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: none;
	  	  width: auto;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 39px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border-radius: 0px;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: none;
	  	  width: auto;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  height: 39px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border-radius: 0px;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: none;
	  	  width: auto;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  height: 39px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  cursor: pointer;
	  	  color: #bbb;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #ddd;
	  	  line-height: 60px;
	  	  border-radius: 0px;
	  	  background: none;
	  	  width: 140px;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  cursor: pointer;
	  	  color: #bbb;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #ddd;
	  	  line-height: 60px;
	  	  border-radius: 0px;
	  	  background: none;
	  	  width: 140px;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  padding: 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: none;
	  	  width: auto;
	  	  border-width: 0 0 1px;
	  	  border-style: solid;
	  	  min-width: 50%;
	  	  height: auto;
	  	}
	
	.add-update-preview .btn3 {
				border: 1px solid #0260ad;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #0260ad;
				background: none;
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 36px;
			}
	
	.add-update-preview .btn3:hover {
				transform: scale(0.9) translate3d(0px, -10px, 0px);
				opacity: 0.8;
			}
	
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
