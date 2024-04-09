function obj1 (){
    
}



obj1.prototype.get_set_gen = function() {

    for (let i in this) {
        let val = this[i];
        if (typeof this[i] !== "function") {

            Object.defineProperty(this, i, {
                get: function() {
                    return val;
                },
                set: function(value) {
                    val = value;
                },
            });

        }

    }
}

obj1.prototype.display = function() {
    return 0;
}

obj1.get_set_gen();
obj1.name = "yoyo";
console.log(obj1);

const obj_call = {
    name: "youssef",
    age: 30,
};

obj1.get_set_gen.call(obj_call);
obj_call.name = "kpkplpl";
console.log(obj_call);













