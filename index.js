


/**
 * 
 * @param {string} pass 
 * @returns 
 */
const validate=(pass)=>{
    let lowercase= "abcdefghijklmnopqrstuvwxyz".split("");
    let uppercase=lowercase.map((e)=>e.toUpperCase());
    let digits="1234567890".split("");
    let flag=true;

    if(pass.length<8){
        return {
            status:false,
            message:"min length of password should be 8"
        }
    }
    if(!pass.split("").find((c)=>lowercase.includes(c))){
        return {
            status:false,
            message:"at least 1 lowercase letter is needed"
        }
    }
    if(!pass.split("").find((c)=>uppercase.includes(c))){
        return {
            status:false,
            message:"at least 1 uppercase letter is needed"
        }
    }
    if(!pass.split("").find((c)=>digits.includes(c))){
        return {
            status:false,
            message:"at least 1 digits is needed"
        }
    }
    return {
             status:true,
            message:"password is valid"
    };
}
 module.exports=validate;