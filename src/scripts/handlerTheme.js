export default function (){
  const bodyclass = document.body.classList
  const themeIcon = document.getElementById('theme-icon');

  if (themeIcon.getAttribute('src') === 'images/icons/theme-icon-light.png') {
    themeIcon.setAttribute('src', 'images/icons/theme-icon-dark.png');
  } else {
    themeIcon.setAttribute('src', 'images/icons/theme-icon-light.png');
  }

  
  if(bodyclass.contains('theme-dark')){
    document.documentElement.style.setProperty('--background-main-dark', '#e4e4e4');
    document.documentElement.style.setProperty('--background-second-dark', '#c4c4c4');
    document.documentElement.style.setProperty('--text-main-light', '#0f0f0f');
    document.documentElement.style.setProperty('--text-main-dark', '#ececec');
    document.documentElement.style.setProperty('--main-color', '#3f9cbb');

    document.body.classList.remove('theme-dark')
    document.body.classList.add('theme-light')


  }else if(bodyclass.contains('theme-light')){
    document.documentElement.style.setProperty('--background-main-dark', '#19191C');
    document.documentElement.style.setProperty('--background-second-dark', '#252529');
    document.documentElement.style.setProperty('--text-main-light', '#ececec');
    document.documentElement.style.setProperty('--text-main-dark', '#0f0f0f');
    document.documentElement.style.setProperty('--main-color', '#4fb6d7');
  
    document.body.classList.remove('theme-light')
    document.body.classList.add('theme-dark')
  }

}