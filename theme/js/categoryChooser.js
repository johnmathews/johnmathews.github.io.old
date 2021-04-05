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

  $('.technical').removeClass('hidden');
  $('.nonTechnical').addClass('hidden');

  $('.technical').addClass('listItem');
  $('.nonTechnical').removeClass('listItem');

  $('#chooseBoth').removeClass('bg-yellow-500');
  $('#chooseTechnical').addClass('bg-yellow-500');
  $('#chooseNonTechnical').removeClass('bg-yellow-500');

  $('#sideBarChooseNonTechnical').text("Non-Technical")
  $('#sideBarChooseTechnical').text(">Technical")
  $('#sideBarChooseBoth').text("All")

  $('#catModal').addClass('hidden');
};

function chooseNonTechnical() {
  window.selectedListItem = -1
  window.localStorage.setItem('categoryChoice', 'nonTechnical');

  $('.technical').addClass('hidden');
  $('.nonTechnical').removeClass('hidden');

  $('.nonTechnical').addClass('listItem');
  $('.technical').removeClass('listItem');

  $('#chooseBoth').removeClass('bg-yellow-500');
  $('#chooseTechnical').removeClass('bg-yellow-500');
  $('#chooseNonTechnical').addClass('bg-yellow-500');

  $('#sideBarChooseNonTechnical').text(">Non-Technical")
  $('#sideBarChooseTechnical').text("Technical")
  $('#sideBarChooseBoth').text("All")

  $('#catModal').addClass('hidden');
}

$( document ).ready(function() {
  // make sure catChoosr is visible.
  // it can be hid on specific pages as required
  $( ".catChooser" ).removeClass('hidden')

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
    $('#catModal').toggleClass('hidden');
  });

  // toggle cat modal view if catChooser icon is clicked
  $( ".catChooser" ).click(function() {
    $('#catModal').toggleClass('hidden');
    if (window.hamburgerUsed === true) {
        toggleMenu()
        window.hamburgerUsed = false // reset
    };
  });

  // on small screens, collapse navbar into a menu
  document.getElementById("hamburger").onclick = function toggleMenu() {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
  };
})
