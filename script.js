//your code here
let n = [2,1,2];

let map = new Map();

n.forEach(v => {
	if(!map.has(v)){
		map.set(v,1);
	}else{
		map.set(v,map.get(v)+1);
	}
})

for(let [key,value] of map){
	if(value > Math.floor(n.length/2)){
		console.log(key);
		break;
	}
}

