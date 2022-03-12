function select_item(item) {
    let visible_section = document.querySelectorAll('section.visible')
        // REMOVENDO CLASSE VISIBLE DAS SECTION
    for (const element of visible_section) {
        element.classList.remove('visible')
    }
    // REMOVENDO O ID SELECTED DOS LIST ITEM
    document.getElementById('selected').id = ''
        // ADICIONANDO CLASS DE VISIBLE NA SECTION SELECIONADA
    document.getElementById(item).classList.add('visible')
        // ADICIONANDO ID DE SELECTED EM LIST ITEM SELECIONADO
    document.querySelector('ul .' + item).id = 'selected'
        // ADICIONANDO CLASS COM O NOME DO ITEM SELECIONADO NO CARD PARA MUDAR DE TAMANHO
    document.getElementById('card').removeAttribute('class')
    document.getElementById('card').classList.add(item)
}

// Deixar o form visível

function show_form(class_form) {
    var contact_form = document.getElementById('contact-form')
    var side_button_icon = document.getElementById('contact_button_icon')
    var slide_button = document.querySelector('#contact-button h2')

    contact_form.classList.toggle(class_form)
    select_item('about')

    side_button_icon.classList.toggle('icon-mail-envelope-closed')
    side_button_icon.classList.toggle('icon-home')

    if (side_button_icon.classList.contains('icon-home')) {
        slide_button.innerHTML = 'Voltar ao Início'
    } else if (side_button_icon.classList.contains('icon-mail-envelope-closed')) {
        slide_button.innerHTML = 'Entrar em Contato'
    }
}