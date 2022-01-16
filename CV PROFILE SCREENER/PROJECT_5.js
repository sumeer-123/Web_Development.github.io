console.log('HELLO SUMEER')
// DATA is an array which contains information about candidates
const data = [
    {
        Uname: 'Ajit Kumar',
        Age: 35,
        City : 'Gujrat',
        Language: 'Java',
        Framework: 'Node-JS',
        Image: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    {
        Uname: 'George K. Williams',
        Age: 35,
        City : 'United Kingdom',
        Language: 'C,C#,Python',
        Framework: 'PHP',
        Image: 'https://randomuser.me/api/portraits/men/33.jpg',
    },
    {
        Uname: 'Maeve',
        Age: 26,
        City : 'America',
        Language: 'Java,Python',
        Framework: 'Node-JS,PHP',
        Image: 'https://randomuser.me/api/portraits/women/55.jpg',
    },
    {
        Uname: 'Ruby',
        Age: 35,
        City : 'Spain',
        Language: 'Java',
        Framework: 'Node-JS',
        Image: 'https://randomuser.me/api/portraits/women/74.jpg',
    },
    {
        Uname: 'Karan Singh',
        Age: 25,
        City : 'UttarPradesh',
        Language: 'HTML,JavaScript',
        Framework: 'Node-JS',
        Image: 'https://randomuser.me/api/portraits/men/66.jpg',
    },
    {
        Uname: 'Rajat',
        Age: 30,
        City : 'Jaipur',
        Language: 'Python',
        Framework: 'PHP',
        Image: 'https://randomuser.me/api/portraits/men/99.jpg',
    },
    { 
        Uname : 'Gagandeep Singh',
        Age : 40,
        City : 'Punjab',
        Language : 'Kotlin',
        Framework : 'React-Js',
        Image  : 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    { 
        Uname : 'Swati Sharma',
        Age : 26,
        City : 'Delhi',
        Language : 'JavaScript',
        Framework : 'React-JS',
        Image  : 'https://randomuser.me/api/portraits/women/75.jpg',
    },
    { 
        Uname : 'Nairobi Williams',
        Age : 28,
        City : 'Los Angels',
        Language : 'C++',
        Framework : 'Node-JS',
        Image  : 'https://randomuser.me/api/portraits/women/65.jpg',
    },
]

// CV ITERATOR
function cvIterator(profiles){
    let nextIndex = 0;
    return{
        next : function(){
            return nextIndex<profiles.length ?
            {value : profiles[nextIndex++],done : false} :
            {done : true}
        }
    };
}
const candidates = cvIterator(data);
nextCV(); //which shows the first cv without clicking next button

// BUTTON LISTENER FOR NEXT BUTTON
const next = document.getElementById('next')
next.addEventListener('click',nextCV);

function nextCV(){
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image')
    let profile = document.getElementById('profile')

    if(currentCandidate != undefined){
    image.innerHTML = `<img src ='${currentCandidate.Image}'>`;
    profile.innerHTML= `<ul class="list-group">
    <li class="list-group-item list-group-item-primary">NAME : ${currentCandidate.Uname}</li>
    <li class="list-group-item list-group-item-secondary">AGE : ${currentCandidate.Age}</li>
    <li class="list-group-item list-group-item-danger">FROM : ${currentCandidate.City}</li>
    <li class="list-group-item list-group-item-success">LANGUAGE EXPERT : ${currentCandidate.Language}</li>
    <li class="list-group-item list-group-item-danger">FRAMEWORK EXPERT :  ${currentCandidate.Framework}</li>
  </ul>`;
}
else{
    alert('END OF ALL APPLICTIONS');
    window.location.reload()
}
}