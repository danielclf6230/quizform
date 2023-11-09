// The answers variables is a global variable that holds JSON object with the answer (the value) for each input name (the key)
var answers = {};

function loadQuestions() {
    // Loads the JSON file
    fetch('json/WebQuiz.json')
	// Changing to another JSON file should work the same.
    // fetch('json/JavaQuiz.json')
        // Converts response to a JSON type.
        .then((response) => response.json())
		// The questions variable holds the JSON object.
        .then((questions) => {
            // Create html variable that holds form tag as a string.

            // Create number variable that holds current question number.

            // Set the answers variable to empty JSON object.

            // Loop through each question in questions.
            
                // Generate HTML (as a string) that will display the question number and question.
                

                // Create inputNames variable that holds the name for all radio button inputs.

                // Generate radio button for each choice (possibly using a loop)

                    // Create inputId variable that holds unique ID for input.

                    /**
                     * Generate HTML (as a string) that will display the radio button and possible answer.
                     * The input name must be the same as all other choices for the question.
                     * The input ID must be unique (and different than the input name).
                     * The input value must be set to the choice letter ('a', 'b', 'c', etc.)
                     */
                
                // Close HTML tags for question.

                // Associate the correct answer with the input name in the answers variable.

                // Increment question number.

            // Add button tag to html variable.

            // Close the form tag in html variable.

            // Populate HTML for 'questions' element.

            // Attach the gradeQuestions function to the 'onsubmit' event for the form.
        });
}

function gradeQuestions(e) {
    e.preventDefault();

    // Create variables that keep track of correct and total # of questions.

    // Loop through each entry in answers.

        // Get expected answer (the value) from answers.

        // Get what the user selected (using the answers key)

        // Check if the expected answer is the actual answer.

            // Increment correct if expected and actual answers match.

        /**
         * Increment total number of questions.
         */

    /**
     * Generate HTML that displays the score.
     * The HTML must be added to a seperate element.
     * Setting the HTML for the 'questions' element will cause the 'onsubmit' event to be detached from the gradeQuestions function.
     */

}

loadQuestions();