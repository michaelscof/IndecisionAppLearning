console.log('app.js is running');

const app = {
    title : 'Indecision App',
    subtitle : 'just another app',
    options:['one','two']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length>0 ? "Here are your options" : "No options"}</p>
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

const user = {
    name: 'Prem',
    age: 26,
    location:'Gurgaon'
}
const templateTwo = (
    <div>
        <h1>{user.name?user.name:"Anonymous"}</h1>
        {user.age>=18 && <p>Age : {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);
