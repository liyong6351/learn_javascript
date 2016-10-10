log('test basic data type')
var data = "hello world";
desc_data(data);
var data = 3.1415;
desc_data(data);
var data = false;
desc_data(data);
log('test array')
var beatles = new Array(4);
beatles[0] = 'Join';
beatles[1] = 'Paul';
beatles[2] = 'George';
beatles[3] = 'Ringo';
beatles[4] = 'David ';
desc_data(beatles)
beatles = Array('1', '2', '3', '4');
desc_data(beatles)
log('test related array,means index is a descrption word not only digit like 1、2、3')
var lennon = Array();
lennon["name"] = "xinyang";
lennon["year"] = 2015;
lennon["lover"] = "yes";
var baby = Array();
baby['lover'] = lennon;
desc_data(baby["lover"]["name"]);

log('test object type')
var baby;
baby.name = 'xinyang';
baby.age = 1;
desc_data(baby.age)
var date = new Date();
desc_data(date)


function desc_data(data) {
    console.log('value of data=' + data + ' || data type is ' + typeof(data));
}

function log(message) {
    console.error(message);
}

alert(document.getElementsByTagName('h2')[0].getAttribute('id'))
document.getElementsByTagName('h2')[1].setAttribute('class', 'test');