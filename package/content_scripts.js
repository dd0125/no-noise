const gElements = document.querySelectorAll('#search #rso > .g');

// console.log(gElements);

const ignoreSiteUrlArray = [
    'https://www.sejuku.net/'
];

let ignoreCount = 0;
for(let gElement of gElements){
    const aElement = gElement.querySelector('.rc > .r > a');
    const href = aElement.getAttribute('href');

    let isIgnore = false;
    for(let ignoreSiteUrl of ignoreSiteUrlArray){
        if(href.startsWith(ignoreSiteUrl)) {
            isIgnore = true;
            break;
        }
    }

    if(isIgnore){
        gElement.style = "display: none";
        ignoreCount++;
    }

}

// 結果表示
if(ignoreCount > 0){
    console.log(`${ignoreCount}件の検索結果を非表示にしました`);
}
