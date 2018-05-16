export interface IArticle{
    title:string,
    articleid:string;
    article:boolean;    
    parent:string;
    section:boolean;
    subject:string;   
    body:string,
    dateCreated:number,   
    picUrl?:string,
    hasPic:boolean,
    uid:string, 
    nickname:string,
    profileUrl:string,
    grade:string,
    school:string
}