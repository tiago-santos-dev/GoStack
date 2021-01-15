module.exports =  {
    presets: [
        '@babel/preset-env',//Converte funcionalidades do JS de acordo 
                            //com o ambiente que a aplicação está rodando.

        '@babel/preset-react' // Entende o html dentro do JS e converter de
                            //maneira que o browser entenda. 
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
}