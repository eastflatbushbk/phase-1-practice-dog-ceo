console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded',()=>{
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(function(response){ return response.json() })
    .then(function(images){
        const loc = document.querySelector('div')
        images.message.forEach(Image=>{
        const img = document.createElement('img')
        loc.appendChild(img) 
        img.src = Image
        })
    })
    
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
    .then(function(response){ return response.json() })
    .then(function(images){

        let preRenderedDogs = []
        let renderedDogs = []
        let imgMessage = images.message
        for(item in imgMessage) {
            preRenderedDogs.push(item)
        }

        dogList(preRenderedDogs)
       
        breedDropDown.addEventListener('change', function(e){
                while(dogBreeds.firstChild){
                    dogBreeds.removeChild(dogBreeds.firstChild)
                }
                renderedDogs = preRenderedDogs.filter(el => el[0] === e.target.value)
            dogList(renderedDogs)
            }
        )
            function dogList(list){
                for(element of list){
                    const li = document.createElement('li')
                    dogBreeds.appendChild(li)
                    li.className = "each-dog"
                    li.innerHTML = element 
                    let eachDog = document.querySelectorAll([".each-dog"])
                    eachDog.forEach(dog => dog.addEventListener('click', function(e){
                        e.target.style.color = 'blue'
                    }))
                    
                } 
            }    
        })
        let dogBreeds = document.querySelector('ul')
       let breedDropDown = document.querySelector(["#breed-dropdown"])
    }) 