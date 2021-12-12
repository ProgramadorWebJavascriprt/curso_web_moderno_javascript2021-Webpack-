const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // Sábado,12/12/2021 as 21:45:00 h+|-
const OptimizeCSSAssetsPlugin =require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development': 'production',
    entry: './src/principal.js', // quinta-feira,09/12/2021 as 21:36:00 h +|-
     output: {
         filename: 'principal.js',
         path: __dirname + '/public'
    
            } ,
            devServer: {
               contentBase: "./public" ,
               port: 9000
            },
            optimization:{
              minimizer:  [
                  new UglifyJsPlugin({
                      cache: true,
                      parallel: true
                  }),
                  new OptimizeCSSAssetsPlugin({})
              ]
            },
            plugins: [
                new MiniCssExtractPlugin({
                    filename:"estilo.css",
                 
                })
            ] ,
            module:{
            rules: [{ 
                //sexta-feira,10/12/2021 as 22:21:00 h +|-
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader', // Adicionar CSS a DOM injetando a tag <style> 
                    'css-loader', // interpreta @import,url()...
                    'sass-loader',
                ]
            },{
                test: /\.(png|svg|jpeg|jpg|gif)$/ ,
                use: ['file-loader']
            }]
   } 
}