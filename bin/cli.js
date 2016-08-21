#!/usr/bin/env node

var program = require('commander');
var base64Img = require('base64-img');
var appInfo = require('./../package.json');
var fs = require('file-system');
var iconv = require('iconv-lite');

//    path = process.cwd();
//
//var run= function (obj) {
//    if(obj[0] === '-v'){
//        console.log('version is 1.0.0');
//    }else if(obj[0] === '-h'){
//        console.log('Useage:');
//        console.log('  -v --version [show version]');
//    }else{
//        fs.readdir(path, function(err, files){
//            if(err){
//                return console.log(err);
//            }
//            for(var i = 0; i < files.length; i += 1){
//                console.log(files[i]);
//            }
//        });
//    }
//};
////��ȡ���һ�������Ժ�Ĳ���ʹ�ÿո���
//run(process.argv.slice(2));


program
    .version(appInfo.version)
    .usage('trans [options] <path>')
    .option('-r, --restore <html>','restore html')
    .command('input <img>')
    .alias('i')
    .description('input img path')
    .option('-j, --inject <html>', 'convert image to base64 and inject html')
    .action(function(img, options){
        var baseData = base64Img.base64Sync(img);
        fs.readFile(options.inject, function(err, data) {
            if (err) return callback(err);
            var str = iconv.decode(data, 'gbk');
            if(str.indexOf(img) > -1) {

            }
            str = str.replace(img, "" + baseData);
            fs.writeFile(options.inject, str, function (err) {
                console.log("success");
            })
        });
    });
program.parse(process.argv);



if(program.restore){
    path = process.cwd();
    fs.readdir(path, function(err, files){
        var bool = false;
        if(err){
            return console.log(err);
        }
        for(var i = 0; i < files.length; i += 1){
           if(files[i] == "pre.otter"){
               bool = true;
               break;
           }
        }
        if(bool){
            fs.readFile('pre.otter', function(err, data) {
                fs.writeFile(program.restore, data, function (err) {
                    console.log("done");
                })
            });
        }else{
            fs.copyFile(program.restore,'pre.otter', {
                done: function(err) {
                    console.log('done2');
                }
            });
        };
    });
}




