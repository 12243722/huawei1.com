import './library/Z.js';
import './library/jquery.js'

 $(function() {
        $('#submit').on('click', function() {
            $.ajax({
                type: "POST",
                url: "/reg",
                data: {
                    username: $('#username').val(),
                    password: $('#password').val()
                },
                // dataType: 'json',
                success: function(response) {
                    console.log(JSON.parse(response));
                }
            });
        });
    });

     $(function() {
                if (document.cookie) { // 判断有cookie数据
                    let arr = document.cookie.split('; ');
                    arr.forEach(elm => {
                        let item = elm.split('=');

                        switch (item[0]) {
                            case 'username':
                                $('[name="username"]').attr('value', item[1]);
                                $('#save').attr('checked', 'checked');
                                break;
                            case 'password':
                                $('[name="password"]').attr('value', item[1]);
                                break;
                        }
                        // console.log(item[0], item[1]);
                    })
                }

                $('#save').on('click', function() {
                    if (this.checked) {
                        document.cookie = 'username=' + $('[name="username"]')[0].value;
                        document.cookie = 'password=' + $('[name="password"]')[0].value;
                    }
                });
            });