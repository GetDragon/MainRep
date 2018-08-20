// base Url of the API
const baseUrl = "http://jsonplaceholder.typicode.com";

// List component
const List = {
    template: '#list-template',
    data: () => ({
        posts: []
    }),
    mounted() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            axios.get('/getdata').then(response => {
                this.posts = response.data;
                console.log(this.posts);
            }).catch(error => {
                console.log(error);
            })
        }
    }
};

// Post component
const Post = {
    template: '#post-template',
    data: () => ({
        post: null
    }),
    mounted() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            var id = this.$route.params.id;
            axios.get(baseUrl + '/posts/' + id).then(response => {
                this.post = response.data
                console.log(this.post);
            }).catch(error => {
                console.log(error);
            })
        }
    }
};

// Post component
const GetData = {
    template: '#list-template',
    data: () => ({
        post: null
    }),
    mounted() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            this.post = 
        }
    }
};
// Create vue router
var router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'homepage',
            path: '/',
            component: List
        }, {
            name: 'post',
            path: '/:id',
            component: Post
        }, {
            name: 'data',
            path: '/getdata',
            component: GetData
        }
    ]
});

// Create vue instance with our router, and mount onto #app
var vue = new Vue({router});
var app = vue.$mount('#app');