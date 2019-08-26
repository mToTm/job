<template>
  <div class="mj-post shadow">
    <div class="mj-post-title">职位发布（<span class="tips"><span class="mi">*</span>&nbsp;&nbsp;标识为必填项</span>）</div>
    <!-- 这是发布职位页面 -->
    <div class="post-content mt">
      <el-form :model="postForm"
               :rules="rules"
               ref="postForm"
               :show-message="false">
        <div class="job-type mt">
          <el-radio v-model="postForm.cateValue"
                    label="1">社会招聘<i class="iconfont icon-xuanzhong"></i></el-radio>
          <el-radio v-model="postForm.cateValue"
                    label="2">实习生<i class="iconfont icon-xuanzhong"></i></el-radio>
        </div>
        <div class="position-name">
          <el-form-item label="职位名称"
                        prop="positionName"
                        class="mr">
            <el-input v-model="postForm.positionName"
                      placeholder="输入职位名称"></el-input>
          </el-form-item>
        </div>
        <div class="salary clearfix">
          <div class="request fl post-mr">
            <el-form-item label="技术类别"
                          prop="typeValue">
              <el-cascader :options="typeData"
                           v-model="postForm.typeValue"
                           change-on-select
                           :props="configData">
              </el-cascader>
            </el-form-item>
          </div>
          <div class="position-type fl">
            <el-form-item label="工作经验"
                          prop="typeValue">
              <el-select v-model="postForm.expeValue"
                         placeholder="选择经验"
                         popper-class="type-select">
                <el-option v-for="item in expeData"
                           :key="item.id"
                           :label="item.name"
                           :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
        <div class="salary clearfix">
          <div class="request fl post-mr">
            <el-form-item label="薪资要求"
                          prop="salaryValue">
              <el-select v-model="postForm.salaryValue"
                         placeholder="最低"
                         popper-class="type-select">
                <el-option v-for="item in salaryData"
                           :key="item.id"
                           :label="item.name"
                           :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </div>

          <div class="position-type fl">
            <!-- eslint-disable-next-line -->
            <el-form-item label="学　　历"
                          prop="eduValue">
              <el-select v-model="postForm.eduValue"
                         popper-class="type-select"
                         placeholder="选择学历">
                <el-option v-for="item in eduData"
                           :key="item.id"
                           :label="item.name"
                           :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>

          </div>
        </div>

        <div class="education post-city">
          <el-form-item label="工作城市"
                        prop="provValue">
            <el-select v-model="postForm.provValue"
                       placeholder="选择城市"
                       popper-class="post-select">
              <el-option v-for="item in provData"
                         :key="item.id"
                         :label="item.regionname"
                         :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>

        </div>

        <div class="education">
          <el-form-item label="工作地点"
                        prop="cityValue">
            <el-input v-model="postForm.cityValue"
                      placeholder="请输入工作地点"></el-input>
          </el-form-item>
        </div>

        <div class="desc">
          职位要求&nbsp;&nbsp;&nbsp;<textarea name=""
                    placeholder="在这里输入职位信息"
                    v-model="desc"
                    @input="descInput"
                    maxlength="500"></textarea>
          <div class="residue">
            <span>{{ inputed }}</span> / 500
          </div>
        </div>
      </el-form>
      <el-button type="success"
                 @click="publish('postForm')">发布职位</el-button>
    </div>
  </div>

</template>

<script src="./js/post.js"></script>
<style lang="less" src="./less/post.less"></style>
