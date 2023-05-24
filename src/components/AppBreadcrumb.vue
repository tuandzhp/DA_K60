<!-- <template>
  <span>Tổ: {{ selected }}</span>
  <select v-model="selected">
    <option disabled value="">Vui lòng chọn một</option>
    <option>Tổ 1</option>
    <option>Tổ 2</option>
    <option>Tổ 3</option>
    <option>Tổ 4</option>
    <option>Tổ 5</option>
    <option>Tổ 6</option>
  </select>
  <span>Trạng thái model: {{ selected }}</span>
  <select v-model="selected">
    <option disabled value="">Vui lòng chọn một</option>
    <option>Chờ thi công</option>
    <option>Đang thi công</option>
  </select>
  <button type="button" class="btn btn-primary">Tìm kiếm</button>
  <button type="button" class="btn btn-secondary">Thêm</button>
  <button type="button" class="btn btn-success">Sửa</button>
  <button type="button" class="btn btn-danger">Xoá</button>
</template> -->

<!-- <script>
import { onMounted, ref } from 'vue'
import router from '@/router'

export default {
  name: 'AppBreadcrumb',
  setup() {
    const breadcrumbs = ref()

    const getBreadcrumbs = () => {
      return router.currentRoute.value.matched.map((route) => {
        return {
          active: route.path === router.currentRoute.value.fullPath,
          name: route.name,
          path: `${router.options.history.base}${route.path}`,
        }
      })
    }

    router.afterEach(() => {
      breadcrumbs.value = getBreadcrumbs()
    })

    onMounted(() => {
      breadcrumbs.value = getBreadcrumbs()
    })

    return {
      breadcrumbs,
    }
  },
}
</script> -->
