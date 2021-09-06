const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

/*------------------KATAS 01-------------------------------*/    

function kata1(x) {
    let result = [];
        for (let i = 1; i <= x; i++){
            result.push (i)
        }
return result

}
window.document.write('Resultado Katas 1 -> ' + kata1(25))

/*------------------KATAS 02-------------------------------*/    

function kata2(x) {

    let result = [];
    
        for (let i = 0; i <= x; i++){
            result.push (x-i)
        }

return result

}
window.document.write('<br>'+'Resultado Katas 2 ->' + kata2(25))

/*------------------KATAS 03-------------------------------*/    

function kata3(x) {
    let result = [];

    for (let i = -1; i >= x; i--){
        result.push (i)
    }
return result

}
window.document.write('<br>' + 'Resultado Katas 3 ->' + kata3(-25))

/*------------------KATAS 04-------------------------------*/    

function kata4(x) {
    let result = [];

    for (let i = -25; i <= x; i++){
        result.push (i)
    }
return result

}
window.document.write('<br>' + 'Resultado Katas 4 -> ' + kata4(-1))

/*------------------KATAS 05-------------------------------*/    

function kata5(x) {
    let result = [];

    for (let i = 25; i >= x; i--){
        result.push (i)
    }
return result

}
window.document.write('<br>' + 'Resultado Katas 5 ->' +'<br>' + kata5(-25))

/*------------------KATAS 06-------------------------------*/    

function kata6(x) {
    let result = [];

    for (let i = 1; i <= x; i++){
        if (i % 3 === 0 ){
            result.push (i)
        }
    }
return result

}
window.document.write('<br>' + 'Resultado Katas 6 ->' + kata6(100))

/*------------------KATAS 07-------------------------------*/    

function kata7(x) {
    let result = [];

    for (let i = 1; i <= x; i++){
        if (i % 7 === 0 ){
            result.push (i)
        }
    }
return result

}
window.document.write('<br>' + 'Resultado Katas 7 ->' + kata7(100))

/*------------------KATAS 08-------------------------------*/    

function kata8(x) {
    let result = [];

    for (let i = 100; i >= x; i--){
        if (i % 7 === 0 ){
            result.push (i)
        }   else if (i % 3 === 0 ){
                result.push (i)
            }
    }
    return result
}
window.document.write('<br>' + 'Resultado Katas 8 ->' + kata8(1))

/*------------------KATAS 09-------------------------------*/    

function kata9(x) {
    let result = [];

    for (let i = 1; i <= x; i++){
        if (i % 5 === 0 && i % 2 === 1) {
            result.push (i)
        }
    }
return result
}
window.document.write('<br>' + 'Resultado Katas 9 ->' + kata9(100))

/*------------------KATAS 10-------------------------------*/    

function kata10() {
    
    let result = [];
    
        for (let i = 0; i < sampleArray.length; i++){
            result.push (sampleArray[i])
        }
    return result
}
window.window.document.write('<br>' + 'Resultado Katas 10 ->' + kata10(sampleArray))

/*------------------KATAS 11-------------------------------*/    

function kata11() {

    let result = [];
    
        for (let i = 0; i < sampleArray.length; i++){
           if (sampleArray[i] % 2 === 0){
                result.push (sampleArray[i])
           }
      
        }
        return result
}
window.document.write('<br>' + 'Resultado Katas 11 ->' + kata11(sampleArray))

/*------------------KATAS 12-------------------------------*/    

function kata12() {
    let result = [];
    
        for (let i = 0; i < sampleArray.length; i++){
           if (sampleArray[i] % 2 === 1){
                result.push (sampleArray[i])
           }
      
        }
        return result
}
window.document.write('<br>' + 'Resultado Katas 12 ->' + kata12(sampleArray))

/*------------------KATAS 13-------------------------------*/    

function kata13() {
    let result = [];
    
        for (let i = 0; i < sampleArray.length; i++){
           if (sampleArray[i] % 8 === 0){
                result.push (sampleArray[i])
           }
      
        }
        return result
}
window.document.write('<br>' + 'Resultado Katas 13 ->' + kata13(sampleArray))

/*------------------KATAS 14-------------------------------*/    

function kata14() {
    let result = [];
    
    for (let i = 0; i < sampleArray.length; i++){
        result.push (sampleArray[i] * sampleArray[i])
    }
    return result
}
window.document.write('<br>' + 'Resultado Katas 14 ->' + kata14(sampleArray))

/*------------------KATAS 15-------------------------------*/    

function kata15(x) {
    let result = 0;
    
    for (let i = 1; i <= x; i++){
        result = result + i
    }

return result

}
window.document.write('<br>' + 'Resultado Katas 15 ->' + kata15(20))

/*------------------KATAS 16-------------------------------*/    

function kata16() {
    let result = 0;
    for (let i = 0; i < sampleArray.length; i++){
        result = result + sampleArray[i]
    }
    return result
}
window.document.write('<br>' + 'Resultado Katas 16 ->' + kata16(sampleArray))

/*------------------KATAS 17-------------------------------*/    

function kata17() {
    let result = 1000;
    for (let i = 0; i < sampleArray.length; i++){
        if (result <= sampleArray[i]){
          result = result
        }else {
            result = sampleArray[i]
        }
    }
    return result
}
window.document.write('<br>' + 'Resultado Katas 17 ->' + kata17(sampleArray))

/*------------------KATAS 18-------------------------------*/    

function kata18() {
    let result = 0;
    for (let i = 0; i < sampleArray.length; i++){
        if (result <= sampleArray[i]){
          result = sampleArray[i]
        }
    }
    return result
}
window.document.write('<br>' + 'Resultado Katas 18 ->' + kata18(sampleArray))

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
