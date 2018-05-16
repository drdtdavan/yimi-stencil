export interface ITopic{
    topicid:string,   
    title:string,
    body:string,
    dateCreated:number,
    numComments:number,
    numLikes:number,
    picUrl?:string,
    hasPic:boolean,
    uid:string, 
    nickname:string,
    profileUrl:string,
    grade:string,
    school:string,
    likeObj:object,
    taglist:string[],
    subject:string
    }