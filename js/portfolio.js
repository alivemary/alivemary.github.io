$(document).ready(function () {
   
    $('.nav-item').on('click', function () {
        console.log(this.id);
        switch (this.id) {
            case 'aM':
                $('#aboutMe').removeClass('hidden');
                $('#projects').removeClass('hidden');
                break;
            case 'pR':
                $('#aboutMe').addClass('hidden');
                $('#projects').removeClass('hidden');
                break;
            case 'last':
                $('#aboutMe').removeClass('hidden');
                $('#projects').addClass('hidden');
                break;
        }
    });
});