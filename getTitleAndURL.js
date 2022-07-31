const createTextFromTemplate = (title, url, template) => {
  let txt = template;
  txt = txt.replace(/%%URL%%/g,url);
  return txt;
}


const run = () => {
  chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT},(tabs) => {
    let multitwitchUrl = 'https://www.multitwitch.tv/';
    const template = '%%URL%%';

    tabs.forEach((tab,i) => {
        if (tab.url.indexOf('https://www.twitch.tv/') == 0) {
            multitwitchUrl += createTextFromTemplate(tab.title,tab.url,template).split('https://www.twitch.tv/')[1] + '/';
        }
    });

    let newwin = window.open(multitwitchUrl);

  });
}

window.addEventListener('load',()=>{
  run();
})