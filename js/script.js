$(document).ready(function (){
    $('.header__toggler').on('click', function(){
        $('.header__menu').toggleClass('open');
    });

    $('.js-btn').on('click', function(){
      $('.setting__holder').addClass('open');
    });

    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $( ".datepicker" ).datepicker();


    /* validation*/

    var validSrc = '<span></span>';
    var invalidSrc = "<span></span>";

    $(document).ready(function() {
        initMasks();
        initListeners();
    });

    function initMasks() {
        $('input[name="phone-number"]').mask("+7 (000) 000-00-00");
    }

    function initListeners() {
        $("#phone").on("blur", validatePhone);
        $("#name").on("blur", validateName);
        $("#email").on("blur", validateEmail);

        $(".submitBtn").on("click", validateForm);
    }



    function validatePhone() {
        var isValid = false;
        var length = $("#phone").val().length;
        if (length == 18) {
            $(".phoneValidationImg").html( '').parent().parent().removeClass('er');
            $("#phone").removeClass("invalid");
            isValid  = true;
        } else {
            $(".phoneValidationImg").html('Телефон введен неверно').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }



    function validateName() {
        var isValid = false;
        var length = $("#name").val().length;
        if (length > 1) {
            $(".nameValidationImg").html( '').parent().parent().removeClass('er');
            $("#name").removeClass("invalid");
            isValid  = true;
        } else {
            $(".nameValidationImg").html('Имя не заполнено').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validateEmail() {
        var emailAddress = $("#email").val().trim().toLowerCase();
        var pattern = new RegExp(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        var validEmail = pattern.test(emailAddress);
        var reason = "";
        if (!validEmail) {
            reason = "Improper format";
        } else {
            if (emailAddress.includes("@hotmail")) {
                validEmail = false;
                reason = "Hotmail not accepted";
            } else if (emailAddress.includes("@gmail")) {
                validEmail = false;
                reason = "Gmail not accepted";
            } else if (emailAddress.includes("@yahoo")) {
                validEmail = false;
                reason = "Yahoo not accepted";
            }
        }
        if (validEmail) {
            $(".emailValidationImg").html( '').parent().parent().removeClass('er');
            $("#email").removeClass("invalid");
        } else {
            $(".emailValidationImg").html('Email введен неверно').parent().parent().addClass('er');
        }
        return validEmail;
    }

    function validateForm() {
        var formIsValid = true;

        if (!validatePhone()) {
            $("#phone").addClass("invalid");
            formIsValid = false;
        } else {
            $("#phone").removeClass("invalid");
        }




        if (!validateName()) {
            $("#name").addClass("invalid");
            formIsValid = false;
        } else {
            $("#name").removeClass("invalid");
        }
    }

});
