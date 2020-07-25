const toISOStringLocal = (d) => {
function z(n){return (n<10?'0':'') + n}
return d.getFullYear() + '-' + z(d.getMonth()+1) + '-' +
       z(d.getDate()) + 'T' + z(d.getHours()) + ':' +
       z(d.getMinutes()) + ':' + z(d.getSeconds())
}

export  {toISOStringLocal};