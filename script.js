document.getElementById('InformationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    var isValid = true;
    var errorMessageElements = form.querySelectorAll('.required-field-text');
    var nextPage = document.getElementById('page-two');

    // Hide all error messages
    errorMessageElements.forEach(function(element) {
        element.style.display = 'none';
    });

    // Remove error class from all fields
    form.querySelectorAll('input').forEach(function(element) {
        element.classList.remove('error');
    });

    // Check each required field
    form.querySelectorAll('input[required]').forEach(function(element) {
        if (!element.value.trim()) {
            isValid = false;
            var errorElement = element.nextElementSibling;
            element.classList.add('error');
            if (errorElement) {
                errorElement.style.display = 'block';
            }
        }
    });

    // Show success message if form is valid
    if (isValid) {
        form.reset();
        successMessageElement.style.display = 'block';
        setTimeout(function() {
            successMessageElement.style.display = 'none';
        }, 5000);
    }
});


const NextStepOne=document.getElementById('to-step-two');
const NextStepTwo=document.getElementById('to-step-three');
const NextStepThree=document.getElementById('to-step-four');
const NextStepFour=document.getElementById('to-step-five');

const SectionOne=document.getElementById('personal-info-one');
const SectionTwo=document.getElementById('personal-info-two');
const SectionThree=document.getElementById('personal-info-three');
const SectionFour=document.getElementById('personal-info-four');

NextStepOne.addEventListener('click',function(){
    SectionOne.style.display="none";
    SectionTwo.style.display="block";
    SectionThree.style.display="none";
    SectionFour.style.display="none";
})

NextStepTwo.addEventListener('click',function(){
    SectionOne.style.display="none";
    SectionTwo.style.display="none";
    SectionThree.style.display="block";
    SectionFour.style.display="none";
})

NextStepThree.addEventListener('click',function(){
    SectionOne.style.display="none";
    SectionTwo.style.display="none";
    SectionThree.style.display="none";
    SectionFour.style.display="block";
})