(function (global, $) {
        'use strict'

	    var LCC = global.LCC || {};
	    LCC.Modules = LCC.Modules || {};

	    LCC.Modules.SubscribeToNewsletter = function () {
	        this.start = function (element) {

                var inDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;

				if (inDesignMode != "1") 
                {
                    var nameInput = $("input[title='Name']");
                    var emailInput = $("input[title='Email']");
                    var dobInput = $("input[title='Dob']");
                    var postcodeInput = $("input[title='Postcode']");

                    $.validator.addMethod("regex", function (value, element, regexpr) {
                        return regexpr.test(value.toUpperCase());
                    }, "Please enter a valid postcode.");

                    $("#aspnetForm").validate();

                    $(nameInput).rules("add", {
                        required: true,
                        messages:
                        {
                            required: "Please enter your first name"
                        }
                    });

                    $(emailInput).rules("add", {
                        email: true,
                        required: true,
                        messages:
                        {
                            email: "Please enter a valid email",
                            required: "Please enter your email address"
                        }
                    });

                    $(dobInput).rules("add", {
                        required: true,
                        messages:
                        {
                            required: "Please enter a date of birth"
                        }
                    });

                    $(postcodeInput).rules("add", {
                        required: true,
                        regex: /(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) ?[0-9][ABD-HJLNP-UW-Z]{2})/,
                        messages:
                        {
                            required: "Please enter a postcode",
                            regex: "Please enter a valid postcode"
                        }
                    });

                    $(dobInput).datepicker({
                        defaultDate: null,
                        dateFormat: "dd/mm/yy",
                        changeMonth: true,
                        changeYear: true,
                        yearRange: "-19:+0",
                        minDate: "-19Y",
                        maxDate: "0",
                        onSelect: function (selected) {
                            $(dobInput).datepicker("option", "minDate", selected);
                            $(this).change();
                        }

                    });

                }

            }
        
        };

    global.LCC = LCC;
})(window, jQuery);