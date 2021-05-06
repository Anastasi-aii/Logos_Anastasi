// $ - глобальный объект (document, window)

$(function () {
  // $('...') - выбор элемента (document.querySelectorAll)
  $('.my-block').css('color', 'green'); // Метод css

  // БАЗОВЫЕ ФИЛЬТРЫ
  $('.my-block:first').css('color', 'red');
  $('.my-block:nth-child(3)').css('color', 'red');

  // ФИЛЬТРЫ ПО СОДЕРЖИМОМУ
  $('.my-block:has(span)').css('color', 'blue');
  $('.my-block:parent').css('color', 'yellow');
  $('.my-block:empty').css('background-color', 'yellow');

  // МЕТОДЫ ВЫБОРА ЭЛЕМЕНТОВ
  $('.important').parent().css('background-color', 'pink'); // Элемент-родитель
  $('.my-block').children().css('display', 'none'); // Дети
  $('.important').closest('.my-block').css('color', 'black'); // Ближайший предок, соответствующий селектору

  $('.my-block').find('[data-important]').prev(); // Предыдущий элемент
  $('.my-block').find('[data-important]').next(); // Следующий элемент
  $('.my-block').find('[data-important]').siblings(); // Соседи

  // СОБЫТИЯ
  $('button[data-message]').on('click', function () {
    alert($(this).text());
  }); //Аналог addEventListener

  $('button[data-message]').click(function () {
    alert('Hello');
  }); //Аналог onclick

  // МЕТОДЫ ДЛЯ РАБОТЫ С КЛАССАМИ
  $('.my-block:first').addClass('first-div'); //Добавить класс
  $('.my-block:nth-child(2)').removeClass('first-div'); //Удалить класс
  $('.my-block:nth-child(3)').toggleClass('first-div'); //Поменять класс (удалить/добавить)

  // АНИМАЦИЯ В jQuery
  // $('#animated-block').animate({ height: '200px' }, 2000); Изменять свойтсво на протяжении...
  // $('#animated-block').hide(1000).delay(3000).show(1000); Cкрыть/показать элемент с задержкой между эффектами

  // $('#animated-block').fadeOut(1000).delay(3000).fadeIn(1000); Тоже самое, другим способом
  // fadeToggle() - применить fadeIn()/fadeOut() по ситуации

  // $('#animated-block').slideUp(1000).delay(3000).slideDown(1000);
  // slideToggle() - применить slideUp()/slideDown() по ситуации

  // РАБОТА С АТРИБУТАМИ
  var importantInfo = $('.my-block[data-important]').attr('data-important');

  //РАБОТА С ФОРМОЙ

  $('#field').on('input', function () {
    var inputValue = $(this).val(); //Содержимое поля
    $('label[for="field"]').text(inputValue);
  });

  // Метод each()
  $('.my-block').each(function (index) {
    var green = 'rgb(0, 128, 0)';
    var pink = 'rgb(255, 192, 203)'

    if ($(this).css('background-color') === green) $(this).css('background-color', pink);
    if ($(this).css('background-color') === pink) $(this).css('background-color', 'green');
  });
});