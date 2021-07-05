var user = [
        {
            id: 1,
            name: "PerT",
        },
        {
            id:2,
            name: "Pery",
        },
        {
            id:3,
            name:"Pere",
        },
        {
            id:4,
            name:"Nhon"
        }
    ];
    var avatars = [
        {
            id:1,
            
            link: 'google.com',
        },
        {
            id:2,
            
            link: 'facebook.com',
        }
    ];
    
    var comments = [
        {
            id: 1,
            user_id:1,
            content: 'Hello ae!!!',
        },
        {
            id:2,
            user_id:2,
            content: 'Chao` b!!!',
        },
        { 
            id:3,
            user_id:3,
            content: 'Hey! Rat vui duoc gap',
        },
        {
            id:4,
            user_id:1,
            content:'Yep!',
        }
    ];


    //   1. Lay' comment
    //   2. Tu` comment lay user_id
    //   3. Tu user_id lay ra user tuong ung

//  Get CommentsUser
    function getCommentsUser(){
        return new Promise((resolve)=>{
            resolve(comments);                  // Get ra cac Object comment trong array
        })
    }

//  Get User
    function getUserIds(userIds){
        return new Promise((resolve)=>{
            var result =  user.filter((userId)=>{
                return userIds.includes(userId.id);
            }) 
            resolve(result)
        })
    }
// Get Avatars
    function getAvatarIds(userIds){
        return new Promise((resolve)=>{
            var avatar = avatars.filter((avatarsId)=>{
                return userIds.includes(avatarsId.id);
            })
            resolve(avatar)
        })
    }


    getCommentsUser()
        .then(()=>{
            var userIds = comments.map((checkid)=>{
                return checkid.user_id;
            })
            return  getUserIds(userIds)
                .then((user)=>{             
                    return getAvatarIds(user,avatars)
                        .then(()=>{
                            return {
                                avatars:avatars,
                                users:user,
                                comments: comments
                            }
                        })  
                })
        })

        // Do data ra
        .then((data)=>{
            var commentsBlock = document.querySelector('ul');
            var html='';
            data.comments.forEach((commentUser)=>{
                var userName = data.users.find((userids)=>{
                    return userids.id === commentUser.user_id;
                })
                var avatarUser = data.avatars.find((avatarids)=>{
                    return avatarids.id===commentUser.user_id;
                })
                html +=`<li>${avatarUser.link} ${userName.name}: ${commentUser.content}`
            })
            commentsBlock.innerHTML = html;
        })
    