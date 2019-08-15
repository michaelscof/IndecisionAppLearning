console.log('app.js is running');

var app = {
    title : 'Indecision App',
    subtitle : 'just another app'
}
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>item 1</li>
            <li>item 2</li>
        </ol>
    </div>
    );

//template two
function getLocation(location){
    if(location){
        return <p>Location : {location}</p>
    }
}

var user = {
    name: 'Prem',
    age: 26,
    location:'Gurgaon'
}
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>{user.age}</p>
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo,appRoot);
