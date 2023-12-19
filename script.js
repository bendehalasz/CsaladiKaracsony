

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("container").addEventListener("keyup", function(event) {
        // Check if the key pressed is Enter (key code 13)
        if (event.key === "Enter") {
            // Trigger the form submission function
            checkCredentials();
        }
    });

    document.getElementById("drawn_person").addEventListener("click", function(event) {
        // Check if the key pressed is Enter (key code 13)
        document.getElementById("click_here").classList.add('hidden')
        document.getElementById("box-body").classList.add('box-body_hover')
    });

    //document.getElementById("box").addEventListener("click", () => toggleAnimation())
});

function toggleAnimation() {
    const boxBody = document.querySelector('.box-body');
    boxBody.classList.toggle('clicked');
}

function checkCredentials() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    var index = names.indexOf(name);

    if (index !== -1)
    {
        password_index = (index-3)%passwords.length
        if(password_index < 0)
        {
            password_index = passwords.length + password_index
        }
        if (password === passwords[password_index]) {

            // Hide the login form
            document.getElementById('container').style.display = 'none';
            profile_index = (index+2)%shuffled_names.length
            if(profile_index < 0)
            {
                profile_index = shuffled_names.length + profile_index
            }
            document.getElementById('drawn_person_name').innerHTML = shuffled_names[profile_index]
            document.getElementById('drawn_person').classList.remove('hidden');
    
        }
        else
        {
            document.getElementById('result').innerHTML = 'Hoppá, nem sikerült bejelentkezni!';
            document.getElementById('result').classList.remove('hidden');
            document.getElementById('name').style.borderColor = "#b31919";
            document.getElementById('password').style.borderColor = "#b31919";
        }

    }
    else {
        document.getElementById('result').innerHTML = 'Hoppá, nem sikerült bejelentkezni!';
        document.getElementById('result').classList.remove('hidden');
        document.getElementById('name').style.borderColor = "#b31919";
        document.getElementById('password').style.borderColor = "#b31919";
    }

    
}

var names = ['Juli', 'Huba', 'Julcsi', 'Peti', 'Bandi', 'Csabi', 'Kis Huba', 'Trixi', 'Gáspár Hanna', 'Nagy Hella', 'Ábel', 'Halász Hanna', 'Kis Hella', 'Ati', 'Timó', 'Bebe', ]
var passwords = ['Télapó80', 'Szánkó98', 'Gyertya88', 'Mézeskalács95', 'Gyertya48', 'Hógömb55', 'Gyertya95', 'Karácsonyi84', 'Gyertya26', 'Szánkó42', 'Karácsonyfa89', 'Ajándékdoboz82', 'Hógömb72', 'Télapó77', 'Szánkó75', 'Karácsonyfa46', ]
var shuffled_names =  ['Gáspár Hanna', 'Halász Hanna', 'Huba', 'Julcsi', 'Ábel', 'Nagy Hella', 'Kis Huba', 'Bebe', 'Bandi', 'Timó', 'Csabi', 'Ati', 'Peti', 'Kis Hella', 'Juli', 'Trixi']