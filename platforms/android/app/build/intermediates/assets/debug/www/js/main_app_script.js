$(window).on('load', function ()
{	
	var $preloader = $('.preloader_wrapper');
	$preloader.delay(500).fadeOut('slow');
	$preloader.css('display', 'none');

	//HIDE CLOSED TABS
	$(".ListArea .trackArchives").hide();
	$(".ListArea .discountsTab").hide();
	$(".ListArea .accountTab").hide();
	$(".ListArea .trackNumbers").show();


	function loadDatafromLocalStorage()
	{
		for (var i = 0; i < localStorage.length; i++)
        {

            var locItemsHistory = localStorage.getItem(localStorage.key(i));
            var loc_code = locItemsHistory.substr(0, locItemsHistory.search( /,/i ));
            var loc_name = locItemsHistory.substr(locItemsHistory.search( /,/i)+1, locItemsHistory.length);

            //alert( locItemsHistory.search( /,/i ) );

        	var loc_track = 
			"<div class=\"trackCard\">"+
				"<div class=\"trackStatusIcon\">"+
					"<img src=\"control_elements/status/arrow_untrackable.png\" alt=\"\">"+
				"</div>"+
				"<div class=\"trackStatusInfo\">"+
					"<div class=\"trackNumberCode\">"+
						loc_code+
					"</div>"+
					"<div class=\"trackName\">"+
						loc_name+
					"</div>"+
					"<div class=\"trackLocation\">"+
						"Russian Federation, Tyumen 625026, Arrival at inward office exchange..."+
					"</div>"+
				"</div>"+
				"<div class=\"action_show_delete\">"+
					"<img src=\"control_elements/actions/arrow_action_show.png\" alt=\"\">"+
				"</div>"+
				"<div class=\"deleteButton\">"+
					"Delete"+
				"</div>"+
			"</div>";


            $(".ListArea .trackNumbers").append(loc_track);
        }
	}
	loadDatafromLocalStorage();

});

$(document).ready(function()
{
	// TAB NAVIGATION
	$('.tabNavIcon').bind( "click", function()
	{
		$('.tabNavIcon').removeClass("selectedTab");
		$(this).addClass("selectedTab");

		if ($(this).hasClass( "TabList" ))
		{
			$(".ListArea .trackArchives").hide();
			$(".ListArea .discountsTab").hide();
			$(".ListArea .accountTab").hide();
			$(".ListArea .trackNumbers").show();

			$(".SortTab").children(".Archive").hide();
			$(".SortTab").children(".Account").hide();
			$(".SortTab").children(".Discount").hide();
			$(".SortTab").children(".sortTabItem").show();
			
		}
		if ($(this).hasClass( "TabArchive" ))
		{
			$(".ListArea .trackNumbers").hide();
			$(".ListArea .discountsTab").hide();
			$(".ListArea .accountTab").hide();
			$(".ListArea .trackArchives").show();

			$(".SortTab").children(".sortTabItem").hide();
			$(".SortTab").children(".Discount").hide();
			$(".SortTab").children(".Account").hide();
			$(".SortTab").children(".Archive").show();
		}
		if ($(this).hasClass( "TabDiscount" ))
		{
			$(".ListArea .trackArchives").hide();
			$(".ListArea .trackNumbers").hide();
			$(".ListArea .accountTab").hide();
			$(".ListArea .discountsTab").show();

			$(".SortTab").children(".sortTabItem").hide();
			$(".SortTab").children(".Archive").hide();
			$(".SortTab").children(".Account").hide();
			$(".SortTab").children(".Discount").show();
		}
		if ($(this).hasClass( "TabAccount" ))
		{
			$(".ListArea .trackArchives").hide();
			$(".ListArea .trackNumbers").hide();
			$(".ListArea .discountsTab").hide();
			$(".ListArea .accountTab").show();

			$(".SortTab").children(".sortTabItem").hide();
			$(".SortTab").children(".Archive").hide();
			$(".SortTab").children(".Discount").hide();
			$(".SortTab").children(".Account").show();
		}
	});



	//ADD A NEW TRACK TO LIST
	$(".head_column .plus_btn").bind( "click", function()
	{
		modalAddNewTrack();
	});
	$(".modalAddTrack .modalClose button").bind( "click", function()
	{
		modalCloseAddingPage();
	});


	function modalAddNewTrack()
	{
		$(".modalAddTrack").slideDown();
	}
	function modalCloseAddingPage()
	{
		$(".modalAddTrack").slideUp();
	}


	//DEVELOPER INFO ABOUT
	$(".head_column .about_btn").bind( "click", function()
	{
		$(".aboutAppDeveloper").slideDown();
	});
	$(".exitAboutTab .closeAboutAppInfoBtn").bind( "click", function()
	{
		$(".aboutAppDeveloper").slideUp();
	});


	// RIGHT SIDE ACTION ON ARROW ON TRACK
	function ActionClickArrowDelete()
	{
		$( ".action_show_delete img" ).bind( "click", function()
	    {
	    	if ($(this).attr('src') === 'control_elements/actions/arrow_action_show.png')
	    	{
	    		$(this).attr('src','control_elements/actions/arrow_action_hide.png');
	  			$(this).parent(".action_show_delete").parent(".trackCard").css("width", "100%");
	    	}
	    	else
	    	{
	    		$(this).attr('src','control_elements/actions/arrow_action_show.png');
	  			$(this).parent(".action_show_delete").parent(".trackCard").css("width", "120%");
	    	}    	
		});
	}
    
    ActionClickArrowDelete();

	// RIGHT SIDE ACTION ON ARROW ON TRACK
	function deleteTrack()
	{
		$( ".trackCard .deleteButton" ).bind( "click", function()
	    {
			$(this).parent(".trackCard").slideUp();
			var del_track_str = $(this).siblings(".trackStatusInfo").children(".trackNumberCode").html();

			setTimeout(function()
			{
				$(this).parent(".trackCard").remove();
				localStorage.removeItem(del_track_str);
			}, 800);

			
		});
	}

	deleteTrack();


    $(".modalAddTrack .modalContent button").bind( "click", function()
	{
		var new_track_name = $(".modalAddTrack .modalContent .modalInputName input").val();
		var new_track_code = $(".modalAddTrack .modalContent .modalInputCode input").val();

		$(".modalAddTrack .modalContent .modalInput input").val("");

		

		var tempNewTrack = 
			"<div class=\"trackCard\">"+
				"<div class=\"trackStatusIcon\">"+
					"<img src=\"control_elements/status/arrow_untrackable.png\" alt=\"\">"+
				"</div>"+
				"<div class=\"trackStatusInfo\">"+
					"<div class=\"trackNumberCode\">"+
						new_track_code+
					"</div>"+
					"<div class=\"trackName\">"+
						new_track_name+
					"</div>"+
					"<div class=\"trackLocation\">"+
						"Russian Federation, Tyumen 625026, Arrival at inward office exchange..."+
					"</div>"+
				"</div>"+
				"<div class=\"action_show_delete\">"+
					"<img src=\"control_elements/actions/arrow_action_show.png\" alt=\"\">"+
				"</div>"+
				"<div class=\"deleteButton\">"+
					"Delete"+
				"</div>"+
			"</div>";
		
		//console.log(JSON.stringify(tempNewTrack));


		//Adding info to localStorage

		var arrNewTrackCode = [];
		arrNewTrackCode.push(new_track_code);
		arrNewTrackCode.push(new_track_name);
		
		localStorage.setItem(new_track_code, arrNewTrackCode);
		//localStorage.clear();
		//console.log(arrNewTrackCode);

		$(".ListArea .trackNumbers").append(tempNewTrack);
		modalCloseAddingPage();

		ActionClickArrowDelete();
		deleteTrack();

	});

});