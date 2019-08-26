<template>
  <div class="mj-basic-info shadow">
    <div class="basic-info">基本信息（<span class="tips"><span class="mi">*</span>&nbsp;&nbsp;标识为必填项</span>）</div>
    <el-form :model="basicInfo"
             :rules="rules"
             ref="basicInfoForm"
             :show-message="false">
      <div class="basic-content">

        <div class="company-name">
          <!-- eslint-disable -->
          <el-form-item label="公司名称"
                        prop="companyName"
                        class="mr">
            <el-input v-model="basicInfo.companyName"></el-input>
          </el-form-item>
          <el-form-item label="企业性质"
                        prop="compType">
            　<el-select v-model="basicInfo.compType"
                       placeholder="请选择"
                       popper-class="fit-select">
              <el-option v-for="item in companyType"
                         :key="item.id"
                         :label="item.name"
                         :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>

        </div>
        <div class="fit-industry">
          <el-form-item label="所属行业"
                        prop="industry"
                        class="mr">
            　<el-select v-model="basicInfo.industry"
                       placeholder="请选择"
                       popper-class="fit-select">
              <el-option v-for="item in companyIdustry"
                         :key="item.id"
                         :label="item.name"
                         :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="所处阶段"
                        prop="phases">
            　<el-select v-model="basicInfo.phases"
                       placeholder="请选择"
                       popper-class="fit-select">
              <el-option v-for="item in companyStage"
                         :key="item.id"
                         :label="item.name"
                         :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="type">
          <el-form-item label="公司规模"
                        prop="compSize"
                        class="mr">
            　　<el-select v-model="basicInfo.compSize"
                       placeholder="请选择"
                       popper-class="fit-select">
              <el-option v-for="item in companySize"
                         :key="item.id"
                         :label="item.name"
                         :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所在城市"
                        prop="city">
            <el-cascader :options="province"
                         v-model="selectedValue"
                         change-on-select
                         :props="configData"
                         @change="changeCity">
            </el-cascader>
          </el-form-item>

        </div>
        <div class="connect-url">
          <el-form-item label="联系电话"
                        prop="phone"
                        class="mr">
            <el-input v-model="basicInfo.phone"></el-input>
          </el-form-item>
          <el-form-item label="公司网址">
            <el-input v-model="basicInfo.webSit"></el-input>
          </el-form-item>

        </div>
        <div class="company-address">
          <el-form-item label="公司地址"
                        prop="address">
            <el-input v-model="basicInfo.address"></el-input>
          </el-form-item>

        </div>

        <div class="company-intro">
          公司介绍&nbsp;&nbsp;&nbsp;<textarea name=""
                    v-model="basicInfo.signature"></textarea>
        </div>
        <div class="company-weal">
          企业福利&nbsp;&nbsp;&nbsp;<el-select v-model="welfareValue"
                     multiple
                     placeholder
                     ref="select"
                     disabled>
            <el-option v-for="item in welfare"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
            <div class="confirm"
                 @click="confirm">确定</div>
            <i class="el-icon-close close"
               @click="close"></i>
          </el-select>
          <div class="choice"
               @click="showChooseWeal">请选择</div>
        </div>
        <div class="employee-mien">
          员工风采　<div class="upload-model">
            <el-upload action="http://139.196.77.121:8088/hr/uploadComImg"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove"
                       :on-success="successUpload">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%"
                   :src="dialogImageUrl"
                   alt="">
            </el-dialog>
          </div>
        </div>
      </div>
    </el-form>
    <div class="btn">
      <div class="middle-btn">
        <el-button type="success"
                   round
                   @click="saveInfo('basicInfoForm')">保存</el-button>
      </div>

    </div>
    <!-- 模态框 -->
    <div class="mj-mask"
         v-if="showMask"></div>
    <!-- hr信息 -->
    <div class="hr-dialog">
      <el-dialog :visible.sync="hrDialog"
                 width="50%"
                 :close-on-click-modal="false"
                 :close-on-press-escape="false"
                 :show-close="false">
        <div class="hr-title">HR个人信息</div>
        <div class="hr-content">
          <el-form :model="hrInfo"
                   :rules="hrRules"
                   ref="hrInfoForm"
                   :show-message="false">
            <el-form-item>
              <el-upload class="avatar-uploader"
                         action="https://jsonplaceholder.typicode.com/posts/"
                         :show-file-list="false"
                         :on-success="handleAvatarSuccess"
                         :before-upload="beforeAvatarUpload">
                <img v-if="hrInfo.imageUrl"
                     :src="hrInfo.imageUrl"
                     class="avatar">
                <i v-else
                   class="iconfont icon-touxiang avatar-uploader-icon"></i>
              </el-upload>
              <div class="upload-photo">上传头像</div>
            </el-form-item>
            <el-form-item label="姓　　名"
                          prop="linkName">
              <el-input v-model="hrInfo.linkName"></el-input>
            </el-form-item>
            <el-form-item label="性　　别"
                          prop="gender">
              <el-select v-model="hrInfo.gender"
                         placeholder="请选择"
                         popper-class="gender-select">
                <el-option v-for="item in genderData"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="职　　位"
                          prop="duty">
              <el-input v-model="hrInfo.duty"></el-input>
              <!-- <el-select v-model="basicInfo.gengder"
                         placeholder="请选择"
                         popper-class="gender-select">
                <el-option v-for="item in genderData"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select> -->
            </el-form-item>
            <el-form-item label="联系方式"
                          prop="mobile">
              <el-input v-model="hrInfo.mobile"></el-input>
            </el-form-item>
            <el-form-item label="邮　　箱"
                          prop="email">
              <el-input v-model="hrInfo.email"></el-input>
            </el-form-item>
            <el-form-item label="微　　信"
                          prop="weixin">
              <el-input v-model="hrInfo.weixin"></el-input>
            </el-form-item>
            <div class="sava-hr-info"
                 @click="saveHrInfo('hrInfoForm')">保存继续完善公司信息</div>
          </el-form>
        </div>
      </el-dialog>

    </div>
  </div>

</template>

<script src="./js/basicInfo.js"></script>
<style lang="less" src="./less/basicInfo.less"></style>
