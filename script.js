document.addEventListener('DOMContentLoaded', function() {
    var generateBtn = document.getElementById('generateBtn');
    generateBtn.addEventListener('click', generateMatches);

    function generateMatches() {
        var user1Teams = Array.from(document.querySelectorAll('.user-input:nth-of-type(1) .team-input'));
        var user2Teams = Array.from(document.querySelectorAll('.user-input:nth-of-type(2) .team-input'));
        var matchesContainer = document.getElementById('matchesContainer');
        var matchesHTML = '';

        shuffleArray(user1Teams);
        shuffleArray(user2Teams);

        for (var i = 0; i < user1Teams.length; i++) {
            var match = user1Teams[i].value + ' vs ' + user2Teams[i].value;
            matchesHTML += '<div class="match">' + match + '</div>';
        }

        matchesContainer.innerHTML = matchesHTML;
    }

    // Function to shuffle array elements
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
});
