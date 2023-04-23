const input = document.getElementById('myInput');
var listArr = [];

    input.addEventListener("keyup", function(e){
        if(e.keyCode === 13){
            let inValue = e.target.value;
            listArr.push(inValue.replace(/\s/g,''));
            var newTagLi = '';
            listArr.forEach(function(element, index){
                newTagLi += `<span>#${element}
                <i class="fa fa-times"> onclick="dlt(${index})"</i>
                </span>`;
            });
            document.querySelector('.tags').innerHTML = newTagLi;
            input.value = '';
        }
    });

    function dlt(index){
        listArr.splice(index, 1);
        var newTagLi = '';
            listArr.forEach((element,index) => {
                newTagLi += `<span>#${element}
                <i class="fa fa-times"> onclick="dlt(${index})"</i>
                </span>`; 
            })
            document.querySelector('.tags').innerHTML = newTagLi;
    }