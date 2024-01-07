$(function(){
    today = new Date();          //現在の日付を取得
    month = today.getMonth()+1;  //取得した日付から月を取得

    /*
   クラス名sliderにスライドショーを適用（index02の13行目~17行目）
   slick.jsというプラグインを使用（index02の31行目でslick.jsを読み込み）
   slick.js公式サイト：https://kenwheeler.github.io/slick/
    */
    $('.slider').slick({ 
        fade: true,    // fedeオン
        speed: 1500,   // 画像切り替えにかかる時間（ミリ秒）
        autoplaySpeed: 3000,   // 自動スライド切り替え速度
        arrows: false,         // 矢印非表示
        autoplay: true,        // 自動再生
        slidesToShow: 1,       // スライド表示数
        infinite: true         // 無限リピート
    })

    if(document.URL.match(/index03/)){                      //index03を表示した際に起動
        const img = document.getElementById('flour-photo'); //IDがflour-photoの要素を取得（index03の13行目）
        //月によってidがflour-photoの表示する画像を変更
        if(month == 4 || month == 5 || month == 6 || month == 7 || month == 8  || month == 9 ){
            img.setAttribute('src','img/mukuge.jpg');
        }else{
            img.setAttribute('src','img/tubaki.jfif');
        }

        const title = document.getElementById('title');     //IDがtitleの要素を取得（index03の17行目）
        //月によってidがtitleの表示内容を変更
        if(month == 1 || month == 2 || month == 3){         
            title.textContent = '松壽千年緑';
        }else if(month == 4 || month == 5 || month == 6){
            title.textContent = '薫風自南来';
        }else if(month == 7 || month == 8 || month == 9){
            title.textContent = '日々是好日';
        }else if(month == 10 || month == 11 || month == 12){
            title.textContent = '看々臘月尽';
        }  
    }
    if(document.URL.match(/index04/)){                          //index04を表示した際に起動
        const title = document.getElementById('title');         //IDがtitleの要素を取得（index04の14行目）
        const sub_title = document.getElementById('sub-title'); //IDがsub-titleの要素を取得（index04の13行目）
        //月によってtitlとsub_titleeの表示内容を変更
        if(month == 1 || month == 2 || month == 3){         
            title.textContent = '松壽千年緑';
            sub_title.textContent = '冬の緑をたたえる松に、永遠の生命力をみる';
        }else if(month == 4 || month == 5 || month == 6){
            title.textContent = '薫風自南来';
            sub_title.textContent = '風が吹いて、無駄なものがすっかりなくなったような境地';
        }else if(month == 7 || month == 8 || month == 9){
            title.textContent = '日々是好日';
            sub_title.textContent = 'この一瞬一瞬を大切にせよ';
        }else if(month == 10 || month == 11 || month == 12){
            title.textContent = '看々臘月尽';
            sub_title.textContent = 'よくよく一日一日を大切にしなさい';
        }     
    }
});