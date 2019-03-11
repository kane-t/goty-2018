// Get querystring
var urlParams = null;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
    urlParams[decode(match[1])] = decode(match[2]);
})();

function getToken() { urlParams.token || window.localStorage.getItem('voting_token'); }

// Setup page
function setupPage() {
    // First, look for a valid token.  If one exists, try fetching the votes.
    const token = getToken();
    if(token) {
        displayLoadScreen();
        fetchVotes(token);
    
    } else {
        // Otherwise, prompt the user to log in
        displayLoginScreen();
    }
}

function displayLoadScreen() {
    $('#loadingdiv').css('display', 'block');

    $('#votingdiv').css('display', 'none');
    $('#logindiv').css('display', 'none');
}

function displayLoginScreen() {
    $('#logindiv').css('display', 'block');

    $('#loadingdiv').css('display', 'none');
    $('#votingdiv').css('display', 'none');
}

function displayVoteScreen() {
    $('#votingdiv').css('display', 'block');

    $('#loadingdiv').css('display', 'none');
    $('#logindiv').css('display', 'none');
}

function joinServer() {
    window.open('https://discord.gg/XDjpzGD', '_blank');
}

function loginWithDiscord() {
    document.getElementById('discordLoginButton').disabled = true;
    const opts = 'width=976,height=600,menubar=no,toolbar=no';
    const authurl = 'https://discordapp.com/api/oauth2/authorize?client_id=389838532954554379&redirect_uri=https%3A%2F%2Fus-central1-goatbot-901b2.cloudfunctions.net%2Fuser_auth_redirect&response_type=code&scope=identify%20guilds';
    const authwindow = window.open(authurl, '_blank', opts);
    const windowCheck = setInterval(() => {
        if(authwindow.closed) {
            clearInterval(windowCheck);
            finishLogin();
        }
    }, 500);
}

function finishLogin() {
    // Retrieve and remove the auth result (if any)
    const resultString = window.localStorage.getItem('auth_result');
    if(resultString) { window.localStorage.removeItem('auth_result'); }

    // Re-enable the login button
    document.getElementById('discordLoginButton').disabled = false;

    // If there was no result string, just fail now.  Otherwise, parse it into an object
    if(!resultString) { return; }
    const result = JSON.parse(resultString);
    
    if(result.success && result.token) {
        // If a successful result, store token
        window.localStorage.setItem('voting_token', result.token);
        // Put token in URL
        let newUrl = window.location.href;
        newUrl = newUrl.substring(0, newUrl.indexOf('?')) + '?token=' + result.token;
        window.history.replaceState('', document.title, newUrl);
        // Fetch votes
        fetchVotes(result.token);

    } else {
        // Otherwise, in case of failure, report error
        document.getElementById('loginError').innerText = result.error || 'Unknown error when trying to log in!';

    }
}

function getVotes() {
    // Get form elements
    const form = document.getElementById("votes");
    const voteFields = [ form.elements["vote1"], form.elements["vote2"], form.elements["vote3"], form.elements["vote4"] ];
    // Start with GOTY vote
    let result = [ form.elements["vote0"].value ];
    // Strip out empty runners up
    voteFields.forEach(x => { if(x.value !== undefined && x.value !== null && x.value !== '') { result.push(x.value); } });
    return result;
}

function showVotes(votes) {
    const form = document.getElementById("votes");
    const voteFields = [ form.elements["vote0"], form.elements["vote1"], form.elements["vote2"], form.elements["vote3"], form.elements["vote4"] ];
    for(let i = 0; i < voteFields.length; i++) {
        // Replace empty spaces and nulls with empty strings
        voteFields[i].value = (votes[i] === undefined || votes[i] === null) ? '' : votes[i];
    }
}

function fetchVotes(token) {
    displayLoadScreen();
    document.getElementById('updateVotesButton').disabled = true;
    const result = document.getElementById('loadError');
    if(!token) { 
        result.innerHTML = 'Tried to fetch votes without a valid token.  <a onclick="displayLoginScreen()">Click here to try logging in</a>.'; 
    }

    // Submit request
    var formData = { 'token': urlParams.token };
    $.ajax({
        type: 'GET',
        url: 'https://us-central1-goatbot-901b2.cloudfunctions.net/get_votes',
        data: formData,
        dataType: 'json',
        encode: true,
        crossDomain: true
    }).done(function(data) {
        let success = data.success;
        if(success) {
            let votes = data.result.votes || [];
            showVotes(votes);
            result.innerHTML = "";
            document.getElementById('updateVotesButton').disabled = false;
            displayVoteScreen();
        } else {
            result.innerHTML = "Error fetching votes: " + (data.error || 'unknown error!');
        }
        
    }).fail(function(data) {
        result.innerHTML = "Error fetching votes: " + (data.error || 'unknown error!');
    });
}

function submitForm() {
    const token = getToken();
    // Get form elements
    const form = document.getElementById("votes");
    const submit = document.getElementById('updateVotesButton');
    const result = document.getElementById('votesError');
    const votes = getVotes();

    // Disable submit button
    result.innerHTML = "Please wait...";
    submit.disabled = true;
    // Validate data
    // LOL TOO LAZY
    // Submit request
    var formData = {
        'token': urlParams.token,
        'votes': votes
    };

    $.ajax({
        type: 'GET',
        url: 'https://us-central1-goatbot-901b2.cloudfunctions.net/update_votes',
        data: formData,
        dataType: 'json',
        encode: true,
        crossDomain: true
    }).done(function(data) {
        let success = data.success;
        if(success) {
            result.innerHTML = "Success!  Votes updated!";
        } else {
            let error = data.error;
            result.innerHTML = "Error!";
            if(error) { resultElement.innerHTML += ("  " + error); }
        }
    }).always(function() {
        submit.disabled = false;                                        
    });
}