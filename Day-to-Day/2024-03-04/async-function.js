async function demo1(){
    console.log("Type 1: async Normal function: demo1");
}
demo1();


let demo2 = async function() {
    console.log("Type 2: async Anonymous function: demo2");
}
demo2();


let demo3 = async () => {
    console.log("Type 3: async Arrow function: demo3");
}
demo3();

