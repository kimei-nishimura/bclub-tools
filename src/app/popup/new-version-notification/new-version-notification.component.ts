import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-version-notification',
  templateUrl: './new-version-notification.component.html',
  styleUrls: ['./new-version-notification.component.scss']
})
export class NewVersionNotificationComponent implements OnInit {

  public extensionVersion: string;

  constructor() {
    this.extensionVersion = chrome.runtime.getManifest().version;
  }

  ngOnInit() {
  }

  public showChangelog() {
    chrome.tabs.create({
      url: 'https://github.com/Dutchie322/bclub-tools/releases/tag/v' + this.extensionVersion
    });
  }
}
