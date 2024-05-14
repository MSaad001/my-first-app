import { Component } from '@angular/core';
import { withHttpTransferCacheOptions } from '@angular/platform-browser';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServers = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000)
  }
  
  onCreateServer() {
    this.serverCreationStatus = 'A new server was created!';
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;   
  }
}
