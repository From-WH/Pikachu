!function () {
    let time = 60
    function wirteCode(prefix, code, fn) {
        let contener = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setTimeout(function run() {
            n += 1
            contener.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            contener.scrollTop = contener.scrollHeight
            if (n < code.length) {
                id = setTimeout(run,time)
            }else{
                fn && fn.call()                
            }
        },time)
    }
    $('.actions').on('click','button',function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        console.log(speed)
        $button.addClass('active').siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
            time = 100
            break
            
            case 'normal':
            time = 60
            break

            case 'fast':
            time = 20
            break
        }
    })
    let code = `
    /*
    *大家好，我是小智（如果不认识当我没说）～
    *今天我来给大家变（画）出我的宠物皮卡丘～
    *首先我们先画出皮卡丘的皮
    */
    .preview{
        height: 100%;
        display: flex;
        background: #FFDD33;
        justify-content: center;
        align-items: center;
    }
    .wrapper {
        width: 100%;
        height: 165px;
        position: relative;
    }
    /*
    *然后，我们画出皮卡丘的鼻子～
    */
    .nose {
        position: absolute;
        left: 50%;
        top: 28px;
        border: 12px solid;
        border-color: black transparent transparent;
        border-radius: 16px;
        margin-left: -12px;
    }
    /*
    *然后，我们画出皮卡丘的眼睛～
    */
    .eye {
        width: 50px;
        height: 50px;
        background: #2E2E2E;
        border-radius: 50%;
        border: 3px solid black;
        position: absolute;
    }
    /*
    *一个放左边～
    */
    .eye.left {
        left: 50%;
        margin-left: 90px;
    }
    /*
    *一个放右边～
    */
    .eye.right {
        right: 50%;
        margin-right: 90px;
    }
    /*
    *眼睛无神不可爱怎么办～
    */
    .eye::before {
        display: block;
        content: '';
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: white;
        position: absolute;
        left: 5px;
        border: 2px solid;
    }
    /*
    *眼睛搞定了！
    *
    *然后，我们画出皮卡丘的红脸蛋～
    */
    .face {
        width: 68px;
        height: 68px;
        background: #F10D1C;
        position: absolute;
        border-radius: 50%;
        border: 2px solid;
        top: 84px;
    }
    .face.left {
        left: 50%;
        margin-left: 116px;
    }
        .face.right {
        right: 50%;
        margin-right: 116px;
    }
    /*
    *然后，我们画出皮卡丘的上嘴唇～
    */
    .upperLip{
        width: 80px;
        height: 22px;
        background: #FFDD33;
        border: 2px solid black;
        border-top: none;
        top: 52px;
    }
    /*
    *一个放左边～
    */
    .upperLip.left {
        border-bottom-left-radius: 40px 22px; 
        border-right: none;
        transform: rotate(-17deg);
        position: absolute;
        right: 50%;
    }
    /*
    *一个放右边～
    */
    .upperLip.right {
        border-bottom-right-radius: 40px 22px;
        border-left: none;
        transform: rotate(17deg);
        position: absolute;
        left: 50%;
    }
    /*
    *然后，我们画出皮卡丘的嘴巴～
    */
    .wrapperlip{
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 300px;
        height: 115px;
        overflow: hidden;
        margin-left: -150px;
        margin-bottom: -10px;
    }
    .lowerLip{
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 140px;
        height: 1400px;
        background: #A61513;
        border-radius: 112px/500px;
        border:2px solid black;
        margin-left: -70px;
        overflow: hidden;
    }
    /*最后，让我们画出皮卡丘的小舌头～*/
    .lowerLip::after{
        content:'';
        position: absolute;
        bottom: -30px;
        left: 50%;
        margin-left: -45px;
        width: 90px;
        height: 120px;
        border-radius:40px;
        background: #FF5D62;
    }
    /*
    *好啦，皮卡丘就这样搞定啦～皮卡皮卡～
    *丘～
    *BGM听完再走吧～
    */
    `
    wirteCode('', code)
}.call()