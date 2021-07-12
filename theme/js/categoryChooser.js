function toggleMenu(){
  const navToggle = document.getElementsByClassName("toggle");
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }
}

// choosing which articles to make visible based on choice in cat modal
function chooseBoth() {
  window.selectedListItem = -1
  window.localStorage.setItem('categoryChoice', 'all');

  $('.technical').removeClass('hidden');
  $('.nonTechnical').removeClass('hidden');

  $('.technical').addClass('listItem');
  $('.nonTechnical').addClass('listItem');

  $('#chooseBoth').addClass('bg-yellow-500');
  $('#chooseTechnical').removeClass('bg-yellow-500');
  $('#chooseNonTechnical').removeClass('bg-yellow-500');

  $('#sideBarChooseNonTechnical').text("Non-Technical")
  $('#sideBarChooseTechnical').text("Technical")
  $('#sideBarChooseBoth').text(">All")

  $('#catModal').addClass('hidden');
}

function chooseTechnical(){
  window.selectedListItem = -1
  window.localStorage.setItem('categoryChoice', 'technical');

  $('.nonTechnical').not('.technical').addClass('hidden');
  $('.technical').removeClass('hidden');

  $('.technical').addClass('listItem');
  $('.nonTechnical').addClass('listItem');
  $('.nonTechnical').not('.technical').removeClass('listItem');

  $('#chooseBoth').removeClass('bg-yellow-500');
  $('#chooseTechnical').addClass('bg-yellow-500');
  $('#chooseNonTechnical').removeClass('bg-yellow-500');

  $('#sideBarChooseNonTechnical').text("Non-Technical")
  $('#sideBarChooseTechnical').text(">Technical")
  $('#sideBarChooseBoth').text("All")

  $('#catModal').addClass('hidden');
}

function chooseNonTechnical() {
  window.selectedListItem = -1
  window.localStorage.setItem('categoryChoice', 'nonTechnical');

  $('.nonTechnical').removeClass('hidden');
  $('.technical').removeClass('hidden');
  $('.technical').not('.nonTechnical').addClass('hidden');

  $('.nonTechnical').addClass('listItem');
  $('.technical').addClass('listItem');
  $('.technical').not('.nonTechnical').removeClass('listItem');

  $('#chooseBoth').removeClass('bg-yellow-500');
  $('#chooseTechnical').removeClass('bg-yellow-500');
  $('#chooseNonTechnical').addClass('bg-yellow-500');

  $('#sideBarChooseNonTechnical').text(">Non-Technical")
  $('#sideBarChooseTechnical').text("Technical")
  $('#sideBarChooseBoth').text("All")

  $('#catModal').addClass('hidden');
}

$( document ).ready(function() {

  $( "#sideBarChooseBoth" ).click(chooseBoth);
  $( "#sideBarChooseTechnical" ).click(chooseTechnical);
  $( "#sideBarChooseNonTechnical" ).click(chooseNonTechnical);

  // check if a category choice is present
  if (localStorage.getItem('categoryChoice') === "technical") {
    $('.nonTechnical').addClass('hidden');
    $('#chooseBoth').removeClass('bg-yellow-500');
    $('#chooseTechnical').addClass('bg-yellow-500');
    $('#chooseNonTechnical').removeClass('bg-yellow-500');
    chooseTechnical()

  } else if (localStorage.getItem('categoryChoice') === "nonTechnical") {
    $('.technical').addClass('hidden');
    $('#chooseBoth').removeClass('bg-yellow-500');
    $('#chooseTechnical').removeClass('bg-yellow-500');
    $('#chooseNonTechnical').addClass('bg-yellow-500');
    chooseNonTechnical()

  } else if (localStorage.getItem('categoryChoice') === "all") {
    $('#chooseBoth').addClass('bg-yellow-500');
    $('#chooseTechnical').removeClass('bg-yellow-500');
    $('#chooseNonTechnical').removeClass('bg-yellow-500');
    chooseBoth()
  }

  $( "#chooseBoth" ).click(chooseBoth);
  $( "#chooseTechnical" ).click(chooseTechnical);
  $( "#chooseNonTechnical" ).click(chooseNonTechnical);

  // hide cat modal if its clicked.
  // must be at bottom
  $( "#catModal" ).click(function() {
    $('#catModal').addClass('hidden');
    // toggle cat modal view if catModal icon is clicked
    if (window.hamburgerUsed === true) {
      toggleMenu()
      window.hamburgerUsed = false // reset
    };
  });

  // on small screens, collapse navbar into a menu
  document.getElementById("hamburger").onclick = toggleMenu
})

