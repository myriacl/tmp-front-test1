<template>
    <div>
        <h2>UserList</h2>
        <div class="list-group">
            
            <a v-for="user in users" href="javascript:void(0)" 
            class="list-group-item list-group-item-action" 
            @click="select(user)"
            :class="getClass(user)" :key="user.id">
            {{ user.name }} ({{ listRights(user) }})
        </a>
        
        
    </div>
</div>
</template>

<script>
    export default {
        name: 'UserList',
        computed:{
            users(){
                return this.$store.state.users;
            }
        },
        methods:{
            getClass(user){
                return this.$store.state.selected_user_id === user.id ? 'active' : '';
            },
            select(user){
                this.$store.commit('selectUser', user.id)
            },
            listRights(user){
                let rights = this.$store.state.rights;
                let hash = {};
                
                
                for(let i=0;i<rights.length;i++){
                    hash[rights[i].id] = rights[i].name;
                }

                let arr=[];
                for(var i=0;i<user.rights.length;i++){
                    let right_id = user.rights[i];
                    arr.push( hash[right_id] );
                }
                return arr.join(', ');
                
            }
        }
    }
</script>

