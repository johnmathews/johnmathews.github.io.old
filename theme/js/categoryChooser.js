$( document ).ready(function() {
    // show catChoosr on blog index page
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

    } else if (localStorage.getItem('categoryChoice') === "nonTechnical") {
      $('.technical').addClass('hidden');
      $('#chooseBoth').removeClass('bg-yellow-500');
      $('#chooseTechnical').removeClass('bg-yellow-500');
      $('#chooseNonTechnical').addClass('bg-yellow-500');

    } else if (localStorage.getItem('categoryChoice') === "all") {
      $('#chooseBoth').addClass('bg-yellow-500');
      $('#chooseTechnical').removeClass('bg-yellow-500');
      $('#chooseNonTechnical').removeClass('bg-yellow-500');
    }

    // choosing which articles to make visible based on choice in cat modal
    function chooseBoth() {
      window.localStorage.setItem('categoryChoice', 'all');
      $('.technical').removeClass('hidden');
      $('.nonTechnical').removeClass('hidden');

      $('#chooseBoth').addClass('bg-yellow-500');
      $('#chooseTechnical').removeClass('bg-yellow-500');
      $('#chooseNonTechnical').removeClass('bg-yellow-500');

      $('#catModal').addClass('hidden');
    }

    function chooseTechnical(){
      console.log('function choosetechnical');
      window.localStorage.setItem('categoryChoice', 'technical');
      $('.technical').removeClass('hidden');
      $('.nonTechnical').addClass('hidden');

      $('#chooseBoth').removeClass('bg-yellow-500');
      $('#chooseTechnical').addClass('bg-yellow-500');
      $('#chooseNonTechnical').removeClass('bg-yellow-500');

      $('#catModal').addClass('hidden');
    };

    function chooseNonTechnical() {
      window.localStorage.setItem('categoryChoice', 'nonTechnical');
      $('.nonTechnical').removeClass('hidden');
      $('.technical').addClass('hidden');

      $('#chooseBoth').removeClass('bg-yellow-500');
      $('#chooseTechnical').removeClass('bg-yellow-500');
      $('#chooseNonTechnical').addClass('bg-yellow-500');

      $('#catModal').addClass('hidden');
    }

    $( "#chooseBoth" ).click(chooseBoth);
    $( "#chooseTechnical" ).click(chooseTechnical);
    $( "#chooseNonTechnical" ).click(chooseNonTechnical);

    // hide cat modal if its clicked.
    // must be at bottom
    $( "#catModal" ).click(function() {
      $('#catModal').toggleClass('hidden');
    });
})

