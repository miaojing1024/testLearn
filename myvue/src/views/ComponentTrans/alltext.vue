<template>
<!-- https://blog.csdn.net/weixin_44246717/article/details/109556983?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161459040216780266261314%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=161459040216780266261314&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_v2~rank_v29-2-109556983.pc_search_result_cache&utm_term=%24attrs+%2F+%24listeners%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%80%BC -->
  <div class="box">
    <button @click="com = 'Props'">Props</button>&nbsp;&nbsp;&nbsp;
    <button @click="com = 'Emit'">Emit</button>&nbsp;&nbsp;&nbsp;
    <button @click="com = 'Vuex'">Vuex</button>&nbsp;&nbsp;&nbsp;
    <button @click="com = 'EventBus'">EventBus</button>&nbsp;&nbsp;&nbsp;
    <button @click="com = 'Ref'">Ref</button>&nbsp;&nbsp;&nbsp;
    <button @click="com = 'ParentChildren'">ParentChildren</button>&nbsp;&nbsp;&nbsp;
    <button @click="com = 'ProvideInject'">ProvideInject</button>&nbsp;&nbsp;&nbsp;
    <button @click="com = 'AttrsListeners'">AttrsListeners</button>&nbsp;&nbsp;&nbsp;
    <button @click="com = 'Sync'">Sync</button>&nbsp;&nbsp;&nbsp;
    <component :is="com"></component>
  </div>
</template>

<script>
import Props from "./1props/parent.vue";
import Emit from "./2emit/parent.vue";
import Vuex from "./3vuex/parent.vue";
import EventBus from "./4eventBus/parent.vue";
import Ref from "./5ref/parent.vue";
import ParentChildren from "./6parentChildren/parent.vue";
import ProvideInject from "./7provideInject/parent.vue";
import AttrsListeners from "./8attrsListeners/parent.vue";
import Sync from "./9sync/parent.vue";
export default {
  components: {
    Props,
    Emit,
    Vuex,
    EventBus,
    Ref,
    ParentChildren,
    ProvideInject,
    AttrsListeners,
    Sync,
  },
  data() {
    return {
      com: "Props",
    };
  },
};
</script>

<style scoped>
.box{
  width: 500px;
  height: 300px;
  border:1px solid purple;
  margin: 100px auto;
}
</style>