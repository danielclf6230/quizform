// The answers variables is a global variable that holds JSON object with the answer (the value) for each input name (the key)
var answers = {};

document.myform.datasetButton.onclick = async function (e){
    e.preventDefault();

    const datasetEl = document.myform.dataset;
    const dataset = datasetEl.value;
    results.innerHTML = "";


    if(dataset === 'javaQuiz'){
        const response = await fetch('json/JavaQuiz.json');
        const questionAry =  await response.json();
        let questions = document.getElementById('questions');
        questions.innerHTML = '';
        let number = 1;

        for(const question of questionAry){
            questions.innerHTML += 'Question ' + number + '<br><br>'

            questions.innerHTML += question.question + "<br></br>"
            questions.innerHTML += `<input class="form-check-input" type="radio" name="inputNames${number}" id="${number}a" value="a">`
            questions.innerHTML += `<label class="form-check-label">A) ${question.options.a}</label></br>`
            
            questions.innerHTML += `<input class="form-check-input" type="radio" name="inputNames${number}" id="${number}b" value="b">`
            questions.innerHTML += `<label class="form-check-label">B) ${question.options.b}</label></br>`            
            
            questions.innerHTML += `<input class="form-check-input" type="radio" name="inputNames${number}" id="${number}c" value="c">`
            questions.innerHTML += `<label class="form-check-label">C) ${question.options.c}</label></br>`
            
            questions.innerHTML += `<input class="form-check-input" type="radio" name="inputNames${number}" id="${number}d" value="d">`
            questions.innerHTML += `<label class="form-check-label">D) ${question.options.d}</label></br>`

            questions.innerHTML += '</br></br>'
            number++
        }
        grade.style.display = 'inline';
    }else if(dataset === 'webQuiz'){
        const response = await fetch('json/WebQuiz.json');
        const questionAry =  await response.json();
        let questions = document.getElementById('questions');
        questions.innerHTML = '';
        let number = 1;

        for(const question of questionAry){
            questions.innerHTML += 'Question ' + number + '<br><br>'

            questions.innerHTML += question.question + "<br></br>"
            questions.innerHTML += `<input class="form-check-input" type="radio" name="inputNames${number}" id="${number}a" value="a">`
            questions.innerHTML += `<label class="form-check-label">A) ${question.options.a}</label></br>`
            
            questions.innerHTML += `<input class="form-check-input" type="radio" name="inputNames${number}" id="${number}b" value="b">`
            questions.innerHTML += `<label class="form-check-label">B) ${question.options.b}</label></br>`            
            
            questions.innerHTML += `<input class="form-check-input" type="radio" name="inputNames${number}" id="${number}c" value="c">`
            questions.innerHTML += `<label class="form-check-label">C) ${question.options.c}</label></br>`
            
            questions.innerHTML += `<input class="form-check-input" type="radio" name="inputNames${number}" id="${number}d" value="d">`
            questions.innerHTML += `<label class="form-check-label">D) ${question.options.d}</label></br>`

            questions.innerHTML += '</br></br>'
            number++
        }
        grade.style.display = 'inline';
    }

}


document.myform.onsubmit = async function(e){
    e.preventDefault();

    const datasetEl = document.myform.dataset;
    const dataset = datasetEl.value;

    let total = 0;
    let correct = 0;
    let number = 1;
    results.innerHTML = "";

    if(dataset === 'javaQuiz'){
        const response = await fetch('json/JavaQuiz.json');
        const questionAry =  await response.json();

        for(const question of questionAry){
            if(document.getElementById(number+question.correct).checked){
                correct++;
            }
            total++;
            number++;
        }
        results.innerHTML += `Grade ${correct}/5`

    }else if(dataset === 'webQuiz'){
        const response = await fetch('json/WebQuiz.json');
        const questionAry =  await response.json();

        for(const question of questionAry){
            if(document.getElementById(number+question.correct).checked){
                correct++;
            }
            total++;
            number++;
        }
        results.innerHTML += `Grade ${correct}/5`
    }


}