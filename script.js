const theme = document.getElementById('select_theme')
theme.addEventListener('change', function() {
    if (theme.value === 'Dark'){
        document.body.classList.remove('bg-light');
    
        document.body.classList.add('bg-dark');
    }

    else if(theme.value === 'Light'){
        document.body.classList.remove('bg-dark')

        document.body.classList.add('bg-light')
    }
})