<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100">
      <AppHeader />
      <div class="body flex-grow-1 px-3">
        <div id="sidebar">
          <div id="tree"></div>
        </div>
        <div id="preview"></div>
        <DxTreeList
          id="employees"
          :data-source="employees"
          :column-width="200"
          :show-row-lines="true"
          :show-borders="true"
          :expanded-row-keys="expandedRowKeys"
          key-expr="ID"
          parent-id-expr="Head_ID"
        >
          <DxColumn data-field="Title" caption="Postion" />
        </DxTreeList>
        <router-view />
      </div>
      <!-- <AppFooter /> -->
    </div>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import { DxTreeList, DxColumn } from "devextreme-vue/tree-list";
import { employees } from "@/data";
import axios from 'axios'
window.axios = axios;

export default {
  name: "DefaultLayout",
  components: {
    AppHeader,
    AppSidebar,
    DxTreeList,
    DxColumn,
  },
  // setup() {
  // const getUser = () => {
  //   axios 
  //     .then("http://localhost:3000/item")
  //     .then(function (response) {
        
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     getUser();
  // }
  // },
  data() {
    return {
      employees,
      columnChooserModes: [
        {
          key: "dragAndDrop",
          name: "Drag and drop",
        },
        {
          key: "select",
          name: "Select",
        },
      ],
      mode: "dragAndDrop",
      allowSearch: true,
      expandedRowKeys: [1],
    };
  },
  created() {
    fetch("http://localhost:3000/info") 
    fetch("http://localhost:3000/item")
      .then((response) => response.json())
      .then((data) => console.log(data))

    },
  //   fetch("http://localhost:3000/item").then((response) => {
  //     console.log(response.json())
  //   });
  // },
};
</script>
<style>
.btn {
  /* background-color: DodgerBlue; */
  border: none;
  color: white;
  padding: 12px 16px;
  margin-right: 0px;
  font-size: 16px;
  cursor: pointer;
}
#employees {
  max-height: 440px;
}

.caption {
  background-color: blue;
  font-size: 18px;
  font-weight: 500;
  color: red;
}
</style>
