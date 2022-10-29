let Task = function (name, age,phone,mark) {
	this.name = name;
	this.age=age;
    this.phone=phone;
    this.mark=mark
};

let TaskBuilder = function () {
	let name,age,phone,mark;

	this.setName = function (name) {
		this.name = name;
		return this;
	};
	this.setAge = function (age) {
		this.age=age;
		return this;
	};
    this.setPhone = function (phone) {
		this.phone=phone;
		return this;
	};
    this.setMark = function (mark) {
		this.mark=mark;
		return this;
	};

	this.build = function () {
		return new Task(this.name, this.age,this.phone,this.mark);
	};
	return this;
};

let task = new TaskBuilder();
let object = task
	.setName("abu")
	.setAge(22)
    .setPhone(1234)
    .setMark(50)
	.build();
    
console.log(object);
let task2 = new TaskBuilder();
let object2 = task
	.setName("ali")
	.setAge(22)
    .setPhone(123334)
    .setMark(45)
	.build();
    console.log(object2);
    let task3 = new TaskBuilder();
let object3 = task
	.setName("krish")
	.setAge(21)
    .setPhone(12284)
    .setMark(35)
	.build();
    console.log(object3);
    let task4 = new TaskBuilder();
let object4 = task
	.setName("bah")
	.setAge(22)
    .setPhone(123334)
    .setMark(43)
	.build();
    console.log(object4);
    let task5 = new TaskBuilder();
let object5 = task
	.setName("nuu")
	.setAge(22)
    .setPhone(123334)
    .setMark(45)
	.build();
    console.log(object5);