/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i=0 , write=0;
    
    while(i < chars.length){
        let char = chars[i];
        let count  = 0;
        while(i<chars.length && chars[i]===char){
            count++;
            i++;
        }
        chars[write++] = char;
        if (count > 1) {
            for (let digit of String(count)) {
                chars[write++] = digit;
            }
        }
    }    
    return write;   
};