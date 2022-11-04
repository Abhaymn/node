const posts=[

    {

        title:'Post One',body:'This is post one',createdAt: new Date().getTime()

    },

       { 

        title:'Post Two',body:'This is post two',createdAt: new Date().getTime()

    }

];

function getPosts(){

    setTimeout(()=>{

        let output='';

        posts.forEach((posts,index)=>{

            output+=`<li>${posts.title} - last updated${(new Date().getTime()-posts.createdAt)/1000}seconds ago</li>`;

        });

        document.body.innerHTML=output;

    },1000)

}

function createPost(post,callback){

    setTimeout(()=>{

        posts.push({ ...post,createdAt: new Date().getTime()});

        callback();

    },2000)

}


createPost({title:'Post Three',body:'This is post three'},getPosts);

createPost({title:'Post Four',body:'This is post four'},getPosts);