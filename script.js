// Wait for the DOM content to be fully loaded before executing any JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element with the id 'generateBtn'
    var generateBtn = document.getElementById('generateBtn');
    // Add a click event listener to the 'generateBtn' button, which calls the generateMatches function
    generateBtn.addEventListener('click', generateMatches);

    // Function to generate matches between teams
    function generateMatches() {
        // Get an array of input elements with the class 'team-input' belonging to the first user
        var user1Teams = Array.from(document.querySelectorAll('.user-input:nth-of-type(1) .team-input'));
        // Get an array of input elements with the class 'team-input' belonging to the second user
        var user2Teams = Array.from(document.querySelectorAll('.user-input:nth-of-type(2) .team-input'));
        // Get the container element where the matches will be displayed
        var matchesContainer = document.getElementById('matchesContainer');
        // Initialize an empty string to store the HTML markup for matches
        var matchesHTML = '';

        // Shuffle the arrays containing the teams to randomize the order
        shuffleArray(user1Teams);
        shuffleArray(user2Teams);

        // Iterate through the teams and create match pairs
        for (var i = 0; i < user1Teams.length; i++) {
            // Concatenate the team names from both users to form a match pair
            var match = user1Teams[i].value + ' vs ' + user2Teams[i].value;
            // Append the match pair HTML markup to the matchesHTML string
            matchesHTML += '<div class="match">' + match + '</div>';
        }

        // Update the content of the matches container with the generated matches HTML markup
        matchesContainer.innerHTML = matchesHTML;
    }

    // Function to shuffle array elements
    function shuffleArray(array) {
        // Iterate through the array elements starting from the end
        for (var i = array.length - 1; i > 0; i--) {
            // Generate a random index within the range of the array length
            var j = Math.floor(Math.random() * (i + 1));
            // Swap the elements at index i and j
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
});
