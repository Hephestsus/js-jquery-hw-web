let a = document.createElement("h1");
a.id = "a";
a.innerText = "My site";

let b = document.createElement("p");
b.id = "b";
b.innerText = "College: Ala-too business and IT";

let e = document.createElement("p");
e.id = "e";
e.innerText = "Group / Specialty: CSC-24 (Computer systems and complex)";

let c = document.createElement("button");
c.id = "c";
c.innerText = "Click";

let d = document.createElement("div");
d.id = "d";
d.innerText = "Info about me: My name is Aidarbek I am 17 y o";

document.body.appendChild(a);
document.body.appendChild(b);
document.body.appendChild(e);
document.body.appendChild(c);
document.body.appendChild(d);

function f() {
    d.style.backgroundColor = "pink";
    d.style.padding = "15px";
}

c.onclick = v;