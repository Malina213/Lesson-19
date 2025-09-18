const select = document.getElementById('selectСar')
const price = document.getElementById('price')
const brand = document.getElementById('name')
let dataCars = []

async function getData(){
  try{
    const responseCars = await fetch('./cars.json')
    return await responseCars.json()
  }catch(error){
    throw new Error(error)
  }
}
getData().then(data => {
  data.cars.forEach(car => {
    const option = document.createElement('option');
    option.value = car.model;   
    option.textContent = car.brand;
    select.append(option);
    dataCars.push(car)
  });
});
select.addEventListener('change', () => {
  const selectedValue = select.value;
  const car = dataCars.find(car => car.model === selectedValue);
  if (selectedValue === "") {
    brand.textContent = "Выберите тачку";
    price.textContent = "";
    return;
  }
  if (car) {
    brand.textContent = `Тачка: ${car.brand}`;
    price.textContent = `Цена: ${car.price}`;
  }
});