let count = 1;
function getValue(id){
    const target = document.getElementById(id);
    const valueString = target.value;
    target.value = '';
    if(valueString === ''){
        return 0;
    }
    else if (isNaN(valueString)){
        return -1;
    }
    const value = parseFloat(valueString);
    if(value < 0){
        return -2;
    }
    return value;
}
function addToCalculationArea(name, area){
    const fullAreaContent = document.createElement('li');
    fullAreaContent.innerHTML = `<li  class="flex justify-between gap-3 my-2 mx-4">
                        <div>
                            <span>${name}</span>
                        </div>
                        <div>
                            <span>${area}</span>
                            <span>cm<sup>2</sup></span>
                        </div>
                    </li>`;
    document.getElementById('shown-area').appendChild(fullAreaContent);
}
