<template>
    <div>
        <h2>{{ user.name }}</h2>
        
        <div class="form">
            
            <hr>
            <div class="form-group">
                <label for="">Name</label>
                <input type="text" class="form-control" v-model="name">
            </div>
            


            <label for="">Droits</label>

            <div class="form-check" v-for="right in rights" :key="right.id">
                <input v-model="user_rights" class="form-check-input" type="checkbox" :value="right.id" :id="'right-'+right.id">
                <label class="form-check-label" :for="'right-'+right.id">
                    {{ right.name }}
                </label>
            </div>
            
            <hr>
            <div>
                <button @click="save" class="btn btn-primary" :disabled="!canSave">Save</button>
            </div>
            
            
        </div>
        
        
    </div>
</template>

<script>
    export default {
        name: 'UserDetail',
        data(){

            let user = this.$store.getters.selectedUser;
            return {
                name: user.name,
                user_rights: user.rights,
            };
        },
        computed:{
            canSave(){
                return this.user_rights.length>0 && this.name.trim()!=='';
            },
            user(){
                return this.$store.getters.selectedUser;
            },
            rights(){
                return this.$store.state.rights
            }            
        },
        methods:{
            getClass(user){
                return this.$store.state.selected_user_id === user.id ? 'active' : '';
            },
            select(user){
                this.$store.commit('selectUser', user.id)
            },
            save(){
                console.log(this.user_rights)
                this.$store.commit('setUserName', {user: this.user, name:this.name});
                this.$store.commit('setUserRights', {user:this.user, rights:this.user_rights} );
                this.$store.state.selected_user_id = 0;
            }
        }
    }
</script>
