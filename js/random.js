const loaduser = () =>{
fetch('https://randomuser.me/api/?gender=female')
.then(res => res.json())
.then(data =>dispalayUser(data))
}
const dispalayUser = user =>{
    const gendername = document.getElementById('name')
    const genderTag = document.getElementById('gender')
    document.getElementById('city').innerHTML =user.results[0].location.city
    document.getElementById('sa').innerHTML =user.results[0].location.state

    gendername.innerHTML =user.results[0].name.first
    genderTag.innerHTML = user.results[0].gender;
    

}
loaduser()
