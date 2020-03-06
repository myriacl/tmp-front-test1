<template>
  <div id="app" class="container">

    
    <div class="row">
      <div class="col">
          <UserList />
      </div>
      <div class="col">
          <UserDetail v-if="$store.getters.selectedUser" :key="$store.state.selected_user_id" />
      </div>
    </div>

    

    
  </div>
</template>

<script>
import UserList from './components/UserList.vue'
import UserDetail from './components/UserDetail.vue'

export default {
  name: 'App',
  components: {
    UserList,
    UserDetail
  }
  
}
</script>

