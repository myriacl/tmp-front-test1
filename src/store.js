import Vue from 'vue'

const state = {
    users: [
        {id: 1, name: 'joe', rights:[1, 2]},
        {id: 2, name: 'garcia', rights:[3]},
    ],
    rights:[{id: 1, name:'video'}, {id: 2, name: 'audio'}, {id: 3, name:'text'}],
    selected_user_id: 0
 };
 const getters = {
    selectedUser(state){
        if(state.selected_user_id === 0 ){
            return null;
        }

        for(let i=0;i<state.users.length;i++){
            if(state.users[i].id === state.selected_user_id){
                return state.users[i];
            }
        }

    }
 };
 const actions = {
 };
 const mutations = {
    selectUser(state, user_id){
        if(state.selected_user_id === user_id){
            state.selected_user_id = 0;
        }else{
            state.selected_user_id = user_id
        }
        
     },
     setUserRights(state, {user, rights}){
        Vue.set(user, 'rights', rights);
     },
     setUserName(state, {user, name}){
        user.name = name
     },
     deleteUser(state, user){
        this.users.splice(this.users.indexOf(user), 1);
     }
 };

 export default {
    state,
    getters,
    actions,
    mutations
 }