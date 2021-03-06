$(document).ready(function(){

    //datepicker

    $( function() {
        $( "#datepicker-one" ).datepicker();
        $( "#datepicker-two" ).datepicker();
    });


    //hover-el
    
    $( ".icn-que" ).hover(function() {
        var a = $(this).closest('.input-text').find('.abs-block');
        a.fadeIn();
        var b = $(this).closest('.asd-hint').find('.abs-block');
        b.fadeIn();
    }, function() {
        var a = $(this).closest('.input-text').find('.abs-block');
        a.fadeOut();
        var b = $(this).closest('.asd-hint').find('.abs-block');
        b.fadeOut();
    });


    //checked 

    var check = $('.welkit-choice input');

    check.change(Change);

    function Change(event) {
        $(this).closest('.line-tabs').toggleClass('active-line');
        $(this).closest('.line-tabs').find('.tab-text').toggleClass('active-color');
        $(this).closest('.line-tabs').find('.tab-number').toggleClass('active-color');
    }

    




    //step

    $(".form-steps").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "fade",
         onStepChanged: (event, currentIndex, newIndex) =>
            {       


            },
    });

    $('.next').each( (i, item, next) => {
       $(item).click(() => {
            $(".form-steps").steps("next")
        })
    })

    $('.previous').each( (i, item, next) => {
       $(item).click(() => {
            $(".form-steps").steps("previous")
        })
    })


    // select

    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;
    
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
    
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
    
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
    
        var $listItems = $list.children('li');
    
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
    
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });
    
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

    // $('.select-options li').on('click', function() {
    //     selectVal();
    // })



    // function selectVal() {
    //     var val = $('.select-styled').html();
    //     $('#submit').val() = val;
    // }

    // console.log($('#submit').val());
    
    



    //mune 

    var visible = false;

    $('#menuToggle').on('click', function() { menuToggle() });

    function menuToggle() {
        if(visible == false) {
            menuShow();
            return;
        } 
        if(visible == true) {
            nenuHide()
            return;
        }
    }

    function menuShow() {
        $(".sidebar").addClass('slide')
        $('.form-two-page').addClass('left-padding')
        $('.add-profile-box').addClass('left-padding')
        visible = true;
        return;
    }

    function nenuHide() {
        $(".sidebar").removeClass('slide')
        $('.form-two-page').removeClass('left-padding')
        $('.add-profile-box').removeClass('left-padding')
        visible = false;
        return;
    }



    //input file  

    $('.chooseFile').each(function(index, item) {
        $(item).bind('change', function () {
            var filename = $(item).val();
            if (/^\s*$/.test(filename)) {
              $(".noFile").text("No file chosen..."); 
            }
            else {
              $(item).parent().find(".file-select-name").text(filename.replace("C:\\fakepath\\", "")); 
            }
        });
    })



    //accordion

    function accordion(el){
        var currentEl = null;
        el.find(".item-li").click(function(){
           
            if(currentEl) {
                $(currentEl).find('.arrow-lnk').removeClass('rotate');
            }
            $(this).next(".drop-menu").slideToggle('fast');
            $(".drop-menu").not($(this).next(".drop-menu")).slideUp('fast');
            if(currentEl && currentEl === this) {
                return;
            }
            $(this).find('.arrow-lnk').addClass('rotate');
            currentEl = this;
        });
    }
    $(document).ready(function(){
        accordion($(".div"));
    });
      
});

