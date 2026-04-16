$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
   $('.herding-button').click(clickedHerdingButton);
   $('.sleeping-button').click(clickedSleepingButton);
   $('.hide-button').click(clickedHideButton);
   $('.show-button').click(clickedShowButton);



  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Bella", weight:10, happiness:15, herding:10};

  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.happiness+=5
      // Increase pet weight
      pet_info.weight+=5
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info.happiness+=5
      // Decrease pet weight
      pet_info.weight-=5
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info.happiness-=5
      // Decrease pet weight
      pet_info.weight-=5
      checkAndUpdatePetInfoInHtml();
    }

  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    function clickedHerdingButton() {
              // Increase herding ability
    let sound= document.getElementById("herding audio").play()// added barking sound
              pet_info.herding+=5
              checkAndUpdatePetInfoInHtml();
            }
            function checkAndUpdatePetInfoInHtml() {
                  checkWeightAndHappinessBeforeUpdating();
                  updatePetInfoInHtml();
                }
    function clickedSleepingButton() {
                  // Increase herding ability
                  pet_info.herding-=5
                  checkAndUpdatePetInfoInHtml();
                }
                function clickedHideButton() {
                  $('.pet-image-container').hide();
                  //i used hide button to make  it possible to make the image dissapear
                }
                function clickedShowButton() {
                                  $('.pet-image-container').show();
                                }

                function checkAndUpdatePetInfoInHtml() {
                                  checkWeightAndHappinessBeforeUpdating();
                                  updatePetInfoInHtml();
                                }
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if(pet_info.happiness<0){
      pet_info.happiness=0;
      }
      if(pet_info.weight<1){
      pet_info.weight=1
      // I made the weight be at least 1 as i dont think anything can weigh nothing so wouldnt make sense
    }
    if(pet_info.herding<0){
    pet_info.herding=0
    }
    document.querySelector(".name").innerHTML = pet_info.name;
    document.querySelector(".weight").innerHTML = pet_info.weight;
    document.querySelector(".happiness").innerHTML = pet_info.happiness;
    document.querySelector(".herding").innerHTML = pet_info.herding;

    const tooLow = pet_info.weight <= 1 || pet_info.happiness <= 0;
    $('.exercise-button').toggle(!tooLow);
    //I used the toggle method to get rid of exercise button if weight too low and/or happiness
    }

    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.herding').text(pet_info['herding']);


    }
  