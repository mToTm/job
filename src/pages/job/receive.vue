<template>
  <div class="mj-receive">
    <FilterSearch>
      <template v-slot:position>
        <div class="position fl mr">
          <el-select v-model="positionValue"
                     placeholder="职位">
            <el-option v-for="item in positionData"
                       :key="item.id"
                       :label="item.title"
                       :value="item.title">
            </el-option>
          </el-select>
        </div>
      </template>
    </FilterSearch>
    <div class="receive-content shadow"></div>
  </div>
</template>

<script>
import FilterSearch from '@/components/filterSearch'
import { getAllPosition } from '@/api/index'
export default {
  data () {
    return {
      positionData: [],
      positionValue: ''
    }
  },
  async created () {
    const positionRes = await getAllPosition()
    console.log(positionRes)
    this.positionData = positionRes.data.data
  },
  components: {
    FilterSearch
  }
}
</script>

<style lang="less" scoped>
.receive-content {
  width: 100%;
  height: 585px;
  background-color: #fff;
  border-radius: 10px;
}
</style>
