var validator = function(fieldId, regex){
	$(fieldId).on('keypress keydown keyup',function(){
		if (!$(this).val().match(regex)) {
	      // there is a mismatch, hence show the error message
	      $(fieldId+'Error').removeClass('hidden');
	      $(fieldId).removeClass('valid');
	      $(fieldId).addClass('invalid');
	      $(fieldId+'Error').show();
	  }else{
	        // else, do not display message
	        $(fieldId+'Error').addClass('hidden');
	        $(fieldId).addClass('valid');
	        $(fieldId).removeClass('invalid');
	    }
	});
}

var text_validate = function(fieldId){
	var $regexname= /^([a-zA-Z]{3,100})$/;
	validator(fieldId, $regexname);
}

var ss_validate = function(fieldId){
	var $ssRegex = /^\d{3}-\d{2}-\d{4}$/;
	validator(fieldId, $ssRegex);
}

var num_validate = function(fieldId){
	var $numRegex = /^[0-9]+$/;
	validator(fieldId, $numRegex);
}

var addr_validate =function(fieldId){
	var $addrRegex = /^\s*[a-zA-Z0-9,-\s]+\s*$/;
	validator(fieldId, $addrRegex);
}

var phone_validate =function(fieldId){
 	var $phRegex = /^98\d{8}$/;
	validator(fieldId, $phRegex);
}

var email_validate =function(fieldId){
 	var $emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	validator(fieldId, $emailRegex);
}

var zip_validate =function(fieldId){
 	var $zipRegex = /^\d{5}$/;
	validator(fieldId, $zipRegex);
}

$(document).ready(function(){

	text_validate("#name");
	text_validate("#spouse");
	text_validate("#city");
	text_validate("#state");
	text_validate("#ins_company");
	text_validate("#mortgagee");
	text_validate("#mortgagee_2");
	text_validate("#home_town");
	text_validate("#cons_other_specify");
	text_validate("#dwell_other_specify");
	text_validate("#dwell_alt_heat_other");
	text_validate("#insurance_claim_desp1");
	text_validate("#insurance_claim_desp2");
	text_validate("#insurance_claim_desp3");
	text_validate("#insurance_claim_desp4"); home_ins_desp1

	addr_validate("#address");
	addr_validate("#property_address");

	zip_validate("#zip");

	ss_validate("#ss1");
	ss_validate("#ss2");

	phone_validate("#phoneHome");
	phone_validate("#cellHome");
	phone_validate("#workHome");

	email_validate("#email");

	num_validate("#ins_dwell");
	num_validate("#ins_other");
	num_validate("#ins_personal_pro");
	num_validate("#ins_loss");
	num_validate("#ins_personal_lia");
	num_validate("#ins_medi");
	num_validate("#ins_deduct");
	num_validate("#home_town_units");
	num_validate("#home_ins_amount1");
	num_validate("#home_ins_amount2");
	num_validate("#home_ins_amount3");
	num_validate("#home_ins_amount4");


    // $("input:number").on('input', function(){
    //         var input=$(this);
    //         var re = /^[0-9]+$/;

    //         var is_valid=re.test(input.val());
    //         if(is_valid){input.removeClass("invalid").addClass("valid").addClass("hidden");}
    //         else{
    //            input.removeClass("valid").addClass("invalid").removeClass("hidden");
    //         }
    //      });

});