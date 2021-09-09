var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'Hello there'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Yes I am glad that you wanted to see me :))'
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        icons: [
            {
                text: 'Github',
                icon: "fab fa-github-square",
            },
            {
                text: 'Facebook',
                icon: 'fab fa-facebook',
            },
            {
                text: 'Twitter',
                icon: 'fab fa-twitter',
            },
            {
                text: 'Youtube',
                icon: 'fab fa-youtube',
            }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'You are so amazing!!'
    },
    methods: {
        display: function() {
            alert('Here you are')
        }
    }
});