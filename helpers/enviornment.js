

const environments={

}

environments.stating={
    port:3000,
    envName:'stating'
}
environments.production={
    port:5000,
    envName:'production'
}

const currentEnvironment=typeof(process.env.NODE_ENV)=== "string"? process.env.NODE_ENV:'stating';

const environmentToExport=typeof(environments[currentEnvironment]==='object'?environments[currentEnvironment]:environments.stating);
console.log(environmentToExport.port)
module.exports=environmentToExport