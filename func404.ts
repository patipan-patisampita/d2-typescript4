function showDetail(id:number, name:string, e_mail_id?:string): any{
    return id + name + e_mail_id;
}
let a = showDetail(101,'Jame Kotlin', 'jame@emil.com');
console.log(a);