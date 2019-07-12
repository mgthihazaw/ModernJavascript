console.log("DOM File")

const body =document.querySelector('body')

 const styleBody = () => {
    body.style.background ="green";
}

 const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title)
};

const name ="Thihazaw"
export {styleBody ,addTitle ,name}