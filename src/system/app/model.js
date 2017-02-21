export default {
    namespace : 'app',
    state : {
        isAuth: true,
        account: {
            username: "anonymous",
            ability: null,
            user_id: null,
            email: null
        }
    },
    effect : {
        logout: function*() {
          console.log('logout');
        }
    }
}
