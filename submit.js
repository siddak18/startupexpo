//README submit.js
//must include these via script tags in <head> tags of all the pages
// <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
// <script src="https://www.gstatic.com/firebasejs/5.10.0/firebase.js"></script>
//Perform mandatory tests after injecting this script

var config = {
    apiKey: "AIzaSyDsxXUlVdImrkzZgN1hA9fwD-GWGHrk0Mw",
    authDomain: "ecell-f69fd.firebaseapp.com",
    databaseURL: "https://ecell-f69fd-default-rtdb.firebaseio.com",
    projectId: "ecell-f69fd",
    storageBucket: "ecell-f69fd.appspot.com",
    messagingSenderId: "742246625764",
    appId: "1:742246625764:web:9d029cdf99989fb3f9d7f1",
    measurementId: "G-ER9DWJR9SF"
};
firebase.initializeApp(config);

//Instructions/Requirement/README
//Expo registration form ID = expoRegistration
// its founder field id = founder
// its Profile field id = Profile
// its about field id = aboutcom
// its year field id = year
// its Headquarter field id = Headquarter
// its Website field id = Website
// its employees field id = employees
// its Valuation field id = Valuation
// its Revenue field id = Revenue
// its profitable field id = profitable
// its contact field id = contact
        document
            .getElementById('expoRegistration')
            .addEventListener('submit', formSubmit);


        async function formSubmit(e) {
            console.log("submit",e);
            e.preventDefault();
        
            // Get Values from the DOM
            let data =
            {
                founder: document.querySelector('#founder').value,
                Profile: document.querySelector('#Profile').value,
                about: document.querySelector('#aboutcom').value,
                year: document.querySelector('#year').value,
                Headquarter: document.querySelector('#Headquarter').value,
                Website: document.querySelector('#Website').value,
                employees: document.querySelector('#employees').value,
                Valuation: document.querySelector('#Valuation').value,
                Revenue: document.querySelector('#Revenue').value,
                profitable: document.querySelector('#profitable').value,
                contact: document.querySelector('#contact').value
            }
            console.log(data);

            //send message values
            const res = await firebase.database().ref('StartupRegistration').push().set(data);

            console.log(res);

            swal({title: "Registered", text: "You are successfully registered!!", type: 
            "success"}).then(function(){ 
            location.reload();
            }
            );

            //Form Reset After Submission
            document.getElementById('expoRegistration').reset();
        }


//Instructions/Requirement/README
//footer write to us form ID = fotform
//its name field ID = foot-name
//its email field ID = foot-email
//its message field ID = foot-message
        document
            .getElementById('fotform')
            .addEventListener('submit', footerFormSubmit);


        async function footerFormSubmit(e) {
            console.log("submit",e);
            e.preventDefault();
            // Get Values from the DOM
            let data =
            {
                fullname: document.querySelector('#foot-name').value,
                email: document.querySelector('#foot-email').value,
                message: document.querySelector('#foot-message').value,
            }
            console.log(data);

            //send message values
            const res = await firebase.database().ref('WriteToUs').push().set(data);

            console.log(res);

            swal({title: "Thanks", text: "Feedback Received!", type: 
        "success"}).then(function(){ 
        location.reload();
        }
        );

            //Form Reset After Submission
            document
            .getElementById('fotform').reset();
        }

//Instructions/Requirement/README
//footer subscribe newsletter form ID = subsform
//its email field ID = subs-email
        document
            .getElementById('subsform')
            .addEventListener('submit', footerSubsFormSubmit);


        async function footerSubsFormSubmit(e) {
            console.log("submit",e);
            e.preventDefault();
            // Get Values from the DOM
            let data =
            {
                email: document.querySelector('#subs-email').value,
            }
            console.log(data);

            //send message values
            const res = await firebase.database().ref('NewsletterBox').push().set(data);

            console.log(res);

            swal({title: "Thanks", text: "You're Subscribed!!", type: 
        "success"}).then(function(){ 
        location.reload();
        }
        );

            //Form Reset After Submission
            document
            .getElementById('subsform').reset();
        }