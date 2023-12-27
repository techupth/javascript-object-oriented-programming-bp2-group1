class User {
    constructor(id,name,email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
class PostList {
    constructor(posts){
        this.posts = [posts]
    }
    addPost(post){
        this.posts.push(post)
    }
    sharePost(postTitle){
        console.log("You've shared post '"+postTitle+"' to your friend.")
    }
}
class Post {
    constructor(id,title,content,comment){
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = comment;
    }
    addComment(comment){
        this.comment += comment
    }
}
class Comment {
    constructor(id,content,createdBy,like){
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0
    }
    addLike(){
        this.like += 1
    }
}
class Facebook {
    constructor(groupList,pageList){
        this.groupList = groupList;
        this.pageList = pageList;
    }
    addGroup(groupName){
        this.groupList += groupName
    }
    addPage(pageName){
        this.pageList += pageName
    }
}
class FacebookPage {
    constructor(name){
        this.name = name
    }
}
class FacebookGroup {
    constructor(name){
        this.name = name
    }
}
class Notification {
    constructor(id){
        this.id = id
    }
    send(postTitle){
        console.log(`Notification: ${this.id} has just commented on this post-"${postTitle}"`)
    }
}