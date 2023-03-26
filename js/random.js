const loaduser = () =>{
fetch('https://randomuser.me/api/?gender=female')
.then(res => res.json())
.then(data =>dispalayUser(data))
}
const dispalayUser = user =>{
    const gendername = document.getElementById('name')
    const genderTag = document.getElementById('gender')
    gendername.innerHTML =user.results[0].name.first
    genderTag.innerHTML = user.results[0].gender;
    

}
loaduser()
