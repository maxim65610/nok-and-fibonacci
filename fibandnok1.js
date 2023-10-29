let mem = new Array();
let fs = require('fs');
inText = fs.readFileSync('nok.splm')
inText = inText.toString();
mem = inText.split(/ |\r\n/);
mem.push('exit');
let ip =0;
while(mem[ip]!='exit')
    switch(mem[ip]){
        case 'set':
            mem[mem[ip+1]] = parseInt(mem[ip + 2]);
            ip+=3;
            break
        case 'nok':
            let max = Math.max(mem[mem[ip+1]], mem[mem[ip+2]]);
            let lcm = max;
            while (true) {
                if (lcm % mem[mem[ip+1]] == 0 && lcm % mem[mem[ip+2]] == 0) {
                    break;
                }
                lcm += max;
            }
            mem[mem[ip+3]] = lcm;
            ip+=4;
            break;
        case 'fib':
            function fibbonachi(n){
                    if(n<=1){
                        return n;
                    }
                    else{
                        return fibbonachi(n - 1) + fibbonachi(n - 2);
                    }
                }
                let n = mem[mem[ip + 1]];
                mem[mem[ip+2]] = fibbonachi(n);
                ip += 3;
        case 'output1':
            console.log(mem[mem[ip+1]])
            ip += 2;
            break;
}
