
        window.onscroll = function() {
            myFunction()
        };

        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }

        $(window).scroll(function() {
            var scrollTop = $(this).scrollTop();

            $('.navbar-underlay').css({
                opacity: function() {
                    var elementHeight = $(this).height();
                    return 1 - (elementHeight - scrollTop) / elementHeight;
                }
            });
        });
