export function executeForAllGameTabs(action: (tab: chrome.tabs.Tab) => void) {
  [
    'http://bondageprojects.com/*',
    'https://bondageprojects.com/*',
    'http://www.bondageprojects.com/*',
    'https://www.bondageprojects.com/*',
    'http://bondageprojects.elementfx.com/*',
    'https://bondageprojects.elementfx.com/*',
    'http://www.bondageprojects.elementfx.com/*',
    'https://www.bondageprojects.elementfx.com/*'
  ].forEach(url => {
    chrome.tabs.query({
      url
    }, tabs => {
      tabs.forEach(action);
    });
  });
}

export function isDevelopmentMode() {
  return !('update_url' in chrome.runtime.getManifest());
}

export function log(message?: any, ...optionalParams: any[]) {
  if (isDevelopmentMode()) {
    console.log(`[Bondage Club Tools] ${message}`, optionalParams);
  }
}
