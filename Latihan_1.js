function spellout(number) {
    number = Math.floor(Math.abs(number));

    var letnum = [
        '','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan','Sepuluh','Sebelas'];
    
        var devide = 0;
        var said = '';

        if (number < 12){
            said = ' ' + letnum[number];
        } else if (number < 20) {
            said = spellout(Math.floor(number - 10)) + ' Belas';        
        }else if (number < 100) {
            devide = Math.floor(number / 10);
            said = spellout(devide) + ' Puluh' + spellout(number % 10);
        }else if (number < 200) {
            said = ' Seratus' + spellout(number - 100);
        } else if (number < 1000) {
            devide = Math.floor(number / 100);
            said = spellout(devide) + ' Ratus' + spellout(number % 100);
        } else if (number < 2000) {
            said = ' Seribu' + spellout(number - 1000);
        } else if (number < 1000000) {
            devide = Math.floor(number / 1000);
            said = spellout(devide) + ' Ribu' + spellout(number % 1000);
        } else if (number < 1000000000) {
            devide = Math.floor(number / 1000000);
            said = spellout(devide) + ' Juta' + spellout(number % 1000000);
        } else if (number < 1000000000000) {
            devide = Math.floor(number / 1000000000);
            said = spellout(devide) + ' Miliar' + spellout(number % 1000000000);
        } else if (number < 1000000000000000) {
            devide = Math.floor(number / 1000000000000);
            said = spellout(number / 1000000000000) + ' Triliun' + spellout(number % 1000000000000);
        }
         
        return said;
    }


console.log(spellout(1000));
