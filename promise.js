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
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error=false;
            if(!error){
                resolve();
            }else{
                reject('errorr something went wrong')
            }
        },2000);
    });
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (posts.length >0){
                const lastelement=posts.pop()
                resolve(lastelement);
            }else{
                reject('array is empty');
            }
        },1000);
    });
}
createPost({title:'Post Three',body:'this is post Three'})
.then(()=>{
    getPosts()
    deletePost().then((deletedElement)=>{
        console.log(deletedElement)
        getPosts();
        deletePost().then(()=>{
            getPosts();
            deletePost().then(()=>{
                getPosts()
                deletePost().then(()=>{})
                .catch((err)=>{
                    console.log('inside catch block',err)        
                })
            
            }) .catch((err)=>{})
        
        }) .catch((err)=>{})

    })
})
.catch(err=>console.log(err))

const promise1=promise.resolve('heloo'); 
const promise2=10;
const promise3=new promise ((resolve,reject)=>
setTimeout(resolve ,2000,'byeee'));

promise.all([promise1,promise2,promise3]).then(values=>console.log(values));