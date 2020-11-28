import AWS from 'aws-sdk'; 
const ssm = new AWS.SSM(); 

const getParamValue = (paramName)=>{
    
    const param = {    
        Name: paramName, 
        WithDecryption: false
    }

   return  ssm.getParameter(param).promise().then(result=>{
       return result.Parameter.Value; 
   }).catch(err=>{
    throw new createError.InternalServerError(err);
   });
}

export {getParamValue}; 